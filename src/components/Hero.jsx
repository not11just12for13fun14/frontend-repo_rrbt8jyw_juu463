import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

function Hero() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Placeholder submit: integrate with backend or CRM later
    setTimeout(() => {
      setForm({ name: '', email: '', company: '', message: '' });
    }, 400);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_-10%_-20%,rgba(34,197,94,0.2),transparent),radial-gradient(900px_500px_at_120%_20%,rgba(16,185,129,0.15),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Lead form and copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300 ring-1 ring-emerald-400/20">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Enterprise Cyber Security
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Defend your business with next‑gen protection
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-emerald-100/80">
              We combine human expertise with autonomous defenses to stop threats before they impact your operations.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6 backdrop-blur-md shadow-[0_0_40px_rgba(16,185,129,0.15)]">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-emerald-200/70">Full name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-emerald-400/20 bg-slate-800/60 px-4 py-3 text-white placeholder-emerald-200/40 outline-none ring-emerald-400/30 focus:ring"
                    placeholder="Alex Morgan"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-emerald-200/70">Work email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-emerald-400/20 bg-slate-800/60 px-4 py-3 text-white placeholder-emerald-200/40 outline-none ring-emerald-400/30 focus:ring"
                    placeholder="alex@company.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm text-emerald-200/70">Company</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-emerald-400/20 bg-slate-800/60 px-4 py-3 text-white placeholder-emerald-200/40 outline-none ring-emerald-400/30 focus:ring"
                    placeholder="Your company name"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm text-emerald-200/70">What do you want to secure?</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full rounded-xl border border-emerald-400/20 bg-slate-800/60 px-4 py-3 text-white placeholder-emerald-200/40 outline-none ring-emerald-400/30 focus:ring resize-none"
                    placeholder="Cloud, endpoints, identity, apps..."
                  />
                </div>
              </div>
              <div className="mt-5 flex items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-900 transition hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/40"
                >
                  Request a demo
                </button>
                {submitted && (
                  <span className="text-sm text-emerald-300">Thanks! We’ll reach out shortly.</span>
                )}
              </div>
              <p className="mt-3 text-xs text-emerald-200/60">By submitting, you agree to our privacy policy.</p>
            </form>
          </div>

          {/* 3D Spline Scene */}
          <div className="relative h-[480px] w-full rounded-3xl border border-emerald-400/20 bg-slate-900/40 p-1 shadow-[inset_0_0_20px_rgba(16,185,129,0.2)] lg:h-[600px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <Spline
                scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            {/* subtle top shine */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-emerald-500/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
