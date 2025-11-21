import React from 'react';

function About() {
  return (
    <section className="relative py-20">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">About our company</h2>
            <p className="mt-4 text-emerald-100/80">
              We are a team of security engineers, red teamers, and data scientists focused on
              protecting modern businesses. Our platform fuses behavioral analytics with automated
              orchestration, delivering measurable risk reduction.
            </p>
            <ul className="mt-6 space-y-3 text-emerald-100/80">
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" /> 10+ years defending critical infrastructure</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" /> Global SOC with sub‑60s alert triage</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" /> Transparent reporting and monthly posture reviews</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-emerald-400/20 bg-slate-900/40 p-1 shadow-[inset_0_0_20px_rgba(16,185,129,0.2)]">
              <div className="absolute inset-0 grid grid-cols-3 gap-2 p-2 opacity-90">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="rounded-lg bg-gradient-to-br from-emerald-500/10 to-emerald-300/10 ring-1 ring-emerald-400/20" />
                ))}
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-emerald-500/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
