import React from 'react';

const items = [
  {
    title: '24/7 Managed Detection',
    desc: 'Real-time monitoring and incident response led by certified analysts.'
  },
  {
    title: 'Zero‑Trust Architecture',
    desc: 'Identity-first controls that reduce blast radius and lateral movement.'
  },
  {
    title: 'Cloud & SaaS Hardening',
    desc: 'Best-practice baselines for AWS, Azure, GCP, and modern SaaS stacks.'
  },
  {
    title: 'Compliance Ready',
    desc: 'SOC 2, ISO 27001, HIPAA, PCI – streamlined audits and reporting.'
  }
];

function USPs() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_-10%,rgba(16,185,129,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">Why teams choose us</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-emerald-100/80">
          Proven capabilities that scale with your business and threat landscape.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl border border-emerald-400/20 bg-slate-900/50 p-6 transition hover:translate-y-[-2px] hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <div className="mb-3 h-10 w-10 rounded-xl bg-emerald-500/15 ring-1 ring-emerald-400/30" />
              <h3 className="text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-emerald-100/80">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default USPs;
