import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function CompassLogo() {
  return (
    <div className="relative mx-auto mb-10 flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52" aria-hidden="true">
      <div className="absolute inset-2 rounded-full bg-cyan-400/20 blur-xl" />
      <div className="absolute inset-0 rounded-full border border-cyan-200/40 bg-cyan-400/25 shadow-[0_0_45px_rgba(12,245,245,0.55),inset_0_0_35px_rgba(12,245,245,0.45)]" />
      <div className="absolute inset-4 rounded-full border border-cyan-200/30 bg-slate-950/35" />
      <div className="absolute h-52 w-5 bg-gradient-to-b from-cyan-300 via-cyan-300/35 to-cyan-300 [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)] sm:h-64" />
      <div className="absolute h-5 w-52 bg-gradient-to-r from-cyan-300 via-cyan-300/35 to-cyan-300 [clip-path:polygon(0_50%,50%_0,100%_50%,50%_100%)] sm:w-64" />
      <div className="absolute h-28 w-28 rotate-45 rounded-[30%_70%_30%_70%] bg-slate-950 shadow-[inset_0_0_26px_rgba(12,245,245,0.45)]" />
      <div className="absolute h-16 w-16 rotate-45 rounded-[30%_70%_30%_70%] bg-cyan-300/70 blur-sm" />
      <div className="absolute h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,1)]" />
    </div>
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0d1723] text-white">
      <section className="relative flex min-h-screen items-center justify-center px-6 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(8,245,245,0.18),transparent_34%),linear-gradient(180deg,rgba(13,23,35,0)_0%,rgba(13,23,35,1)_80%)]" />
        <div className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -right-28 bottom-16 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
          <CompassLogo />
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.55em] text-cyan-300/90 sm:text-base">Le Software Solutions</p>
          <h1 className="text-4xl font-black uppercase tracking-tight text-cyan-300 sm:text-6xl lg:text-7xl">Payment Pending</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">This project is currently on hold while payment is pending. Service will resume as soon as the outstanding balance is settled.</p>
          <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-cyan-300/20 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-200">Account status</p>
            <p className="mt-3 text-2xl font-bold text-white">Awaiting payment confirmation</p>
            <p className="mt-3 text-slate-300">If you believe this message is shown in error, please contact Le Software Solutions support.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
