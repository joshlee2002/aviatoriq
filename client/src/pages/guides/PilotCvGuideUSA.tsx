import GuideLayout from "@/components/GuideLayout";
import { Link } from "wouter";
import GuideScopeBanner from "@/components/GuideScopeBanner";

export default function PilotCvGuideUSA() {
  return (
    <GuideLayout
      title="Pilot Resume Guide USA: How to Stand Out in 2026"
      subtitle="What US airlines actually look for on a pilot resume. Formatting rules, how to list your flight hours, and the mistakes that get applications binned."
      canonical="/us/guides/pilot-resume-guide-usa"
      metaDescription="Pilot resume guide USA 2026. How to format your pilot resume, how to list flight hours (total, PIC, multi-engine), and what US airline recruiters actually want to see."
      readTime="10 min read"
      heroImage="/manus-storage/pilot-cv_9d4c2b8e.jpg"
      category="US Pilot Training"
      ctaHref="/us/roadmap"
      ctaText="Find your training route"
      scopeBanner={<GuideScopeBanner scope="This guide covers resume formatting for US airlines." globalHref="/guides/pilot-cv-cover-letter" globalLabel="View UK/European CV guide →" />}
      faqSchema={[
        { question: "How long should a pilot resume be?", answer: "One page. Unless you have over 20 years of extensive military or commercial aviation experience, your resume should fit on a single page. Airline recruiters scan resumes in seconds; brevity is essential." },
        { question: "How should I list my flight hours on a resume?", answer: "Create a dedicated 'Flight Time' or 'Flight Experience' section near the top. List Total Time, Pilot-in-Command (PIC), Multi-Engine, Turbine (if applicable), and Instrument time. Ensure these numbers exactly match your logbook and airline application portals." },
        { question: "Do I need to list non-aviation jobs on a pilot resume?", answer: "Yes, if they show leadership, customer service, or fill a gap in your employment history. Airlines value candidates with diverse life experience, especially if it demonstrates responsibility or conflict resolution." },
        { question: "Should I include a photo on my pilot resume in the US?", answer: "No. Unlike in some European or Asian markets, including a photo on a US resume is strongly discouraged due to anti-discrimination laws. It marks you as unfamiliar with US hiring norms." }
      ]}
      sections={[
        {
          heading: "The 10-Second Scan",
          content: (
            <>
              <p>
                In 2026, airline recruitment departments are using automated Applicant Tracking Systems (ATS) to filter out unqualified candidates, but human recruiters still review the shortlisted resumes. 
              </p>
              <p>
                A recruiter at a major US airline will look at your resume for about 10 seconds before deciding whether to read further. In that 10 seconds, they are looking for three things: <strong>Total Hours</strong>, <strong>Certificates/Ratings</strong>, and <strong>Recent Experience</strong>.
              </p>
              <p>
                If those three things are not immediately obvious, your resume will likely be discarded. A pilot resume is not a creative writing exercise; it is a technical document.
              </p>
            </>
          ),
        },
        {
          heading: "The Golden Rules of a US Pilot Resume",
          content: (
            <>
              <p>
                Before you start formatting, ensure your resume adheres to these non-negotiable rules for the US market:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2 mb-4">
                <li><strong>One Page Only:</strong> Unless you are a retiring military commander with decades of varied experience, keep it to one page.</li>
                <li><strong>No Photos:</strong> Do not include a headshot. This is standard in Europe but strongly discouraged in the US due to equal employment opportunity laws.</li>
                <li><strong>No Objective Statement:</strong> Do not write "Seeking a First Officer position at Delta." They know why you are applying. Use that space for your flight hours.</li>
                <li><strong>Clean Formatting:</strong> Use standard fonts (Arial, Calibri, Times New Roman). No graphics, no airplane logos, no complex column layouts that confuse ATS software.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "How to Structure Your Resume",
          content: (
            <>
              <p>
                Your resume should follow this exact top-to-bottom structure:
              </p>
              <p>
                <strong>1. Header:</strong> Name (large font), Phone Number, Professional Email Address, City/State, and a link to your LinkedIn profile (optional).
              </p>
              <p>
                <strong>2. Certificates and Ratings:</strong> List your highest certificate first. Include your medical class and any specific endorsements.
                <br/><em>Example:</em>
                <br/>• FAA Commercial Pilot Certificate - Airplane Single & Multi-Engine Land, Instrument Rating
                <br/>• Certified Flight Instructor (CFI, CFII, MEI)
                <br/>• FAA First Class Medical (Issued: 03/2026)
                <br/>• FCC Restricted Radiotelephone Operator Permit
              </p>
              <p>
                <strong>3. Flight Time Grid:</strong> This is the most important section. Create a clean, easy-to-read grid or list.
                <br/><em>Example:</em>
                <br/>Total Time: 1,520 | PIC: 1,200 | Multi-Engine: 150 | Cross-Country: 600 | Instrument: 110 | Night: 200
              </p>
              <p>
                <strong>4. Aviation Experience:</strong> List your flying jobs in reverse chronological order. Focus on responsibilities, safety record, and leadership.
                <br/><em>Example:</em>
                <br/><strong>Certified Flight Instructor</strong> | ATP Flight School, Phoenix, AZ | 2024 - Present
                <br/>• Provided over 1,000 hours of dual instruction in single and multi-engine aircraft.
                <br/>• Maintained a 90% first-time pass rate for students on FAA practical exams.
              </p>
              <p>
                <strong>5. Non-Aviation Experience:</strong> Only include this if it demonstrates leadership, customer service, or fills a significant employment gap.
              </p>
              <p>
                <strong>6. Education:</strong> University degrees, graduation dates, and major.
              </p>
            </>
          ),
        },
        {
          heading: "The Most Common Mistakes",
          content: (
            <>
              <p>
                <strong>Discrepancies with Airline Portals:</strong> When you apply to an airline, you will enter your flight hours into their portal (like AirlineApps). Your resume <em>must</em> match those numbers exactly. If your resume says 1,500 hours and the portal says 1,480, it raises a red flag about your attention to detail.
              </p>
              <p>
                <strong>Over-embellishing Non-Aviation Jobs:</strong> If you worked as a barista while in flight school, list it briefly to explain the employment timeline, but do not dedicate five bullet points to your coffee-making skills.
              </p>
              <p>
                <strong>Including Unnecessary Personal Info:</strong> Do not include your marital status, age, date of birth, or hobbies (unless your hobby is highly relevant, like aircraft building).
              </p>
            </>
          ),
        },
        {
          heading: "Tailoring for Regional vs Major Airlines",
          content: (
            <>
              <p>
                <strong>Applying to Regionals:</strong> Focus heavily on your instructing or time-building experience. Highlight your pass rates as an instructor, your reliability, and your readiness to transition to a Part 121 environment.
              </p>
              <p>
                <strong>Applying to Majors:</strong> Focus on your Part 121 turbine experience. Highlight leadership roles (e.g., Check Airman, Union Representative, Safety Committee), volunteer work, and any specific type ratings. Major airlines want to see that you are not just a good pilot, but a future Captain who contributes to the company culture.
              </p>
            </>
          ),
        },
      ]}
      relatedGuides={[
        { title: "Airline Interview USA", href: "/us/guides/airline-interview-usa", time: "11 min" },
        { title: "Pilot Aptitude Test USA", href: "/us/guides/pilot-aptitude-test-usa", time: "10 min" },
        { title: "US Pilot Career Outlook", href: "/us/guides/us-pilot-career-outlook", time: "8 min" },
      ]}
    />
  );
}
