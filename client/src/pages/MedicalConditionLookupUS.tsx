import { Link } from "wouter";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import SEO from "@/components/SEO";
import {
  Search,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronRight,
  ArrowRight,
  Info,
} from "lucide-react";
import { useState } from "react";

// ─── Condition database ───────────────────────────────────────────────────────
type Verdict =
  | "likely_ok"
  | "case_by_case"
  | "likely_disqualifying"
  | "unknown";

interface ConditionEntry {
  name: string;
  keywords: string[];
  verdict: Verdict;
  summary: string;
  detail: string;
  caveats?: string;
  source?: string;
}

const CONDITIONS: ConditionEntry[] = [
  {
    name: "Asthma",
    keywords: ["asthma", "asthmatic", "bronchial asthma", "reactive airway"],
    verdict: "case_by_case",
    summary:
      "Mild, well-controlled asthma is generally acceptable. Severe asthma requires a Special Issuance.",
    detail:
      "The FAA allows pilots with mild, well-controlled asthma to hold a First Class medical. If your asthma is controlled with over-the-counter medications or low-dose inhaled corticosteroids, the AME can often issue the certificate directly (CACI - Conditions AMEs Can Issue). Severe asthma, frequent exacerbations, or use of oral steroids will require an FAA Special Issuance, which involves providing pulmonary function tests and detailed physician reports.",
    caveats:
      "You must declare all asthma history on MedXPress. If you meet the CACI criteria, the AME can issue your medical same-day.",
    source: "FAA AME Guide — Asthma (CACI)",
  },
  {
    name: "ADHD (Attention Deficit Hyperactivity Disorder)",
    keywords: [
      "adhd",
      "attention deficit",
      "hyperactivity",
      "add",
      "attention deficit hyperactivity",
    ],
    verdict: "case_by_case",
    summary:
      "ADHD medication is strictly prohibited. A history of ADHD requires extensive psychological testing.",
    detail:
      "The FAA's stance on ADHD is extremely strict. ALL stimulant medications (Adderall, Ritalin, Vyvanse, Concerta) are absolutely disqualifying. If you have ever been diagnosed with ADHD or taken ADHD medication, you cannot get a medical certificate immediately. You must be off all ADHD medication for at least 90 days (often longer is recommended) and undergo an extensive, expensive neuropsychological evaluation by an FAA-approved HIMS neuropsychologist to prove you do not have aeromedically significant ADHD. This process can take 6-12 months and cost $3,000-$5,000.",
    caveats:
      "Do NOT stop taking prescribed medication without consulting your doctor. If you have an ADHD history, consult a HIMS AME before submitting your MedXPress application.",
    source: "FAA AME Guide — ADHD / ADD",
  },
  {
    name: "Color Blindness",
    keywords: [
      "color blind",
      "colour blind",
      "color blindness",
      "color deficiency",
      "cvd",
      "deuteranopia",
      "protanopia",
      "red green color",
    ],
    verdict: "case_by_case",
    summary:
      "Color vision deficiency requires passing alternative tests. Failing all tests results in a night flying restriction.",
    detail:
      "The FAA requires you to pass a color vision test (usually Ishihara plates) at your AME exam. If you fail, you are not immediately disqualified, but you will be issued a medical with the restriction: 'Not valid for night flying or by color signal control.' To get this restriction removed, you can take alternative color vision tests (like the Farnsworth Lantern or Dvorine). If you fail those, you can request an OCVT (Operational Color Vision Test) and a Medical Flight Test (MFT) with the FAA. If you pass the MFT, you get a Letter of Evidence (LOE) permanently clearing you.",
    caveats:
      "If you fail the OCVT/MFT, the night flying restriction becomes permanent and you cannot take the test again. Do not take the OCVT until you are fully prepared.",
    source: "FAA AME Guide — Color Vision",
  },
  {
    name: "Depression & Anxiety",
    keywords: [
      "depression",
      "depressive",
      "anxiety",
      "gad",
      "panic",
      "ssri",
      "sertraline",
      "fluoxetine",
      "citalopram",
      "escitalopram",
      "lexapro",
      "zoloft",
      "prozac",
    ],
    verdict: "case_by_case",
    summary:
      "A history of depression/anxiety requires a Special Issuance. The FAA allows four specific SSRI medications.",
    detail:
      "A history of depression or anxiety is disqualifying for standard issuance. However, the FAA has a Special Issuance pathway. Since 2010, the FAA allows pilots to fly while taking one of four approved SSRIs: Fluoxetine (Prozac), Sertraline (Zoloft), Citalopram (Celexa), or Escitalopram (Lexapro). You must be on a stable dose for at least 6 months with no symptoms. The approval process requires evaluation by a HIMS AME and a HIMS psychiatrist. It is a long, expensive process (often 6-12+ months).",
    caveats:
      "Other antidepressants (like Wellbutrin or SNRIs) are NOT approved. A history of suicidal ideation is extremely difficult to overcome.",
    source: "FAA AME Guide — SSRI Decision Path",
  },
  {
    name: "Vision / Eyesight",
    keywords: [
      "short sighted",
      "long sighted",
      "myopia",
      "astigmatism",
      "glasses",
      "contact lenses",
      "laser eye surgery",
      "lasik",
      "prk",
      "vision",
      "eyesight",
    ],
    verdict: "likely_ok",
    summary:
      "Corrected vision to 20/20 is required for First Class. Glasses, contacts, and LASIK are all permitted.",
    detail:
      "For a First Class medical, your distant vision must be 20/20 or better in each eye separately, with or without correction. Near vision must be 20/40 or better. If you need glasses or contacts to meet this standard, your medical will state 'Must wear corrective lenses.' Laser eye surgery (LASIK, PRK) is completely acceptable to the FAA. You must simply provide a report from your eye surgeon (FAA Form 8500-7) showing your vision has stabilized and there are no complications (like severe glare or halos).",
    caveats:
      "If you've had LASIK, bring your surgical records and the completed FAA eye evaluation form to your AME appointment.",
    source: "FAA AME Guide — Vision",
  },
  {
    name: "High Blood Pressure (Hypertension)",
    keywords: [
      "high blood pressure",
      "hypertension",
      "blood pressure medication",
      "lisinopril",
      "amlodipine",
      "losartan",
    ],
    verdict: "likely_ok",
    summary:
      "Controlled hypertension is acceptable. The AME can issue your medical if you meet CACI criteria.",
    detail:
      "The FAA allows pilots with high blood pressure to fly, provided it is controlled (under 155/95) and you have no other cardiovascular issues. Most common blood pressure medications (ACE inhibitors, ARBs, calcium channel blockers, diuretics) are approved. Under the CACI (Conditions AMEs Can Issue) program, if you bring a detailed status report from your treating physician showing your BP is controlled and your medication is approved, the AME can issue your certificate same-day without FAA deferral.",
    caveats:
      "You must declare the condition and medication on MedXPress. Bring the specific CACI Hypertension worksheet completed by your doctor.",
    source: "FAA AME Guide — Hypertension (CACI)",
  },
  {
    name: "Diabetes (Type 1 & Type 2)",
    keywords: [
      "diabetes",
      "diabetic",
      "type 1 diabetes",
      "type 2 diabetes",
      "insulin",
      "metformin",
      "blood sugar",
    ],
    verdict: "case_by_case",
    summary:
      "Type 2 diabetes controlled by diet or oral medication may qualify. Insulin-dependent diabetes requires a Special Issuance.",
    detail:
      "The FAA has significantly relaxed its diabetes policy. Type 2 diabetes controlled by diet alone or with approved oral medications (metformin, DPP-4 inhibitors, GLP-1 agonists) can qualify under CACI. Insulin-dependent diabetes (Type 1 or insulin-treated Type 2) requires a Special Issuance Authorization (SIDA). The SIDA process requires demonstrating stable glucose control, no hypoglycemic episodes, and regular monitoring. Insulin-dependent pilots must check blood glucose before and during flight and carry fast-acting glucose.",
    caveats:
      "You must carry a blood glucose meter and fast-acting glucose on every flight. Glucose must be between 100-300 mg/dL before flight.",
    source: "FAA AME Guide — Diabetes Mellitus",
  },
  {
    name: "Epilepsy / Seizures",
    keywords: [
      "epilepsy",
      "seizure",
      "seizures",
      "epileptic",
      "convulsion",
      "fits",
    ],
    verdict: "likely_disqualifying",
    summary:
      "A history of seizures is generally disqualifying. Special Issuance is possible only after a very long seizure-free period.",
    detail:
      "Epilepsy and a history of seizures are among the most serious disqualifying conditions for an FAA medical. A single unprovoked seizure is disqualifying. For a Special Issuance, you must typically be seizure-free for 10 years without medication, or 5 years seizure-free on stable medication (for certain types). The FAA requires a comprehensive neurological evaluation, EEG, and MRI. Provoked seizures (from fever, alcohol withdrawal, or a one-time head injury) are evaluated differently and may have a shorter waiting period.",
    caveats:
      "If you have had a single febrile seizure as a child, this is evaluated much more favourably than adult-onset epilepsy. Consult a HIMS AME before applying.",
    source: "FAA AME Guide — Seizure Disorders",
  },
  {
    name: "Sleep Apnoea",
    keywords: [
      "sleep apnoea",
      "sleep apnea",
      "cpap",
      "obstructive sleep apnoea",
      "osa",
      "snoring",
    ],
    verdict: "likely_ok",
    summary:
      "Treated sleep apnoea is acceptable. You must demonstrate compliance with CPAP therapy.",
    detail:
      "Obstructive sleep apnoea (OSA) is a CACI condition — the AME can issue your certificate directly if you are compliant with treatment. You must be on CPAP therapy, demonstrate compliance (typically 70%+ usage over the past 90 days, verified by CPAP download data), and have no excessive daytime sleepiness. Untreated OSA is disqualifying because of the risk of sudden incapacitation. The FAA takes OSA very seriously given its prevalence among pilots.",
    caveats:
      "You must bring CPAP compliance data (download from your CPAP machine) to your AME appointment. Bring your CPAP on all overnight trips.",
    source: "FAA AME Guide — Obstructive Sleep Apnea (CACI)",
  },
  {
    name: "Heart Conditions (Cardiovascular)",
    keywords: [
      "heart",
      "cardiac",
      "coronary",
      "heart attack",
      "myocardial infarction",
      "arrhythmia",
      "atrial fibrillation",
      "afib",
      "pacemaker",
      "stent",
      "bypass",
    ],
    verdict: "case_by_case",
    summary:
      "Many cardiac conditions require a Special Issuance. Some, like controlled AFib, may qualify under CACI.",
    detail:
      "Cardiac conditions are evaluated on a case-by-case basis. Atrial fibrillation (AFib) that is rate-controlled or in normal sinus rhythm may qualify under CACI. A history of heart attack (MI) requires a Special Issuance and typically a waiting period of 6 months, plus stress testing and cardiac catheterization. Coronary artery bypass graft (CABG) surgery requires 6 months post-op and extensive cardiac workup. Pacemakers are evaluated individually — some are acceptable with Special Issuance. The FAA requires annual cardiac evaluations for most cardiac Special Issuances.",
    caveats:
      "Any cardiac history must be fully disclosed on MedXPress. Failure to disclose is a federal offence and will result in certificate revocation.",
    source: "FAA AME Guide — Cardiovascular Conditions",
  },
  {
    name: "Mental Health History",
    keywords: [
      "mental health",
      "psychiatric",
      "bipolar",
      "schizophrenia",
      "psychosis",
      "ptsd",
      "ocd",
      "eating disorder",
      "therapy",
      "counselling",
      "counseling",
    ],
    verdict: "case_by_case",
    summary:
      "Most mental health history requires a Special Issuance. Severity and treatment history are key factors.",
    detail:
      "The FAA evaluates mental health conditions individually. A history of counselling or therapy for situational stress (divorce, bereavement) is generally not disqualifying. Conditions like PTSD, OCD, and eating disorders require Special Issuance and psychiatric evaluation. Bipolar disorder and schizophrenia are generally disqualifying, though Special Issuance has been granted in rare cases of long-term stability. The FAA's concern is the risk of sudden incapacitation or impaired judgment in flight. Honesty on MedXPress is critical — the FAA cross-references medical records.",
    caveats:
      "Do not lie or omit mental health history on MedXPress. The FAA has access to insurance records and can detect omissions. Voluntary disclosure is always treated more favourably.",
    source: "FAA AME Guide — Psychiatric Conditions",
  },
  {
    name: "Kidney Stones",
    keywords: [
      "kidney stones",
      "renal calculi",
      "kidney stone",
      "urolithiasis",
    ],
    verdict: "case_by_case",
    summary:
      "A single resolved kidney stone episode is generally acceptable after treatment. Recurrent stones require more evaluation.",
    detail:
      "A history of kidney stones does not automatically disqualify you. If you have had a single episode and the stone has passed or been treated, the AME can typically issue your medical under CACI, provided you have a current urological evaluation showing no active stones and no obstruction. Recurrent kidney stones require more documentation and may need FAA review. The concern is the risk of sudden incapacitating pain during flight.",
    caveats:
      "Bring a recent renal ultrasound or CT report to your AME appointment confirming no current stones.",
    source: "FAA AME Guide — Kidney Stones (CACI)",
  },
  {
    name: "Alcohol / Substance History",
    keywords: [
      "alcohol",
      "alcoholism",
      "substance abuse",
      "drug use",
      "dui",
      "dwi",
      "drunk driving",
      "addiction",
      "rehabilitation",
    ],
    verdict: "case_by_case",
    summary:
      "A history of alcohol dependence or DUI requires a Special Issuance. Two or more DUIs is extremely serious.",
    detail:
      "The FAA requires you to report any history of alcohol dependence, substance abuse, or DUI/DWI convictions on MedXPress. A single DUI may be manageable with a Special Issuance after a period of sobriety and evaluation. Two or more DUIs is a very serious situation and often results in denial. A history of alcohol dependence requires a Special Issuance involving evaluation by a HIMS AME, a substance abuse evaluation, and typically 2 years of sobriety. The FAA also receives reports of alcohol-related motor vehicle actions from state DMVs.",
    caveats:
      "The FAA has a specific reporting requirement: you must report any DUI/DWI within 60 days of the conviction. Failure to do so is a federal offence.",
    source: "FAA AME Guide — Alcohol/Substance Dependence",
  },
  {
    name: "Cancer / Oncology History",
    keywords: [
      "cancer",
      "tumour",
      "tumor",
      "oncology",
      "chemotherapy",
      "radiation",
      "leukaemia",
      "leukemia",
      "lymphoma",
      "melanoma",
    ],
    verdict: "case_by_case",
    summary:
      "Many cancer survivors can obtain a Special Issuance after treatment and a disease-free period.",
    detail:
      "Cancer history is evaluated based on type, treatment, and time since remission. Low-risk, fully treated cancers (e.g., early-stage skin cancer, testicular cancer) may qualify for Special Issuance relatively quickly. High-risk cancers (e.g., brain tumours, leukaemia) require longer disease-free periods and more extensive evaluation. The FAA's concern is both the risk of recurrence causing incapacitation and the side effects of ongoing treatment. Chemotherapy and radiation therapy are disqualifying while active.",
    caveats:
      "Bring complete oncology records including pathology reports, treatment records, and most recent follow-up evaluations.",
    source: "FAA AME Guide — Oncology",
  },
  {
    name: "Hearing Loss",
    keywords: [
      "hearing loss",
      "deaf",
      "deafness",
      "hearing aid",
      "tinnitus",
      "cochlear implant",
    ],
    verdict: "case_by_case",
    summary:
      "Hearing aids are permitted. You must meet minimum speech discrimination standards.",
    detail:
      "The FAA requires you to be able to hear an average conversational voice in a quiet room at 6 feet, with or without a hearing aid. Hearing aids are permitted for all medical classes. You must meet minimum speech discrimination standards. Cochlear implants are evaluated individually — some pilots with cochlear implants have received Special Issuances. Tinnitus alone (without significant hearing loss) is generally not disqualifying.",
    caveats:
      "If you use a hearing aid, bring it to your AME exam. The AME will test your hearing with the aid in place.",
    source: "FAA AME Guide — Hearing",
  },
  {
    name: "Thyroid Conditions",
    keywords: [
      "thyroid",
      "hypothyroidism",
      "hyperthyroidism",
      "thyroid medication",
      "levothyroxine",
      "synthroid",
    ],
    verdict: "likely_ok",
    summary:
      "Treated hypothyroidism is generally acceptable. Hyperthyroidism requires treatment and stability before certification.",
    detail:
      "Hypothyroidism treated with levothyroxine (Synthroid) is a CACI condition — the AME can issue your certificate directly if your TSH levels are within normal range and you are on a stable dose. Hyperthyroidism (overactive thyroid) requires treatment and a period of stability before the FAA will consider certification. Thyroid cancer history is evaluated under the oncology guidelines.",
    caveats:
      "Bring your most recent thyroid function test results (TSH, T4) to your AME appointment.",
    source: "FAA AME Guide — Thyroid (CACI)",
  },
  {
    name: "Migraines",
    keywords: [
      "migraine",
      "migraines",
      "migraine headaches",
      "cluster headaches",
      "severe headaches",
    ],
    verdict: "case_by_case",
    summary:
      "Infrequent migraines without neurological symptoms may be acceptable. Frequent or complex migraines require Special Issuance.",
    detail:
      "Migraines are evaluated based on frequency, severity, and whether they involve neurological symptoms (aura, vision changes, weakness). Infrequent migraines (less than once per month) that do not cause incapacitation and are controlled with over-the-counter medication may be acceptable under CACI. Frequent migraines, migraines with aura, or those requiring prescription triptans require a Special Issuance and neurological evaluation. The concern is sudden incapacitation during flight.",
    caveats:
      "Keep a headache diary documenting frequency, duration, and symptoms. This will be required for any FAA evaluation.",
    source: "FAA AME Guide — Headache/Migraine",
  },
  {
    name: "HIV / AIDS",
    keywords: ["hiv", "aids", "antiretroviral", "prep", "hiv positive"],
    verdict: "case_by_case",
    summary:
      "HIV-positive pilots on stable antiretroviral therapy may qualify for a Special Issuance.",
    detail:
      "The FAA updated its HIV policy in 2015. HIV-positive pilots who are on stable antiretroviral therapy (ART), have an undetectable viral load, and have a CD4 count above 300 cells/mm³ may qualify for a Special Issuance. The evaluation requires a HIMS AME, an infectious disease specialist report, and regular monitoring. The FAA evaluates the specific antiretroviral medications for side effects that could impair pilot performance.",
    caveats:
      "This is a complex evaluation. Work with a HIMS AME from the beginning to ensure your documentation meets FAA requirements.",
    source: "FAA AME Guide — HIV",
  },
  {
    name: "Autism Spectrum Disorder (ASD)",
    keywords: [
      "autism",
      "autistic",
      "asd",
      "asperger",
      "aspergers",
      "spectrum disorder",
    ],
    verdict: "case_by_case",
    summary:
      "ASD is evaluated individually. High-functioning individuals may qualify, but the process is lengthy.",
    detail:
      "Autism Spectrum Disorder is not an automatic disqualification, but it requires a comprehensive neuropsychological evaluation. The FAA evaluates whether the condition affects the cognitive, social, and sensory processing abilities required for safe flight. High-functioning individuals with ASD who have no significant impairments in these areas have successfully obtained Special Issuances. The evaluation process is lengthy and expensive, typically involving a HIMS neuropsychologist.",
    caveats:
      "There is no standard pathway for ASD. Consult a HIMS AME before beginning the application process to understand what documentation will be required.",
    source: "FAA AME Guide — Neurological/Psychiatric Evaluation",
  },
];

export default function MedicalConditionLookupUS() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCondition, setSelectedCondition] =
    useState<ConditionEntry | null>(null);

  const filteredConditions =
    searchQuery.trim() === ""
      ? []
      : CONDITIONS.filter(
          c =>
            c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.keywords.some(k =>
              k.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "oklch(0.14 0.04 240)",
        color: "oklch(0.95 0.02 240)",
      }}
    >
      <SEO
        title="FAA Medical Condition Lookup | AviatorPath US"
        description="Check if your medical condition (ADHD, asthma, vision, etc.) meets FAA First Class medical standards for airline pilots."
        canonical="https://aviatorpath.com/us/medical-lookup"
      />
      <PublicNav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/manus-storage/hero-medical_faa9a026.jpg"
            alt="Aviation medical examination"
            className="w-full h-full object-cover opacity-[0.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.04_240)] to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
            style={{
              background: "oklch(0.25 0.06 240)",
              color: "oklch(0.65 0.22 45)",
            }}
          >
            <Stethoscope className="w-4 h-4" />
            FAA First Class Medical
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Will it stop you flying?
          </h1>
          <p
            className="text-xl max-w-2xl mx-auto mb-10"
            style={{ color: "oklch(0.65 0.04 240)" }}
          >
            Search the database to see how the FAA assesses specific medical
            conditions for airline pilots.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6"
                style={{ color: "oklch(0.5 0.04 240)" }}
              />
              <input
                type="text"
                placeholder="Search a condition (e.g., ADHD, asthma, vision)..."
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  setSelectedCondition(null);
                }}
                className="w-full pl-14 pr-6 py-5 rounded-2xl text-lg outline-none transition-all"
                style={{
                  background: "oklch(0.18 0.05 240)",
                  border: "2px solid oklch(0.28 0.06 240)",
                  color: "white",
                }}
              />
            </div>

            {/* Results Dropdown */}
            {searchQuery && !selectedCondition && (
              <div
                className="absolute top-full left-0 right-0 mt-2 rounded-xl border overflow-hidden z-50 shadow-2xl"
                style={{
                  background: "oklch(0.18 0.05 240)",
                  borderColor: "oklch(0.28 0.06 240)",
                }}
              >
                {filteredConditions.length > 0 ? (
                  <div className="max-h-96 overflow-y-auto">
                    {filteredConditions.map((c, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedCondition(c)}
                        className="w-full text-left px-6 py-4 hover:bg-white/5 border-b last:border-0 transition-colors flex items-center justify-between"
                        style={{ borderColor: "oklch(0.28 0.06 240)" }}
                      >
                        <span className="font-bold text-lg text-white">
                          {c.name}
                        </span>
                        <ChevronRight
                          className="w-5 h-5"
                          style={{ color: "oklch(0.5 0.04 240)" }}
                        />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div
                    className="p-6 text-center"
                    style={{ color: "oklch(0.65 0.04 240)" }}
                  >
                    No specific guidance found for "{searchQuery}". <br />
                    Consult a HIMS AME for individual advice.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Result Display */}
      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4 max-w-3xl">
          {selectedCondition ? (
            <div
              className="rounded-2xl border p-8 animate-in fade-in slide-in-from-bottom-4"
              style={{
                background: "oklch(0.18 0.05 240)",
                borderColor: "oklch(0.28 0.06 240)",
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">
                  {selectedCondition.name}
                </h2>
                <VerdictBadge verdict={selectedCondition.verdict} />
              </div>

              <p className="text-xl font-medium mb-8 text-white">
                {selectedCondition.summary}
              </p>

              <div className="space-y-6">
                <div>
                  <h3
                    className="text-sm font-bold uppercase tracking-wider mb-3"
                    style={{ color: "oklch(0.5 0.04 240)" }}
                  >
                    FAA Policy Detail
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "oklch(0.8 0.02 240)" }}
                  >
                    {selectedCondition.detail}
                  </p>
                </div>

                {selectedCondition.caveats && (
                  <div
                    className="p-4 rounded-xl flex gap-3"
                    style={{ background: "oklch(0.25 0.06 240)" }}
                  >
                    <AlertTriangle
                      className="w-5 h-5 shrink-0"
                      style={{ color: "oklch(0.65 0.22 45)" }}
                    />
                    <p className="text-sm text-white">
                      {selectedCondition.caveats}
                    </p>
                  </div>
                )}

                <div
                  className="pt-6 border-t"
                  style={{ borderColor: "oklch(0.28 0.06 240)" }}
                >
                  <p
                    className="text-xs"
                    style={{ color: "oklch(0.5 0.04 240)" }}
                  >
                    <strong>Source:</strong> {selectedCondition.source}
                  </p>
                </div>
              </div>

              <div
                className="mt-8 pt-8 border-t flex flex-col sm:flex-row gap-4"
                style={{ borderColor: "oklch(0.28 0.06 240)" }}
              >
                <button
                  onClick={() => {
                    setSelectedCondition(null);
                    setSearchQuery("");
                  }}
                  className="px-6 py-3 rounded-xl font-bold text-center border transition-colors hover:bg-white/5"
                  style={{
                    borderColor: "oklch(0.28 0.06 240)",
                    color: "white",
                  }}
                >
                  Search another
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p
                className="text-sm font-bold uppercase tracking-wider mb-6"
                style={{ color: "oklch(0.5 0.04 240)" }}
              >
                Popular Searches
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "ADHD",
                  "Asthma",
                  "Color Blindness",
                  "Vision",
                  "Depression",
                ].map(term => (
                  <button
                    key={term}
                    onClick={() => {
                      setSearchQuery(term);
                      const condition = CONDITIONS.find(
                        c =>
                          c.name.includes(term) ||
                          c.keywords.includes(term.toLowerCase())
                      );
                      if (condition) setSelectedCondition(condition);
                    }}
                    className="px-4 py-2 rounded-full border text-sm font-medium transition-colors hover:bg-white/5"
                    style={{
                      borderColor: "oklch(0.28 0.06 240)",
                      color: "white",
                    }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Assessment CTA */}
      <section className="py-12" style={{ background: "oklch(0.13 0.06 240)" }}>
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="rounded-2xl p-7 text-center" style={{ background: "linear-gradient(135deg, oklch(0.16 0.08 255), oklch(0.2 0.1 248))", border: "1px solid oklch(0.35 0.15 240 / 0.3)" }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "oklch(0.65 0.18 240)" }}>Next Step</p>
            <h3 className="font-bold text-xl text-white mb-2">
              Your medical position looks clear. Now find out if the full picture adds up.
            </h3>
            <p className="text-sm mb-5 max-w-md mx-auto" style={{ color: "oklch(0.65 0.04 240)" }}>
              The full assessment combines your medical readiness with your goals, finances and training options — and matches you with flight schools.
            </p>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white no-underline"
              style={{ background: "linear-gradient(135deg, oklch(0.55 0.2 255), oklch(0.48 0.22 248))", boxShadow: "0 0 16px oklch(0.55 0.2 255 / 0.25)" }}
            >
              Get My Full Pilot Assessment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section
        className="py-12 border-t"
        style={{
          borderColor: "oklch(0.28 0.06 240)",
          background: "oklch(0.12 0.04 240)",
        }}
      >
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Info
            className="w-6 h-6 mx-auto mb-4"
            style={{ color: "oklch(0.5 0.04 240)" }}
          />
          <p
            className="text-sm leading-relaxed"
            style={{ color: "oklch(0.5 0.04 240)" }}
          >
            <strong>Disclaimer:</strong> This tool provides general guidance
            based on public FAA AME guidelines. It is not medical advice. Only
            an FAA-certified Aviation Medical Examiner (AME) can make a
            definitive ruling on your fitness to fly. If you have a complex
            medical history, we strongly recommend booking a "consultation only"
            appointment with an AME or a HIMS AME before submitting an official
            MedXPress application.
          </p>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}

function VerdictBadge({ verdict }: { verdict: Verdict }) {
  switch (verdict) {
    case "likely_ok":
      return (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
          <CheckCircle2 className="w-4 h-4" />
          <span className="text-sm font-bold">Likely Acceptable</span>
        </div>
      );
    case "case_by_case":
      return (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
          <AlertTriangle className="w-4 h-4" />
          <span className="text-sm font-bold">Special Issuance Required</span>
        </div>
      );
    case "likely_disqualifying":
      return (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
          <XCircle className="w-4 h-4" />
          <span className="text-sm font-bold">Likely Disqualifying</span>
        </div>
      );
    default:
      return null;
  }
}

function Stethoscope({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  );
}
