import React from 'react';
import GuideLayout from '@/components/GuideLayout';

export default function TcMedicalClass1() {
  return (
    <GuideLayout
      title="Transport Canada Class 1 Medical: 2026 Requirements & Costs"
      subtitle="Everything you need to know about the Transport Canada Category 1 Medical Certificate, including costs, CAME examinations, and common disqualifiers."
      readTime="10 min"
      author="AviatorIQ Research"
      lastUpdated="June 2026"
      category="Pilot Medicals"
      canonical="https://aviatoriq.com/canada/guides/tc-medical-class-1"
      metaDescription="A complete guide to the Transport Canada Category 1 Medical Certificate for commercial pilots. Learn about the examination process, 2026 costs, and validity periods."
      ctaText="Check your pilot readiness"
      ctaHref="/quiz"
      sections={[
        {
          heading: "1. The Category 1 Medical Certificate",
          content: (
            <>
              <p>Before you spend tens of thousands of dollars on flight training, you must prove you are medically fit to fly. In Canada, pilot medicals are governed by Transport Canada under Canadian Aviation Regulations (CARs) Standard 424 [1].</p>
              <p>There are four categories of medical certificates in Canada, but if you want to fly for an airline, you only need to care about one: the <strong>Category 1 Medical Certificate</strong>. This is mandatory for anyone holding a Commercial Pilot Licence (CPL) or Airline Transport Pilot Licence (ATPL).</p>
            </>
          )
        },
        {
          heading: "2. The Examination Process",
          content: (
            <>
              <p>You cannot get an aviation medical from your family doctor. You must book an appointment with a Transport Canada-approved <strong>Civil Aviation Medical Examiner (CAME)</strong>.</p>
              <p>The examination typically takes 45 to 60 minutes and includes:</p>
              <ul>
                <li className="mb-2"><strong>Vision Test:</strong> Checks visual acuity (corrected and uncorrected), colour vision, and peripheral vision.</li>
                <li className="mb-2"><strong>Hearing Test:</strong> An audiogram to ensure you can hear radio transmissions clearly.</li>
                <li className="mb-2"><strong>Cardiovascular:</strong> An Electrocardiogram (ECG) is required at your initial exam, and periodically thereafter depending on your age.</li>
                <li className="mb-2"><strong>Physical Exam:</strong> A general check of your respiratory, neurological, and physical health.</li>
                <li className="mb-2"><strong>Urinalysis:</strong> Routine urine testing (to check for sugars/proteins indicating diabetes or kidney issues, not a drug test).</li>
              </ul>
              <p>After the exam, the CAME sends the report to Transport Canada in Ottawa. If approved, Transport Canada will mail you the official certificate. This processing time can take several weeks or even months, which is why you must book your medical <em>before</em> starting flight training.</p>
            </>
          )
        },
        {
          heading: "3. 2026 Costs for a Category 1 Medical",
          content: (
            <>
              <p>Transport Canada does not regulate the fees that CAMEs charge, so prices vary by clinic and province. Based on 2026 averages across Canada, you should budget the following:</p>
              <table className="w-full text-sm text-left border-collapse my-6">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Service</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Estimated Cost (CAD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">CAME Examination Fee</td>
                    <td className="px-4 py-3 text-white/80">$200 – $350</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Electrocardiogram (ECG)</td>
                    <td className="px-4 py-3 text-white/80">$60 – $100</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Audiogram</td>
                    <td className="px-4 py-3 text-white/80">$30 – $70</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Transport Canada Processing Fee</td>
                    <td className="px-4 py-3 text-white/80">$68.90</td>
                  </tr>
                  <tr className="border-b border-white/10 bg-white/5">
                    <td className="px-4 py-3 text-white/90 font-semibold">Total Initial Medical Cost</td>
                    <td className="px-4 py-3 text-white/90 font-semibold">$358.90 – $588.90</td>
                  </tr>
                </tbody>
              </table>
            </>
          )
        },
        {
          heading: "4. Validity Periods and Renewals",
          content: (
            <>
              <p>A Category 1 Medical Certificate is not valid forever. It must be renewed periodically based on your age and the type of flying you do [1].</p>
              <table className="w-full text-sm text-left border-collapse my-6">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Age Group</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Multi-Crew Operations (Airlines)</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Single-Pilot Commercial</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Under 40 Years</td>
                    <td className="px-4 py-3 text-white/80">12 months</td>
                    <td className="px-4 py-3 text-white/80">12 months</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">40 to 59 Years</td>
                    <td className="px-4 py-3 text-white/80">12 months</td>
                    <td className="px-4 py-3 text-white/80">6 months</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">60 Years and Over</td>
                    <td className="px-4 py-3 text-white/80">6 months</td>
                    <td className="px-4 py-3 text-white/80">6 months</td>
                  </tr>
                </tbody>
              </table>
              <p><em>Note: If you are under 40, you only need an ECG every 24 months. If you are 40 or over, you need an ECG every 12 months.</em></p>
            </>
          )
        },
        {
          heading: "5. Common Disqualifying Conditions",
          content: (
            <>
              <p>While most people pass their aviation medical without issue, certain conditions can lead to delays, restrictions, or outright denial of a Category 1 certificate:</p>
              <ul>
                <li className="mb-2"><strong>ADHD and Mental Health:</strong> A history of ADHD, depression, or anxiety requires significant documentation and often a psychiatric assessment. Transport Canada is strict regarding psychotropic medications.</li>
                <li className="mb-2"><strong>Cardiovascular Disease:</strong> A history of heart attacks, bypass surgery, or uncontrolled high blood pressure.</li>
                <li className="mb-2"><strong>Neurological Disorders:</strong> Epilepsy or unexplained seizures are almost always disqualifying.</li>
                <li className="mb-2"><strong>Vision:</strong> Being colour blind (failing the Ishihara test) does not necessarily mean you can't fly, but it may result in a "daylight flying only" restriction, which prevents you from holding an ATPL.</li>
              </ul>
              <p>Never lie on your medical declaration. If you have a condition, declare it. Transport Canada often works with pilots to find pathways to certification (such as demonstrating the condition is well-managed), but concealing a condition is a federal offence.</p>
            </>
          )
        },
        {
          heading: "References",
          content: (
            <ol className="list-decimal pl-5 text-sm text-white/70">
              <li>Transport Canada. "Standard 424 - Medical Requirements." tc.canada.ca.</li>
            </ol>
          )
        }
      ]}
      faqSchema={[
        { question: "How much does a Transport Canada Category 1 Medical cost?", answer: "The total cost for an initial Category 1 medical is typically between $350 and $600 CAD. This includes the CAME examination fee, ECG, audiogram, and the Transport Canada processing fee." },
        { question: "Can I wear glasses and be a commercial pilot in Canada?", answer: "Yes. As long as your vision is correctable to 20/20 with glasses or contact lenses, you can hold a Category 1 Medical Certificate." },
        { question: "How long is a Category 1 Medical valid for?", answer: "For pilots under 40, it is valid for 12 months. For pilots 40 to 59 flying single-pilot commercial operations, it is valid for 6 months (but remains valid for 12 months for multi-crew airline operations). For pilots 60 and over, it is valid for 6 months." },
        { question: "Where do I get a Transport Canada aviation medical?", answer: "You must book an appointment with a Transport Canada-approved Civil Aviation Medical Examiner (CAME). You can find a list of approved CAMEs on the Transport Canada website." }
      ]}
      relatedGuides={[
        { title: "How to Become a Pilot in Canada", href: "/canada/guides/how-to-become-a-pilot", time: "14 min" },
        { title: "Pilot Training Costs in Canada (2026)", href: "/canada/guides/pilot-training-costs", time: "12 min" }
      ]}
    />
  );
}
