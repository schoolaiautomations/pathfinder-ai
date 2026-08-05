import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Sparkles, GraduationCap, Heart, Wrench, Target, ClipboardCheck, User, Pencil, Languages } from "lucide-react";
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
import { translations, Language } from "@/lib/translations";

const stepIcons = [User, GraduationCap, Heart, Wrench, Target, ClipboardCheck];

export const CareerForm = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem("ai-career-form-lang") as Language) || "en";
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const t = translations[lang];

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { setData({ ...initialFormData, ...JSON.parse(saved) }); } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem("ai-career-form-lang", lang);
  }, [lang]);

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
      toast({ title: t.validation.title, description: t.validation.desc, variant: "destructive" });
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
  const stepTitles = t.stepTitles;

  return (
    <div id="form" className="max-w-4xl mx-auto px-2.5 sm:px-4 py-4 sm:py-16 safe-bottom">
      <Card className="bg-white shadow-card border border-zinc-200 rounded-2xl sm:rounded-3xl p-4 sm:p-10">
        
        {/* Language Toggle Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-zinc-100">
          <div className="text-[11px] sm:text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            Language / భాష
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLang(lang === "en" ? "te" : "en")}
            className="rounded-full px-3.5 py-1.5 h-8 sm:h-9 text-xs font-bold border-zinc-300 hover:border-black bg-zinc-50 hover:bg-zinc-100 transition-all flex items-center gap-1.5 shadow-sm text-zinc-900"
          >
            <Languages className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-700" />
            <span>{t.toggleLang}</span>
          </Button>
        </div>

        <Stepper
          current={step}
          steps={t.stepperSteps}
          stepTitleText={t.stepTitle}
          percentText={t.percentComplete}
        />

        <div className="mt-6 sm:mt-8 mb-5 sm:mb-6 flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-black flex items-center justify-center text-white shrink-0 shadow-sm">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 leading-tight">{stepTitles[step].title}</h2>
            <p className="text-zinc-500 text-xs sm:text-sm mt-0.5 sm:mt-1 leading-normal">{stepTitles[step].desc}</p>
          </div>
        </div>

        <div key={`${step}-${lang}`} className="animate-slide-up space-y-5 sm:space-y-6">
          {step === 0 && <Step1 data={data} update={update} errors={errors} t={t} />}
          {step === 1 && <Step2 data={data} update={update} errors={errors} t={t} />}
          {step === 2 && <Step3 data={data} update={update} errors={errors} t={t} />}
          {step === 3 && <Step4 data={data} update={update} t={t} />}
          {step === 4 && <Step5 data={data} update={update} t={t} />}
          {step === 5 && <Step6 data={data} update={update} errors={errors} goTo={setStep} t={t} />}
        </div>

        <div className="mt-8 sm:mt-10 flex flex-col-reverse sm:flex-row gap-3 sm:justify-between pt-5 sm:pt-6 border-t border-zinc-100">
          <Button variant="outline" onClick={back} disabled={step === 0} size="lg" className="w-full sm:w-auto rounded-xl border-zinc-300 h-11 sm:h-12 text-sm sm:text-base font-semibold">
            <ArrowLeft className="w-4 h-4 mr-1" /> {t.buttons.back}
          </Button>
          {step < 5 ? (
            <Button onClick={next} size="lg" className="w-full sm:w-auto bg-black text-white hover:bg-zinc-800 rounded-xl px-8 h-11 sm:h-12 text-sm sm:text-base font-semibold shadow-md">
              {t.buttons.continue} <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button onClick={submit} size="xl" className="w-full sm:w-auto bg-black text-white hover:bg-zinc-800 rounded-2xl px-10 h-12 sm:h-14 text-base sm:text-lg font-bold shadow-md">
              <Sparkles className="w-5 h-5 mr-1" /> {t.buttons.submit}
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

/* --- Step components --- */

const Field = ({ label, required, error, helper, requiredMsg, children }: any) => (
  <div className="space-y-2">
    <Label className="text-sm font-semibold">
      {label} {required && <span className="text-destructive">*</span>}
    </Label>
    {children}
    {helper && !error && <p className="text-xs text-muted-foreground">{helper}</p>}
    {error && <p className="text-xs text-destructive">{requiredMsg || "This field is required."}</p>}
  </div>
);

const inputCls = (err?: boolean) =>
  `rounded-xl h-11 ${err ? "border-destructive ring-1 ring-destructive" : ""}`;

const Step1 = ({ data, update, errors, t }: any) => (
  <div className="grid sm:grid-cols-2 gap-5">
    <Field label={t.fields.name.label} helper={t.fields.name.helper}>
      <Input className={inputCls()} value={data.name} onChange={(e) => update("name", e.target.value)} placeholder={t.fields.name.placeholder} />
    </Field>
    <Field label={t.fields.phone_number.label} required error={errors.phone_number} requiredMsg={t.validation.required}>
      <Input type="tel" className={inputCls(errors.phone_number)} value={data.phone_number} onChange={(e) => update("phone_number", e.target.value)} placeholder={t.fields.phone_number.placeholder} />
    </Field>
    <Field label={t.fields.fatherProfession.label} helper={t.fields.fatherProfession.helper}>
      <Input className={inputCls()} value={data.fatherProfession} onChange={(e) => update("fatherProfession", e.target.value)} placeholder={t.fields.fatherProfession.placeholder} />
    </Field>
    <Field label={t.fields.motherProfession.label} helper={t.fields.motherProfession.helper}>
      <Input className={inputCls()} value={data.motherProfession} onChange={(e) => update("motherProfession", e.target.value)} placeholder={t.fields.motherProfession.placeholder} />
    </Field>
    <Field label={t.fields.dob.label} required error={errors.dob} requiredMsg={t.validation.required}>
      <Input type="date" className={inputCls(errors.dob)} value={data.dob} onChange={(e) => update("dob", e.target.value)} />
    </Field>
    <Field label={t.fields.gender.label} required error={errors.gender} requiredMsg={t.validation.required}>
      <Select value={data.gender} onValueChange={(v) => update("gender", v)}>
        <SelectTrigger className={inputCls(errors.gender)}><SelectValue placeholder={t.fields.gender.placeholder} /></SelectTrigger>
        <SelectContent>
          {genders.map((g) => (
            <SelectItem key={g} value={g}>
              {t.options.genders[g] || g}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
    <Field label={t.fields.city.label} required error={errors.city} requiredMsg={t.validation.required}>
      <Input className={inputCls(errors.city)} value={data.city} onChange={(e) => update("city", e.target.value)} placeholder={t.fields.city.placeholder} />
    </Field>
    <Field label={t.fields.state.label} required error={errors.state} requiredMsg={t.validation.required}>
      <Select value={data.state} onValueChange={(v) => update("state", v)}>
        <SelectTrigger className={inputCls(errors.state)}><SelectValue placeholder={t.fields.state.placeholder} /></SelectTrigger>
        <SelectContent className="max-h-72">
          {indianStates.map((s) => (
            <SelectItem key={s} value={s}>{s}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
    <Field label={t.fields.country.label} required error={errors.country} requiredMsg={t.validation.required}>
      <Select value={data.country} onValueChange={(v) => update("country", v)}>
        <SelectTrigger className={inputCls(errors.country)}><SelectValue placeholder={t.fields.country.placeholder} /></SelectTrigger>
        <SelectContent>
          {countries.map((c) => (
            <SelectItem key={c} value={c}>{c}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  </div>
);

const Step2 = ({ data, update, errors, t }: any) => (
  <div className="space-y-5">
    <div className="grid sm:grid-cols-2 gap-5">
      <Field label={t.fields.educationLevel.label} required error={errors.educationLevel} requiredMsg={t.validation.required}>
        <Select value={data.educationLevel} onValueChange={(v) => update("educationLevel", v)}>
          <SelectTrigger className={inputCls(errors.educationLevel)}><SelectValue placeholder={t.fields.educationLevel.placeholder} /></SelectTrigger>
          <SelectContent>
            {educationLevels.map((l) => (
              <SelectItem key={l} value={l}>{l}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Field label={t.fields.section.label}>
        <Input className={inputCls()} value={data.section} onChange={(e) => update("section", e.target.value)} placeholder={t.fields.section.placeholder} />
      </Field>
      <Field label={t.fields.board.label}>
        <Select value={data.board} onValueChange={(v) => update("board", v)}>
          <SelectTrigger className={inputCls()}><SelectValue placeholder={t.fields.board.placeholder} /></SelectTrigger>
          <SelectContent>
            {boards.map((b) => (
              <SelectItem key={b} value={b}>{t.options.boards[b] || b}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Field label={t.fields.schoolName.label}>
        <Input className={inputCls()} value={data.schoolName} onChange={(e) => update("schoolName", e.target.value)} placeholder={t.fields.schoolName.placeholder} />
      </Field>
      <Field label={t.fields.performance.label}>
        <Select value={data.performance} onValueChange={(v) => update("performance", v)}>
          <SelectTrigger className={inputCls()}><SelectValue placeholder={t.fields.performance.placeholder} /></SelectTrigger>
          <SelectContent>
            {performances.map((p) => (
              <SelectItem key={p} value={p}>{t.options.performances[p] || p}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
    </div>
    <Field label={t.fields.favoriteSubjects.label} helper={t.fields.favoriteSubjects.helper}>
      <ChipSelect options={subjects} selected={data.favoriteSubjects} onChange={(v) => update("favoriteSubjects", v)} labelsMap={t.options.subjects} />
    </Field>
    <Field label={t.fields.difficultSubjects.label} helper={t.fields.difficultSubjects.helper}>
      <ChipSelect options={subjects} selected={data.difficultSubjects} onChange={(v) => update("difficultSubjects", v)} variant="accent" labelsMap={t.options.subjects} />
    </Field>
  </div>
);

const Step3 = ({ data, update, errors, t }: any) => (
  <div className="space-y-5">
    <Field label={t.fields.interests.label} required error={errors.interests} helper={t.fields.interests.helper} requiredMsg={t.validation.required}>
      <InterestGrid selected={data.interests} onChange={(v) => update("interests", v)} labelsMap={t.options.interests} />
    </Field>
    <Field label={t.fields.customInterests.label} helper={t.fields.customInterests.helper}>
      <Input className={inputCls()} value={data.customInterests} onChange={(e) => update("customInterests", e.target.value)} placeholder={t.fields.customInterests.placeholder} />
    </Field>
    {data.interests.length > 0 && (
      <div className="rounded-2xl bg-zinc-100 border border-zinc-200 p-4 text-sm">
        <span className="font-semibold text-zinc-900">
          {t.fields.interestsSelectedCount
            .replace("{count}", String(data.interests.length))
            .replace("{s}", data.interests.length > 1 ? "s" : "")}
        </span>
      </div>
    )}
  </div>
);

const Step4 = ({ data, update, t }: any) => (
  <div className="space-y-5">
    <Field label={t.fields.skills.label} helper={t.fields.skills.helper}>
      <ChipSelect options={skillsList} selected={data.skills} onChange={(v) => update("skills", v)} labelsMap={t.options.skills} />
    </Field>
    <Field label={t.fields.hobbies.label} helper={t.fields.hobbies.helper}>
      <Textarea className="rounded-xl min-h-24" value={data.hobbies} onChange={(e) => update("hobbies", e.target.value)} placeholder={t.fields.hobbies.placeholder} />
    </Field>
    <Field label={t.fields.achievements.label}>
      <Textarea className="rounded-xl min-h-20" value={data.achievements} onChange={(e) => update("achievements", e.target.value)} placeholder={t.fields.achievements.placeholder} />
    </Field>
    <Field label={t.fields.projects.label}>
      <Textarea className="rounded-xl min-h-20" value={data.projects} onChange={(e) => update("projects", e.target.value)} placeholder={t.fields.projects.placeholder} />
    </Field>
  </div>
);

const Step5 = ({ data, update, t }: any) => (
  <div className="space-y-5">
    <Field label={t.fields.careerDream.label} helper={t.fields.careerDream.helper}>
      <Input className={inputCls()} value={data.careerDream} onChange={(e) => update("careerDream", e.target.value)} placeholder={t.fields.careerDream.placeholder} />
    </Field>
    <div className="grid sm:grid-cols-2 gap-5">
      <Field label={t.fields.careerType.label}>
        <Select value={data.careerType} onValueChange={(v) => update("careerType", v)}>
          <SelectTrigger className={inputCls()}><SelectValue placeholder={t.fields.careerType.placeholder} /></SelectTrigger>
          <SelectContent>
            {careerTypes.map((c) => (
              <SelectItem key={c} value={c}>{t.options.careerTypes[c] || c}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Field label={t.fields.studyLocation.label}>
        <Select value={data.studyLocation} onValueChange={(v) => update("studyLocation", v)}>
          <SelectTrigger className={inputCls()}><SelectValue placeholder={t.fields.studyLocation.placeholder} /></SelectTrigger>
          <SelectContent>
            {studyLocations.map((c) => (
              <SelectItem key={c} value={c}>{t.options.studyLocations[c] || c}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
    </div>
    <Field label={t.fields.studyMode.label}>
      <RadioGroup value={data.studyMode} onValueChange={(v) => update("studyMode", v)} className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
        {studyModes.map((m) => (
          <label key={m} className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl border border-zinc-200 hover:border-black/50 cursor-pointer transition-all has-[[data-state=checked]]:border-black has-[[data-state=checked]]:bg-zinc-100 touch-manipulation">
            <RadioGroupItem value={m} /> <span className="text-xs sm:text-sm font-semibold text-zinc-900 leading-tight">{t.options.studyModes[m] || m}</span>
          </label>
        ))}
      </RadioGroup>
    </Field>
    <Field label={t.fields.financial.label}>
      <Select value={data.financial} onValueChange={(v) => update("financial", v)}>
        <SelectTrigger className={inputCls()}><SelectValue placeholder={t.fields.financial.placeholder} /></SelectTrigger>
        <SelectContent>
          {financialOptions.map((c) => (
            <SelectItem key={c} value={c}>{t.options.financialOptions[c] || c}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
    <Field label={t.fields.parentExpectations.label} helper={t.fields.parentExpectations.helper}>
      <Textarea className="rounded-xl min-h-20" value={data.parentExpectations} onChange={(e) => update("parentExpectations", e.target.value)} placeholder={t.fields.parentExpectations.placeholder} />
    </Field>
    <Field label={t.fields.notWanted.label}>
      <Textarea className="rounded-xl min-h-20" value={data.notWanted} onChange={(e) => update("notWanted", e.target.value)} placeholder={t.fields.notWanted.placeholder} />
    </Field>
  </div>
);

const Summary = ({ title, items, onEdit, editLabel }: { title: string; items: { label: string; value: any }[]; onEdit: () => void; editLabel: string }) => (
  <div className="rounded-xl sm:rounded-2xl border border-zinc-200 bg-white p-4 sm:p-5 shadow-sm">
    <div className="flex items-center justify-between mb-2.5 sm:mb-3">
      <h3 className="font-bold text-sm sm:text-base text-zinc-950">{title}</h3>
      <Button variant="ghost" size="sm" onClick={onEdit} className="h-8 text-xs text-zinc-900 hover:bg-zinc-100 px-2 sm:px-3"><Pencil className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" /> {editLabel}</Button>
    </div>
    <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm">
      {items.map((it) => (
        <div key={it.label} className="flex flex-col">
          <dt className="text-zinc-500 text-[11px] sm:text-xs font-medium">{it.label}</dt>
          <dd className="font-semibold text-zinc-900 break-words">{Array.isArray(it.value) ? (it.value.length ? it.value.join(", ") : "—") : (it.value || "—")}</dd>
        </div>
      ))}
    </dl>
  </div>
);

const Step6 = ({ data, update, errors, goTo, t }: any) => {
  const l = t.summaries.labels;
  return (
    <div className="space-y-3.5 sm:space-y-4">
      <Summary title={t.summaries.basic} editLabel={t.buttons.edit} onEdit={() => goTo(0)} items={[
        { label: l.name, value: data.name },
        { label: l.phone_number, value: data.phone_number },
        { label: l.fatherProfession, value: data.fatherProfession },
        { label: l.motherProfession, value: data.motherProfession },
        { label: l.dob, value: data.dob },
        { label: l.gender, value: t.options.genders[data.gender] || data.gender },
        { label: l.location, value: [data.city, data.state, data.country].filter(Boolean).join(", ") },
      ]} />
      <Summary title={t.summaries.education} editLabel={t.buttons.edit} onEdit={() => goTo(1)} items={[
        { label: l.educationLevel, value: data.educationLevel },
        { label: l.section, value: data.section },
        { label: l.board, value: t.options.boards[data.board] || data.board },
        { label: l.schoolName, value: data.schoolName },
        { label: l.performance, value: t.options.performances[data.performance] || data.performance },
        { label: l.favoriteSubjects, value: data.favoriteSubjects.map((s: string) => t.options.subjects[s] || s) },
        { label: l.difficultSubjects, value: data.difficultSubjects.map((s: string) => t.options.subjects[s] || s) },
      ]} />
      <Summary title={t.summaries.interests} editLabel={t.buttons.edit} onEdit={() => goTo(2)} items={[
        { label: l.interests, value: data.interests.map((i: string) => t.options.interests[i] || i) },
        { label: l.customInterests, value: data.customInterests },
      ]} />
      <Summary title={t.summaries.skills} editLabel={t.buttons.edit} onEdit={() => goTo(3)} items={[
        { label: l.skills, value: data.skills.map((sk: string) => t.options.skills[sk] || sk) },
        { label: l.hobbies, value: data.hobbies },
        { label: l.achievements, value: data.achievements },
        { label: l.projects, value: data.projects },
      ]} />
      <Summary title={t.summaries.preferences} editLabel={t.buttons.edit} onEdit={() => goTo(4)} items={[
        { label: l.careerDream, value: data.careerDream },
        { label: l.careerType, value: t.options.careerTypes[data.careerType] || data.careerType },
        { label: l.studyLocation, value: t.options.studyLocations[data.studyLocation] || data.studyLocation },
        { label: l.studyMode, value: t.options.studyModes[data.studyMode] || data.studyMode },
        { label: l.financial, value: t.options.financialOptions[data.financial] || data.financial },
        { label: l.parentExpectations, value: data.parentExpectations },
        { label: l.notWanted, value: data.notWanted },
      ]} />
      <label className={`flex items-start gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all touch-manipulation ${errors.confirmed ? "border-red-600 bg-red-50/20" : "border-zinc-200 has-[[data-state=checked]]:border-black has-[[data-state=checked]]:bg-zinc-100"}`}>
        <Checkbox checked={data.confirmed} onCheckedChange={(v) => update("confirmed", !!v)} className="mt-0.5 shrink-0" />
        <span className="text-xs sm:text-sm font-medium text-zinc-900 leading-snug">{t.checkboxes.confirmInfo}</span>
      </label>
      <label className={`flex items-start gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all touch-manipulation ${errors.aiDisclaimerConfirmed ? "border-red-600 bg-red-50/20" : "border-zinc-200 has-[[data-state=checked]]:border-black has-[[data-state=checked]]:bg-zinc-100"}`}>
        <Checkbox checked={data.aiDisclaimerConfirmed} onCheckedChange={(v) => update("aiDisclaimerConfirmed", !!v)} className="mt-0.5 shrink-0" />
        <span className="text-xs sm:text-sm font-medium text-zinc-900 leading-snug">{t.checkboxes.aiDisclaimer}</span>
      </label>
    </div>
  );
};
