import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Sparkles, GraduationCap, Heart, Wrench, Target, ClipboardCheck, User, Pencil } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Stepper } from "./Stepper";
import { ChipSelect } from "./ChipSelect";
import { InterestGrid } from "./InterestGrid";
import {
  FormData, initialFormData, STORAGE_KEY,
  educationLevels, boards, performances, genders, subjects,
  skillsList, careerTypes, studyLocations, studyModes, financialOptions,
  countries, indianStates,
} from "@/lib/career-data";

const stepIcons = [User, GraduationCap, Heart, Wrench, Target, ClipboardCheck];
const stepTitles = [
  { title: "Tell us about yourself", desc: "Basic details so we know who you are." },
  { title: "Your education", desc: "Help us understand your academic background." },
  { title: "What excites you?", desc: "Pick the topics that spark your curiosity." },
  { title: "Skills & hobbies", desc: "Show us what you're great at." },
  { title: "Your preferences", desc: "Tell us about your career dreams." },
  { title: "Review & generate", desc: "Confirm your details and get your AI report." },
];

export const CareerForm = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { setData({ ...initialFormData, ...JSON.parse(saved) }); } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const update = <K extends keyof FormData>(k: K, v: FormData[K]) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((e) => ({ ...e, [k]: false }));
  };

  const validate = (): boolean => {
    const e: Record<string, boolean> = {};
    if (step === 0) {
      ["phone_number", "dob", "gender", "city", "state", "country"].forEach((f) => {
        if (!(data as any)[f]) e[f] = true;
      });
    } else if (step === 1) {
      if (!data.educationLevel) e.educationLevel = true;
    } else if (step === 2) {
      if (data.interests.length === 0) e.interests = true;
    } else if (step === 5) {
      if (!data.confirmed) e.confirmed = true;
      if (!data.aiDisclaimerConfirmed) e.aiDisclaimerConfirmed = true;
    }
    setErrors(e);
    if (Object.keys(e).length) {
      toast({ title: "Please complete required fields", description: "Highlighted fields need your attention.", variant: "destructive" });
      return false;
    }
    return true;
  };

  const next = () => {
    if (!validate()) return;
    if (step < 5) setStep(step + 1);
  };
  const back = () => step > 0 && setStep(step - 1);

  const submit = () => {
    if (!validate()) return;
    navigate("/analyzing");
  };

  const Icon = stepIcons[step];

  return (
    <div id="form" className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
      <Card className="bg-white shadow-card border border-zinc-200 rounded-3xl p-6 sm:p-10">
        <Stepper current={step} />

        <div className="mt-8 mb-6 flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white shrink-0 shadow-sm">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950">{stepTitles[step].title}</h2>
            <p className="text-zinc-500 text-sm mt-1">{stepTitles[step].desc}</p>
          </div>
        </div>

        <div key={step} className="animate-slide-up space-y-6">
          {step === 0 && <Step1 data={data} update={update} errors={errors} />}
          {step === 1 && <Step2 data={data} update={update} errors={errors} />}
          {step === 2 && <Step3 data={data} update={update} errors={errors} />}
          {step === 3 && <Step4 data={data} update={update} />}
          {step === 4 && <Step5 data={data} update={update} />}
          {step === 5 && <Step6 data={data} update={update} errors={errors} goTo={setStep} />}
        </div>

        <div className="mt-10 flex flex-col-reverse sm:flex-row gap-3 sm:justify-between pt-6 border-t border-zinc-100">
          <Button variant="outline" onClick={back} disabled={step === 0} size="lg" className="rounded-xl border-zinc-300">
            <ArrowLeft /> Back
          </Button>
          {step < 5 ? (
            <Button onClick={next} size="lg" className="bg-black text-white hover:bg-zinc-800 rounded-xl px-8 font-semibold">
              Continue <ArrowRight />
            </Button>
          ) : (
            <Button onClick={submit} size="xl" className="bg-black text-white hover:bg-zinc-800 rounded-2xl px-10 font-bold shadow-md">
              <Sparkles /> Generate My AI Career Report
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

/* --- Step components --- */

const Field = ({ label, required, error, helper, children }: any) => (
  <div className="space-y-2">
    <Label className="text-sm font-semibold">
      {label} {required && <span className="text-destructive">*</span>}
    </Label>
    {children}
    {helper && !error && <p className="text-xs text-muted-foreground">{helper}</p>}
    {error && <p className="text-xs text-destructive">This field is required.</p>}
  </div>
);

const inputCls = (err?: boolean) =>
  `rounded-xl h-11 ${err ? "border-destructive ring-1 ring-destructive" : ""}`;

const Step1 = ({ data, update, errors }: any) => (
  <div className="grid sm:grid-cols-2 gap-5">
    <Field label="Student Name" helper="Optional — what should we call you?">
      <Input className={inputCls()} value={data.name} onChange={(e) => update("name", e.target.value)} placeholder="e.g. Aarav Sharma" />
    </Field>
    <Field label="Phone Number" required error={errors.phone_number}>
      <Input type="tel" className={inputCls(errors.phone_number)} value={data.phone_number} onChange={(e) => update("phone_number", e.target.value)} placeholder="e.g. +91 98765 43210" />
    </Field>
    <Field label="Date of Birth" required error={errors.dob}>
      <Input type="date" className={inputCls(errors.dob)} value={data.dob} onChange={(e) => update("dob", e.target.value)} />
    </Field>
    <Field label="Gender" required error={errors.gender}>
      <Select value={data.gender} onValueChange={(v) => update("gender", v)}>
        <SelectTrigger className={inputCls(errors.gender)}><SelectValue placeholder="Select gender" /></SelectTrigger>
        <SelectContent>{genders.map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}</SelectContent>
      </Select>
    </Field>
    <Field label="City / Place" required error={errors.city}>
      <Input className={inputCls(errors.city)} value={data.city} onChange={(e) => update("city", e.target.value)} placeholder="e.g. Bengaluru" />
    </Field>
    <Field label="State" required error={errors.state}>
      <Select value={data.state} onValueChange={(v) => update("state", v)}>
        <SelectTrigger className={inputCls(errors.state)}><SelectValue placeholder="Select state" /></SelectTrigger>
        <SelectContent className="max-h-72">{indianStates.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
      </Select>
    </Field>
    <Field label="Country" required error={errors.country}>
      <Select value={data.country} onValueChange={(v) => update("country", v)}>
        <SelectTrigger className={inputCls(errors.country)}><SelectValue placeholder="Select country" /></SelectTrigger>
        <SelectContent>{countries.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
      </Select>
    </Field>
  </div>
);

const Step2 = ({ data, update, errors }: any) => (
  <div className="space-y-5">
    <div className="grid sm:grid-cols-2 gap-5">
      <Field label="Current Class / Education Level" required error={errors.educationLevel}>
        <Select value={data.educationLevel} onValueChange={(v) => update("educationLevel", v)}>
          <SelectTrigger className={inputCls(errors.educationLevel)}><SelectValue placeholder="Select level" /></SelectTrigger>
          <SelectContent>{educationLevels.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}</SelectContent>
        </Select>
      </Field>
      <Field label="Board / Curriculum">
        <Select value={data.board} onValueChange={(v) => update("board", v)}>
          <SelectTrigger className={inputCls()}><SelectValue placeholder="Select board" /></SelectTrigger>
          <SelectContent>{boards.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}</SelectContent>
        </Select>
      </Field>
      <Field label="School / College Name">
        <Input className={inputCls()} value={data.schoolName} onChange={(e) => update("schoolName", e.target.value)} placeholder="e.g. Delhi Public School" />
      </Field>
      <Field label="Current Academic Performance">
        <Select value={data.performance} onValueChange={(v) => update("performance", v)}>
          <SelectTrigger className={inputCls()}><SelectValue placeholder="How are you doing academically?" /></SelectTrigger>
          <SelectContent>{performances.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
        </Select>
      </Field>
    </div>
    <Field label="Favorite Subjects" helper="Pick all that you enjoy.">
      <ChipSelect options={subjects} selected={data.favoriteSubjects} onChange={(v) => update("favoriteSubjects", v)} />
    </Field>
    <Field label="Subjects You Find Difficult" helper="It's okay — knowing this helps the AI guide you better.">
      <ChipSelect options={subjects} selected={data.difficultSubjects} onChange={(v) => update("difficultSubjects", v)} variant="accent" />
    </Field>
  </div>
);

const Step3 = ({ data, update, errors }: any) => (
  <div className="space-y-5">
    <Field label="Select your interests" required error={errors.interests} helper="Pick as many as you like — there are no wrong answers.">
      <InterestGrid selected={data.interests} onChange={(v) => update("interests", v)} />
    </Field>
    <Field label="Add your own interests" helper="Anything else you love? Separate with commas.">
      <Input className={inputCls()} value={data.customInterests} onChange={(e) => update("customInterests", e.target.value)} placeholder="e.g. Astronomy, Photography" />
    </Field>
    {data.interests.length > 0 && (
      <div className="rounded-2xl bg-zinc-100 border border-zinc-200 p-4 text-sm">
        <span className="font-semibold text-zinc-900">{data.interests.length} interest{data.interests.length > 1 ? "s" : ""} selected</span>
      </div>
    )}
  </div>
);

const Step4 = ({ data, update }: any) => (
  <div className="space-y-5">
    <Field label="Your current skills" helper="What are you good at?">
      <ChipSelect options={skillsList} selected={data.skills} onChange={(v) => update("skills", v)} />
    </Field>
    <Field label="Hobbies" helper="What do you enjoy doing in your free time?">
      <Textarea className="rounded-xl min-h-24" value={data.hobbies} onChange={(e) => update("hobbies", e.target.value)} placeholder="e.g. Playing chess, reading novels, cycling..." />
    </Field>
    <Field label="Achievements or Certificates">
      <Textarea className="rounded-xl min-h-20" value={data.achievements} onChange={(e) => update("achievements", e.target.value)} placeholder="e.g. State-level science fair winner, Python certification..." />
    </Field>
    <Field label="Projects you have done">
      <Textarea className="rounded-xl min-h-20" value={data.projects} onChange={(e) => update("projects", e.target.value)} placeholder="e.g. Built a weather app, designed a poster for school event..." />
    </Field>
  </div>
);

const Step5 = ({ data, update }: any) => (
  <div className="space-y-5">
    <Field label="Your career dream" helper="What do you imagine yourself doing in the future?">
      <Input className={inputCls()} value={data.careerDream} onChange={(e) => update("careerDream", e.target.value)} placeholder="e.g. Become a doctor, build my own startup..." />
    </Field>
    <div className="grid sm:grid-cols-2 gap-5">
      <Field label="Preferred Career Type">
        <Select value={data.careerType} onValueChange={(v) => update("careerType", v)}>
          <SelectTrigger className={inputCls()}><SelectValue placeholder="Select type" /></SelectTrigger>
          <SelectContent>{careerTypes.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
        </Select>
      </Field>
      <Field label="Preferred Study Location">
        <Select value={data.studyLocation} onValueChange={(v) => update("studyLocation", v)}>
          <SelectTrigger className={inputCls()}><SelectValue placeholder="Where would you like to study?" /></SelectTrigger>
          <SelectContent>{studyLocations.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
        </Select>
      </Field>
    </div>
    <Field label="Preferred Study Mode">
      <RadioGroup value={data.studyMode} onValueChange={(v) => update("studyMode", v)} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {studyModes.map((m) => (
          <label key={m} className="flex items-center gap-2 p-3 rounded-xl border border-zinc-200 hover:border-black/50 cursor-pointer transition-all has-[[data-state=checked]]:border-black has-[[data-state=checked]]:bg-zinc-100">
            <RadioGroupItem value={m} /> <span className="text-sm font-semibold text-zinc-900">{m}</span>
          </label>
        ))}
      </RadioGroup>
    </Field>
    <Field label="Financial Considerations">
      <Select value={data.financial} onValueChange={(v) => update("financial", v)}>
        <SelectTrigger className={inputCls()}><SelectValue placeholder="Select an option" /></SelectTrigger>
        <SelectContent>{financialOptions.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
      </Select>
    </Field>
    <Field label="Parent Expectations" helper="What do your parents hope you'll pursue?">
      <Textarea className="rounded-xl min-h-20" value={data.parentExpectations} onChange={(e) => update("parentExpectations", e.target.value)} placeholder="e.g. They'd like me to become an engineer..." />
    </Field>
    <Field label="Any career you do NOT want">
      <Textarea className="rounded-xl min-h-20" value={data.notWanted} onChange={(e) => update("notWanted", e.target.value)} placeholder="e.g. I don't want a desk-only job..." />
    </Field>
  </div>
);

const Summary = ({ title, items, onEdit }: { title: string; items: { label: string; value: any }[]; onEdit: () => void }) => (
  <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
    <div className="flex items-center justify-between mb-3">
      <h3 className="font-bold text-zinc-950">{title}</h3>
      <Button variant="ghost" size="sm" onClick={onEdit} className="text-zinc-900 hover:bg-zinc-100"><Pencil className="w-3.5 h-3.5" /> Edit</Button>
    </div>
    <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
      {items.map((it) => (
        <div key={it.label} className="flex flex-col">
          <dt className="text-zinc-500 text-xs font-medium">{it.label}</dt>
          <dd className="font-semibold text-zinc-900">{Array.isArray(it.value) ? (it.value.length ? it.value.join(", ") : "—") : (it.value || "—")}</dd>
        </div>
      ))}
    </dl>
  </div>
);

const Step6 = ({ data, update, errors, goTo }: any) => (
  <div className="space-y-4">
    <Summary title="Basic Details" onEdit={() => goTo(0)} items={[
      { label: "Name", value: data.name }, { label: "Phone Number", value: data.phone_number },
      { label: "Date of Birth", value: data.dob }, { label: "Gender", value: data.gender },
      { label: "Location", value: [data.city, data.state, data.country].filter(Boolean).join(", ") },
    ]} />
    <Summary title="Education" onEdit={() => goTo(1)} items={[
      { label: "Level", value: data.educationLevel }, { label: "Board", value: data.board },
      { label: "School/College", value: data.schoolName }, { label: "Performance", value: data.performance },
      { label: "Favorite Subjects", value: data.favoriteSubjects }, { label: "Difficult Subjects", value: data.difficultSubjects },
    ]} />
    <Summary title="Interests" onEdit={() => goTo(2)} items={[
      { label: "Selected", value: data.interests }, { label: "Custom", value: data.customInterests },
    ]} />
    <Summary title="Skills & Hobbies" onEdit={() => goTo(3)} items={[
      { label: "Skills", value: data.skills }, { label: "Hobbies", value: data.hobbies },
      { label: "Achievements", value: data.achievements }, { label: "Projects", value: data.projects },
    ]} />
    <Summary title="Preferences" onEdit={() => goTo(4)} items={[
      { label: "Career Dream", value: data.careerDream }, { label: "Career Type", value: data.careerType },
      { label: "Study Location", value: data.studyLocation }, { label: "Study Mode", value: data.studyMode },
      { label: "Financial", value: data.financial }, { label: "Parent Expectations", value: data.parentExpectations },
      { label: "Not Wanted", value: data.notWanted },
    ]} />
    <label className={`flex items-start gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${errors.confirmed ? "border-red-600 bg-red-50/20" : "border-zinc-200 has-[[data-state=checked]]:border-black has-[[data-state=checked]]:bg-zinc-100"}`}>
      <Checkbox checked={data.confirmed} onCheckedChange={(v) => update("confirmed", !!v)} className="mt-0.5" />
      <span className="text-sm font-medium text-zinc-900">I confirm that the information provided is correct, and I'd like the AI to generate my personalised career report.</span>
    </label>
    <label className={`flex items-start gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${errors.aiDisclaimerConfirmed ? "border-red-600 bg-red-50/20" : "border-zinc-200 has-[[data-state=checked]]:border-black has-[[data-state=checked]]:bg-zinc-100"}`}>
      <Checkbox checked={data.aiDisclaimerConfirmed} onCheckedChange={(v) => update("aiDisclaimerConfirmed", !!v)} className="mt-0.5" />
      <span className="text-sm font-medium text-zinc-900">I understand that AI can make mistakes sometimes. I acknowledge that this report is for guidance purposes only, and I am strongly recommended to consult a certified career counsellor for critical decisions.</span>
    </label>
  </div>
);
