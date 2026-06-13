import { useEffect } from "react";
import { Link } from "wouter";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import { ArrowRight, Target, Shield, Users } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About AviatorIQ – Pilot Career Assessment Platform";
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <PublicNav />
      <main className="flex-1">
        <div className="bg-hero py-12 px-4">
          <div className="container max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">About AviatorIQ</h1>
            <p className="text-lg text-white/80">A decision-support platform that moves aspiring pilots from uncertainty to certainty.</p>
          </div>
        </div>
        <div className="bg-sky-subtle py-10 px-4">
          <div className="container max-w-3xl">
            <div className="card-base p-6 md:p-8 mb-6">
              <h2 className="text-2xl font-display font-bold text-[var(--color-navy)] mb-4">Our mission</h2>
              <p className="text-[var(--color-foreground)] leading-relaxed mb-4">
                AviatorIQ exists to answer the questions aspiring pilots actually have — not the ones they're supposed to have. Not "which licence should I get?" but "am I too old?", "can I afford it?", "could I pass the medical?", "will I get a job?", "what if I spend £100k and fail?"
              </p>
              <p className="text-[var(--color-foreground)] leading-relaxed mb-4">
                Those are emotional questions. They're the real barriers between aspiring pilots and the cockpit. And they're the questions that most pilot training websites don't answer.
              </p>
              <p className="text-[var(--color-foreground)] leading-relaxed">
                Our assessments are built around one north star: every result must uncover something about the user they didn't already fully realise. Not just recommend a route — identify the barrier. That's the kind of insight that helps someone make one of the biggest career decisions of their life.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
              {[
                { icon: <Target className="w-6 h-6" />, title: "Barrier-first results", desc: "Every result leads with your biggest barrier — not a generic score." },
                { icon: <Shield className="w-6 h-6" />, title: "Your data, protected", desc: "We never sell your data. You control who contacts you." },
                { icon: <Users className="w-6 h-6" />, title: "Certainty, not information", desc: "We don't just give you facts. We give you a clear next action." },
              ].map((item) => (
                <div key={item.title} className="card-base p-5 text-center">
                  <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-xl flex items-center justify-center text-[var(--color-primary)] mx-auto mb-3">{item.icon}</div>
                  <h3 className="font-display font-bold text-[var(--color-navy)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--color-muted-foreground)]">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="card-base p-6 bg-[var(--color-navy)] text-white text-center">
              <h3 className="font-display font-bold text-xl mb-2">Find out what's really stopping you.</h3>
              <p className="text-white/70 text-sm mb-4">Take the free Career Readiness Assessment. Discover your biggest barrier, your strongest asset, and your personalised next action.</p>
              <Link href="/quiz" className="btn-cta text-sm">Find my biggest barrier <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}
