import React from 'react';

function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur border-b border-emerald-400/10 bg-slate-900/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-[0_0_25px_rgba(16,185,129,0.6)]" />
          <span className="text-white font-semibold">Aegis Secure</span>
        </div>
        <nav className="hidden gap-6 text-emerald-100/80 md:flex">
          {['Solutions','About','Pricing','Contact'].map((l) => (
            <a key={l} href="#" className="hover:text-white">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="rounded-xl border border-emerald-400/30 px-4 py-2 text-white hover:bg-white/5">Login</button>
          <button className="rounded-xl bg-emerald-500 px-4 py-2 font-semibold text-slate-900 hover:bg-emerald-400">Get started</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
