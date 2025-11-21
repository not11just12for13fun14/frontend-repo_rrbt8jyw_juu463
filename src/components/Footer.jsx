import React from 'react';

function Footer() {
  return (
    <footer className="mt-20 border-t border-emerald-400/10 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-emerald-400 to-emerald-600" />
            <span className="text-white font-semibold">Aegis Secure</span>
          </div>
          <p className="text-sm text-emerald-200/60">© {new Date().getFullYear()} Aegis Secure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
