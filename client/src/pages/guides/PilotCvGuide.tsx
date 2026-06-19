import { Link } from "wouter";
import GuideLayout from "@/components/GuideLayout";
import GuideScopeBanner from "@/components/GuideScopeBanner";

export default function PilotCvGuide() {
  return (
    <GuideLayout
      title="Pilot CV & Cover Letter Guide 2026"
      subtitle="Many pilot CVs fail at the first stage — not because of poor flying, but because of poor presentation. Here is exactly how to structure an aviation CV that passes screening and gets you to the next round."
      canonical="https://aviatorpath.com/guides/pilot-cv-cover-letter"
      metaDescription="Pilot CV and cover letter guide for 2026: format, logbook details, airline screening tips, examples and mistakes to avoid."
      readTime="7 min read"
      heroImage="/manus-storage/pilot-cv_e66193e2.jpg"
      lastUpdated="June 2026"
      ctaHref="/roadmap"
      ctaText="Generate my personalised roadmap"
      faqSchema={[
        {
          question: "What should a pilot CV include?",
          answer:
            "A pilot CV should include: personal details (name, contact, nationality, right to work), licences and ratings (with issue dates and expiry), medical class and expiry, total hours and breakdown by type, type ratings, simulator experience, and employment history. Keep it to two pages maximum.",
        },
        {
          question: "How long should a pilot CV be?",
          answer:
            "A pilot CV is usually one to two pages unless an airline portal asks for a different format. Airlines receive hundreds of applications — a concise, well-structured CV is more effective than a lengthy one. If you are a low-hours ab-initio graduate, one page is appropriate.",
        },
        {
          question: "What do airlines look for in a pilot CV?",
          answer:
            "Airlines screen CVs for minimum requirements first: licence type, hours, ratings, and right to work. If you meet the minimums, presentation and professionalism matter. A clear, error-free CV with accurate logbook data signals the same attention to detail required in the cockpit.",
        },
        {
          question:
            "Should I include a cover letter with my pilot application?",
          answer:
            "Yes, if the application process allows it. A cover letter is your opportunity to explain why you want to fly for that specific airline and what makes you a strong candidate. Keep it to three paragraphs: why this airline, what you bring, and a call to action.",
        },
        {
          question: "How do I write a pilot CV with no experience?",
          answer:
            "Ab-initio graduates should focus on: your training school and the quality of your training, your licence and ratings, any relevant non-aviation work experience that demonstrates transferable skills (leadership, communication, decision-making), and your motivation. Honesty about your hours is essential — never inflate logbook data.",
        },
      ]}
      relatedGuides={[
        {
          title: "How to Pass an Airline Pilot Interview",
          href: "/guides/airline-pilot-interview",
          time: "9 min read",
        },
        {
          title: "Pilot Aptitude Tests: Complete Preparation Guide",
          href: "/guides/pilot-aptitude-test-uk",
          time: "8 min read",
        },
        {
          title: "How to Become an Airline Pilot",
          href: "/guides/how-to-become-a-pilot",
          time: "10 min read",
        },
      ]}
      sections={[
        {
          heading: "The Aviation CV: What Airlines Actually Screen For",
          content: (
            <>
              <p>
                Airline recruitment teams often screen pilot CVs quickly,
                frequently using Applicant Tracking Systems (ATS) for the
                initial pass. The first pass is purely mechanical: does this
                candidate meet the minimum requirements? Licence type, total
                hours, right to work, medical validity. If you do not meet the
                minimums, the application will normally go no further regardless
                of how well the CV is written.
              </p>
              <p
                className="text-sm p-3 rounded-lg my-3"
                style={{
                  background: "oklch(0.45 0.18 240 / 0.07)",
                  border: "1px solid oklch(0.45 0.18 240 / 0.15)",
                }}
              >
                Before your interview, complete our free{" "}
                <Link href="/quiz" className="text-blue-400 underline">
                  Pilot Career Assessment
                </Link>{" "}
                to identify your strongest attributes and areas to develop.
              </p>
              <img
                src="/manus-storage/airline-interview_3a8f2c1d.jpg"
                alt="Airline interview preparation"
                className="w-full rounded-xl my-4 object-cover"
                style={{ maxHeight: "320px" }}
              />
              <p>
                If you do meet the minimums, the second pass is about
                presentation. A disorganised, inconsistently formatted CV
                signals the same lack of attention to detail that would concern
                a chief pilot in the cockpit. A clean, professional CV signals
                the opposite.
              </p>
              <p>
                The third consideration is that your CV is the first impression
                of you as a professional. Airlines are not just hiring a
                licence; they are hiring a crew member. The tone, accuracy, and
                clarity of your CV communicate something about who you are.
              </p>
            </>
          ),
        },
        {
          heading: "CV Structure: The Correct Format for Pilot Applications",
          content: (
            <>
              <p>
                Use this structure unless the airline's application portal
                specifies a different format or requires you to fill out their
                proprietary web forms.
              </p>
              <p>
                <strong>Section 1 — Personal Details:</strong> Full name, phone
                number, email address, location (city and country), nationality,
                and right to work status. Do not include a photograph unless
                specifically requested (it is not standard practice in UK
                aviation recruitment and can cause ATS issues).
              </p>
              <p>
                <strong>Section 2 — Licences and Ratings:</strong> List every
                licence and rating with the issuing authority (e.g., UK CAA,
                EASA), licence number (optional but professional), issue date,
                and expiry date. Include: ATPL(A) or CPL(A) or MPL, instrument
                rating (IR), type ratings, multi-crew cooperation (MCC)
                certificate, and any additional ratings.
              </p>
              <p>
                <strong>Section 3 — Medical:</strong> Class 1 medical — issuing
                AME, issue date, and expiry date. Note any operational
                limitations if they are relevant to the role.
              </p>
              <p>
                <strong>Section 4 — Flight Hours:</strong> Total hours, hours in
                command (PIC), hours as co-pilot (P2), hours on type (broken
                down by aircraft type), instrument hours, and night hours. Be
                precise. Recruiters cross-reference CV hours against logbook
                data at interview — discrepancies are disqualifying.
              </p>
              <p>
                <strong>Section 5 — Employment History:</strong> Most recent
                first. For each role: employer, position, dates, aircraft type,
                and a brief description of responsibilities. For non-aviation
                roles, focus on transferable skills: leadership, communication,
                decision-making under pressure, team coordination.
              </p>
              <p>
                <strong>Section 6 — Education:</strong> Highest qualification
                first. Include ATPL theory results if they are strong (above 90%
                average) or if the airline specifically asks for first-time pass
                rates.
              </p>
              <p>
                <strong>Section 7 — Additional Information:</strong> Languages
                spoken (with proficiency level, e.g., ICAO Level 6 English),
                relevant courses (CRM, UPRT, dangerous goods), and any
                aviation-related achievements.
              </p>
            </>
          ),
        },
        {
          heading: "Common CV Mistakes That Get Applications Rejected",
          content: (
            <>
              <p>
                These are the mistakes that appear most frequently in pilot CVs
                and that result in immediate rejection:
              </p>
              <p>
                <strong>Inflated hours:</strong> Never round up. Never include
                simulator hours as flight hours unless explicitly asked to break
                them out separately. Never include hours you cannot substantiate
                in your logbook. Recruiters ask for logbook evidence at
                interview. Discrepancies — even minor ones — are grounds for
                immediate rejection and can damage your reputation in a small
                industry.
              </p>
              <p>
                <strong>Expired documents:</strong> List your medical and
                ratings with their expiry dates. If something is expired, note
                it honestly. Attempting to obscure an expired medical or lapsed
                rating is likely to be discovered and damages trust.
              </p>
              <p>
                <strong>Generic CVs:</strong> Sending the same CV to every
                airline without tailoring it is a missed opportunity. If an
                airline operates a specific fleet, mention your experience on
                similar types. If they have a cadet programme, reference your
                training pathway.
              </p>
              <p>
                <strong>Poor formatting:</strong> Inconsistent fonts, misaligned
                columns, and dense paragraphs make CVs hard to scan. Use a
                clean, single-font template. Align all dates consistently. Use
                bullet points for employment history, not paragraphs.
              </p>
              <p>
                <strong>Spelling and grammar errors:</strong> There is no
                acceptable number of errors in a pilot CV. One typo suggests
                carelessness. Have someone proofread your CV before every
                application round.
              </p>
            </>
          ),
        },
        {
          heading: "Writing an Effective Cover Letter",
          content: (
            <>
              <p>
                A cover letter is not a summary of your CV. It is a targeted
                argument for why you are the right person for this specific
                airline. Three paragraphs is normally the correct length.
              </p>
              <p>
                <strong>Paragraph 1 — Why this airline:</strong> Be specific. "I
                have long admired easyJet's operational model" is vague and
                unconvincing. "I have followed easyJet's expansion of its
                A320neo fleet and its commitment to reducing per-seat emissions
                — a direction I want to be part of" is specific and demonstrates
                genuine research.
              </p>
              <p>
                <strong>Paragraph 2 — What you bring:</strong> Summarise your
                strongest qualifications in two to three sentences. Focus on
                what is most relevant to the role. For an ab-initio application:
                your training school, your hours, and a specific quality you
                demonstrated during training. For an experienced pilot: your
                type rating, your hours on type, and a specific operational
                experience.
              </p>
              <p>
                <strong>Paragraph 3 — Call to action:</strong> A single sentence
                expressing your enthusiasm for the opportunity and your
                availability for interview.
              </p>
              <p>
                Address the letter to a named individual where possible, or use
                "Dear Recruitment Team". Avoid "To Whom It May Concern".
              </p>
            </>
          ),
        },
        {
          heading: "For Ab-Initio Graduates: How to Present Limited Experience",
          content: (
            <>
              <p>
                If you have just completed your ATPL training and have 200–250
                hours, you cannot compete with experienced pilots on hours. You
                should not try to. Instead, focus on what you can offer:
              </p>
              <p>
                <strong>Quality of training:</strong> Name your training school.
                If it is a recognised UK CAA/EASA-approved school, that carries
                weight.
              </p>
              <p>
                <strong>ATPL theory results:</strong> If your average is strong
                or you achieved first-time passes, include it where the airline
                asks for or values theory performance. Strong theory results
                signal academic ability and commitment.
              </p>
              <p>
                <strong>MCC and JOC:</strong> If you completed an APS MCC
                (Airline Pilot Standard Multi-Crew Cooperation) course,
                highlight this, as it demonstrates you have been trained to a
                higher airline-entry standard than a basic MCC.
              </p>
              <p>
                <strong>Transferable skills:</strong> If you had a previous
                career before aviation — particularly in a high-stakes,
                team-based environment — draw explicit parallels. Former
                military personnel, healthcare workers, and emergency services
                professionals often have strong transferable skills that
                airlines value.
              </p>
              <p>
                <strong>Honesty about your position:</strong> Airlines know what
                ab-initio graduates look like. Do not try to make 220 hours look
                like 500. Present your hours accurately, explain your training
                pathway clearly, and let your professionalism and preparation do
                the work.
              </p>
            </>
          ),
        },
      ]}
      scopeBanner={
        <GuideScopeBanner
          scope="CV and cover letter format in this guide follows UK conventions. US airlines use a résumé format."
          globalHref="/us/guides/pilot-resume-usa"
          globalLabel="View USA résumé guide →"
        />
      }
      sources={[
        { name: "Airline Recruitment Portals (BA, easyJet, Ryanair)" },
        { name: "BALPA Careers Guidance" },
      ]}
    />
  );
}
