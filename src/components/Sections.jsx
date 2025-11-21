import React from 'react';

function Logos() {
  return (
    <div className="mt-2 flex flex-wrap items-center justify-center gap-8 opacity-80">
      {['ShieldNet','SentraX','Vaultify','NimbusSec','CypherWave'].map((l) => (
        <span key={l} className="text-sm text-emerald-200/70">{l}</span>
      ))}
    </div>
  );
}

export function CTA() {
  return (
    <section className="relative py-20">
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-slate-900 to-slate-900/60 p-8 text-center shadow-[0_0_40px_rgba(16,185,129,0.15)]">
          <h3 className="text-3xl font-semibold text-white">Ready to raise your security bar?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-emerald-100/80">Book a 30‑minute threat posture review with our architects. We’ll map quick wins and a roadmap tailored to your environment.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-900 transition hover:bg-emerald-400">Book a session</button>
            <button className="rounded-xl border border-emerald-400/30 px-5 py-3 font-semibold text-white hover:bg-white/5">Download overview</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  const tiers = [
    { name: 'Essentials', price: 'Custom', features: ['SIEM integration', 'Weekly reports', 'Email support'] },
    { name: 'Advanced', price: 'Custom', features: [' MDR + EDR', 'Playbook automation', '24/7 phone support'] },
    { name: 'Enterprise', price: 'Custom', features: ['Dedicated analyst', 'Threat hunting', 'Incident response SLA'] }
  ];
  return (
    <section className="relative py-20">
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">Plans that fit</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-emerald-100/80">Flexible offerings to match your stage and risk profile.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6">
              <h3 className="text-xl font-semibold text-white">{t.name}</h3>
              <p className="mt-1 text-3xl font-bold text-emerald-400">{t.price}</p>
              <ul className="mt-4 space-y-2 text-emerald-100/80">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" /> {f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-xl bg-emerald-500 py-3 font-semibold text-slate-900 hover:bg-emerald-400">Talk to sales</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function LogosBar() {
  return (
    <section className="relative py-12">
      <div className="relative mx-auto max-w-6xl px-6">
        <p className="text-center text-sm uppercase tracking-widest text-emerald-200/60">Trusted by modern teams</p>
        <Logos />
      </div>
    </section>
  );
}
