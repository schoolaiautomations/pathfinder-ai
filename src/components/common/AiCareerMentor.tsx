import React, { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  MessageSquare,
  X,
  Send,
  Mic,
  MicOff,
  RotateCcw,
  Calendar,
  ChevronDown,
  Volume2,
  Bot,
  HelpCircle,
  AlertCircle,
  Loader2,
  Compass,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { askCareerMentor, transcribeAudioBlob } from "@/lib/ai-mentor";

interface AiCareerMentorProps {
  onOpenBooking?: () => void;
}

interface ChatMessage {
  id: string;
  sender: "user" | "mentor";
  text: string;
  timestamp: string;
}

const STARTER_QUESTIONS = [
  { label: "10th తర్వాత MPC or BiPC?", query: "10వ తరగతి తర్వాత MPC లేదా BiPC ఏది మంచిది?" },
  { label: "Weak in Maths, options?", query: "I am weak in Maths. What are my best career options after 10th?" },
  { label: "Police Officer path?", query: "పోలీస్ అవ్వాలంటే 10వ తరగతి తర్వాత ఏం చదవాలి?" },
  { label: "Is Polytechnic better?", query: "10th తర్వాత ఇంటర్ కంటే పాలిటెక్నిక్ డిప్లొమా మంచిదా?" },
];

export const AiCareerMentor: React.FC<AiCareerMentorProps> = ({ onOpenBooking }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "mentor",
      text: "నమస్కారం! Hello! Ask me any question about 10th streams (MPC, BiPC, CEC, MEC, Poly), entrance exams, degrees, or careers in Telugu or English. I will provide direct, structured answers (~80 words).",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [speechLang, setSpeechLang] = useState<"te-IN" | "en-IN">("te-IN");
  const [isListening, setIsListening] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [voiceNotice, setVoiceNotice] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(true); // Show on first load

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const recognitionRef = useRef<any>(null);
  const mediaRecorderRef = useRef<any>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // Tooltip nudge: show for 3s, then hide. Repeat every 10s.
  useEffect(() => {
    const firstHide = setTimeout(() => setShowTooltip(false), 3000);
    const interval = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }, 10000);

    return () => {
      clearTimeout(firstHide);
      clearInterval(interval);
    };
  }, []);

  // Update speech lang dynamically for native recognition if active
  useEffect(() => {
    if (recognitionRef.current) {
      recognitionRef.current.lang = speechLang;
    }
  }, [speechLang]);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen]);

  const toggleSpeechListening = async () => {
    setVoiceNotice(null);

    // 1. Try Native Web Speech API (Chrome, Edge, Safari, Mobile Chrome)
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      if (isListening) {
        try {
          recognitionRef.current?.stop();
        } catch (e) {}
        setIsListening(false);
      } else {
        try {
          const recognition = new SpeechRecognition();
          recognition.continuous = false;
          recognition.interimResults = false;
          recognition.lang = speechLang;

          recognition.onstart = () => {
            setIsListening(true);
            setVoiceNotice(
              speechLang === "te-IN"
                ? "తెలుగులో మాట్లాడుతున్నారు... ప్రశ్న చెప్పండి!"
                : "Listening in English... Speak your question!"
            );
          };

          recognition.onresult = (event: any) => {
            const transcript = event.results[0]?.[0]?.transcript;
            if (transcript) {
              setInputText(transcript);
              setVoiceNotice(null);
            }
          };

          recognition.onerror = (event: any) => {
            console.warn("Speech recognition error:", event.error);
            setIsListening(false);
            if (event.error === "not-allowed") {
              setVoiceNotice("Microphone permission was denied. Please allow microphone in browser settings.");
            } else {
              setVoiceNotice("Could not capture speech. Please try speaking again or type your question.");
            }
          };

          recognition.onend = () => {
            setIsListening(false);
          };

          recognitionRef.current = recognition;
          recognition.start();
        } catch (e: any) {
          console.warn("Speech recognition start failed:", e);
          setIsListening(false);
        }
      }
      return;
    }

    // 2. Fallback: MediaRecorder Audio Recording (Firefox & browsers without SpeechRecognition)
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      if (isListening && mediaRecorderRef.current) {
        try {
          mediaRecorderRef.current.stop();
        } catch (e) {}
        setIsListening(false);
      } else {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          const mediaRecorder = new MediaRecorder(stream);
          audioChunksRef.current = [];

          mediaRecorder.ondataavailable = (event) => {
            if (event.data && event.data.size > 0) {
              audioChunksRef.current.push(event.data);
            }
          };

          mediaRecorder.onstop = async () => {
            stream.getTracks().forEach((track) => track.stop());
            if (audioChunksRef.current.length === 0) return;

            const audioBlob = new Blob(audioChunksRef.current, {
              type: mediaRecorder.mimeType || "audio/webm",
            });
            setIsTranscribing(true);
            setVoiceNotice(
              speechLang === "te-IN"
                ? "వాయిస్ ప్రాసెస్ అవుతోంది..."
                : "Transcribing your voice question..."
            );

            try {
              const transcribed = await transcribeAudioBlob(audioBlob, speechLang);
              if (transcribed) {
                setInputText(transcribed);
                setVoiceNotice(null);
              } else {
                setVoiceNotice(
                  speechLang === "te-IN"
                    ? "వాయిస్ సరిగ్గా అర్థం కాలేదు. దయచేసి టైప్ చేయండి."
                    : "Could not transcribe audio. Please speak clearly or type."
                );
              }
            } catch (err) {
              setVoiceNotice("Voice processing failed. Please type your query.");
            } finally {
              setIsTranscribing(false);
            }
          };

          mediaRecorder.start(250);
          mediaRecorderRef.current = mediaRecorder;
          setIsListening(true);
          setVoiceNotice(
            speechLang === "te-IN"
              ? "రికార్డింగ్ ప్రారంభమైంది... మాట్లాడండి! (పూర్తయ్యాక మైక్ క్లిక్ చేయండి)"
              : "Recording voice... Speak now! (Click mic again when finished)"
          );

          // Auto-stop after 10s if student doesn't tap stop
          setTimeout(() => {
            if (mediaRecorder.state === "recording") {
              mediaRecorder.stop();
              setIsListening(false);
            }
          }, 10000);
        } catch (err: any) {
          console.warn("MediaRecorder mic access error:", err);
          setIsListening(false);
          setVoiceNotice("Microphone permission was denied. Please allow microphone in browser settings or use Chrome/Edge.");
        }
      }
      return;
    }

    // 3. Fallback when microphone is blocked or not available
    setVoiceNotice("Voice input works best on Google Chrome, Microsoft Edge, or mobile browsers.");
  };

  const handleSendMessage = async (queryToSend?: string) => {
    const text = (queryToSend || inputText).trim();
    if (!text || isLoading) return;

    // Stop listening if active
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsLoading(true);

    try {
      const reply = await askCareerMentor(text);
      const mentorMsg: ChatMessage = {
        id: `mentor-${Date.now()}`,
        sender: "mentor",
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, mentorMsg]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: `mentor-${Date.now()}`,
        sender: "mentor",
        text: "For accurate and personalized career planning tailored to your marks and background, please book an online counselling session with our expert counsellors.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "welcome",
        sender: "mentor",
        text: "నమస్కారం! Hello! Ask me any question about 10th streams (MPC, BiPC, CEC, MEC, Poly), entrance exams, degrees, or careers in Telugu or English. I will provide direct, structured answers (~100 words).",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  // Helper to check if a message mentions booking counselling
  const mentionsCounselling = (text: string) => {
    return /counselling|counsel|book|కౌన్సెలింగ్|బుక్/i.test(text);
  };

  // Helper to check if a message suggests exploring careers
  const mentionsCareers = (text: string) => {
    return /explore|career|traffic|guide|roadmaps|reports|అన్వేషించండి|కెరీర్/i.test(text);
  };

  return (
    <div className="fixed bottom-5 inset-x-0 pointer-events-none z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-end">
        <div className="pointer-events-auto relative flex flex-col items-end">
          {/* ─── Floating Action Button & Tooltip (When Closed) ─── */}
          {!isOpen && (
            <div className="flex items-center gap-2.5">
              {/* Tooltip Nudge */}
              {showTooltip && (
                <div className="bg-[#1C1917] text-[#FAF8F5] text-[11px] font-semibold px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap animate-in fade-in slide-in-from-right-2 duration-300 border border-stone-800">
                  Ask me if you have any queries
                </div>
              )}

              {/* Small Circular Button with Robot Icon */}
              <button
                type="button"
                onClick={() => {
                  setIsOpen(true);
                  setShowTooltip(false);
                }}
                className="w-12 h-12 rounded-full bg-[#1C1917] text-[#FAF8F5] shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 border border-[#E0D6CA]/30 cursor-pointer flex items-center justify-center relative"
                aria-label="Open AI Career Mentor"
              >
                <Bot className="w-5 h-5 text-[#C9A97A]" />
                <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#1C1917]" />
              </button>
            </div>
          )}

          {/* ─── Chat Window Popup Card (When Open) ─── */}
          {isOpen && (
            <div
              className="w-[calc(100vw-32px)] sm:w-[390px] h-[540px] max-h-[82vh] bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#E0D6CA] flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-5 duration-200"
              style={{ boxShadow: "0 20px 40px -15px rgba(0,0,0,0.25)" }}
            >
          {/* Header */}
          <div className="bg-[#1C1917] text-[#FAF8F5] px-4 py-3.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-stone-800 border border-stone-700 flex items-center justify-center text-lg">
                <Bot className="w-5 h-5 text-[#C9A97A]" />
              </div>
              <h3 className="font-extrabold text-sm tracking-tight text-white leading-none">
                Wabi AI Mentor
              </h3>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleClearChat}
                title="Reset conversation"
                className="p-1.5 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Minimize mentor"
                className="p-1.5 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#FAF8F5]">
            {messages.map((msg) => {
              const isUser = msg.sender === "user";
              const showBookingBtn = !isUser && mentionsCounselling(msg.text);

              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-[13px] leading-relaxed font-medium shadow-2xs ${
                      isUser
                        ? "bg-[#1C1917] text-[#FAF8F5] rounded-br-xs"
                        : "bg-white text-stone-900 border border-[#E0D6CA] rounded-bl-xs"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>

                    {/* AI Accuracy Disclaimer */}
                    {!isUser && msg.id !== "welcome" && (
                      <div className="mt-2 pt-1.5 border-t border-stone-200/80 flex items-center gap-1.5 text-[10px] text-stone-400 font-medium leading-normal">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-600/80 shrink-0 self-start mt-0.5" />
                        <span>AI provides general guidance and can make mistakes. Please verify eligibility with official notifications or consult our career counsellors before making decisions.</span>
                      </div>
                    )}

                    {/* Direct Action Buttons: Explore Careers & Book Online Counselling */}
                    {!isUser && msg.id !== "welcome" && (showBookingBtn || mentionsCareers(msg.text)) && (
                      <div className="mt-2.5 pt-2 border-t border-stone-200 space-y-1.5">
                        {/* Explore Careers Direct Button */}
                        <button
                          type="button"
                          onClick={() => {
                            setIsOpen(false);
                            navigate("/reports");
                          }}
                          className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300 text-[11px] font-extrabold shadow-2xs cursor-pointer transition-all hover:scale-[1.02]"
                        >
                          <Compass className="w-3.5 h-3.5 text-[#C9A97A]" />
                          <span>Explore Careers</span>
                        </button>

                        {/* Direct Booking Shortcut Button if Counselling is Mentioned */}
                        {showBookingBtn && onOpenBooking && (
                          <button
                            type="button"
                            onClick={() => {
                              setIsOpen(false);
                              onOpenBooking();
                            }}
                            className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-[11px] font-extrabold shadow-2xs cursor-pointer transition-all hover:scale-[1.02]"
                          >
                            <Calendar className="w-3.5 h-3.5 text-[#C9A97A]" />
                            <span>Book Online Counselling Session</span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  <span className="text-[9px] text-stone-400 px-1 mt-0.5 font-mono">
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}

            {/* Typing Loader */}
            {isLoading && (
              <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-white border border-[#E0D6CA] w-fit">
                <div className="w-2 h-2 rounded-full bg-[#C9A97A] animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-[#C9A97A] animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 rounded-full bg-[#C9A97A] animate-bounce [animation-delay:0.4s]" />
                <span className="text-[11px] text-stone-500 font-medium ml-1">
                  Mentoring...
                </span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips (Shows when only welcome message is present) */}
          {messages.length === 1 && (
            <div className="px-3 pb-2 bg-[#FAF8F5]">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1.5 px-1">
                Quick Questions:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {STARTER_QUESTIONS.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(q.query)}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-xl bg-white hover:bg-stone-100 border border-stone-200 text-stone-700 transition-colors text-left cursor-pointer shadow-2xs"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Voice Status & Notice Banner */}
          {(isListening || isTranscribing || voiceNotice) && (
            <div className={`px-3 py-1.5 flex items-center justify-between text-xs font-bold ${
              isListening ? "bg-red-50 text-red-700 border-t border-red-200 animate-pulse" :
              isTranscribing ? "bg-amber-50 text-amber-800 border-t border-amber-200" :
              "bg-stone-100 text-stone-700 border-t border-stone-200"
            }`}>
              <span className="flex items-center gap-1.5 truncate">
                {isListening && <span className="w-2 h-2 rounded-full bg-red-600 animate-ping shrink-0" />}
                {isTranscribing && <Loader2 className="w-3.5 h-3.5 animate-spin shrink-0 text-amber-700" />}
                <span className="truncate">
                  {voiceNotice || (isListening ? `Listening in ${speechLang === "te-IN" ? "Telugu (తెలుగు)" : "English"}... Speak now!` : "")}
                </span>
              </span>
              {isListening && (
                <button
                  type="button"
                  onClick={toggleSpeechListening}
                  className="text-[11px] underline text-red-800 shrink-0 ml-2 cursor-pointer font-extrabold"
                >
                  Done
                </button>
              )}
              {!isListening && voiceNotice && (
                <button
                  type="button"
                  onClick={() => setVoiceNotice(null)}
                  className="text-[10px] text-stone-500 hover:text-stone-900 shrink-0 ml-2 cursor-pointer"
                >
                  Dismiss
                </button>
              )}
            </div>
          )}

          {/* Input & Voice Controls Footer */}
          <div className="p-3 bg-white border-t border-[#E0D6CA] space-y-2">
            {/* Language & Voice Selector */}
            <div className="flex items-center justify-between text-[11px] font-bold text-stone-500 px-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono">
                  Voice Lang:
                </span>
                <button
                  type="button"
                  onClick={() => setSpeechLang("te-IN")}
                  className={`px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
                    speechLang === "te-IN"
                      ? "bg-stone-900 text-white font-extrabold"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  తెలుగు
                </button>
                <button
                  type="button"
                  onClick={() => setSpeechLang("en-IN")}
                  className={`px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
                    speechLang === "en-IN"
                      ? "bg-stone-900 text-white font-extrabold"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  English
                </button>
              </div>

              <span className="text-[10px] text-stone-400 font-medium">
                ~80 words &bull; EN &amp; తెలుగు
              </span>
            </div>

            {/* Input Row */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-1.5"
            >
              {/* Voice Input Mic Button - ALWAYS AVAILABLE */}
              <button
                type="button"
                onClick={toggleSpeechListening}
                disabled={isTranscribing}
                title={
                  isListening
                    ? "Stop recording"
                    : isTranscribing
                    ? "Transcribing voice audio..."
                    : `Voice Input (${speechLang === "te-IN" ? "Telugu" : "English"}) - Click to speak`
                }
                className={`p-2.5 rounded-xl border transition-all cursor-pointer shrink-0 flex items-center justify-center ${
                  isListening
                    ? "bg-red-600 text-white border-red-700 animate-pulse shadow-md"
                    : isTranscribing
                    ? "bg-amber-100 text-amber-800 border-amber-300"
                    : "bg-stone-100 text-[#7C5C3E] hover:bg-stone-200 border-stone-200"
                }`}
                aria-label="Record voice question"
              >
                {isListening ? (
                  <MicOff className="w-4 h-4 text-white" />
                ) : isTranscribing ? (
                  <Loader2 className="w-4 h-4 text-amber-700 animate-spin" />
                ) : (
                  <Mic className="w-4 h-4 text-[#7C5C3E]" />
                )}
              </button>

              {/* Text Input */}
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={
                  speechLang === "te-IN"
                    ? "తెలుగు లేదా English లో ప్రశ్న అడగండి..."
                    : "Ask career question in English or Telugu..."
                }
                className="flex-1 bg-stone-50 border border-stone-200 focus:bg-white focus:border-stone-900 rounded-xl px-3.5 py-2 text-xs text-stone-900 focus:outline-none transition-all font-medium"
              />

              {/* Send Button */}
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className="p-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 disabled:opacity-40 disabled:hover:bg-stone-900 text-white transition-all cursor-pointer shrink-0 shadow-2xs"
                title="Send query"
              >
                <Send className="w-4 h-4 text-[#C9A97A]" />
              </button>
            </form>
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
  );
};
