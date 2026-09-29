"use client";

import Link from "next/link";
import { useState } from "react";

const input = "h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none placeholder:text-muted focus:border-brand";

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="mt-5 block text-xs text-ink">
      {label}
      <input {...props} className={`${input} mt-2`} required />
    </label>
  );
}

export function SignupForm() {
  const [done, setDone] = useState(false);
  return (
    <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="flex min-h-[460px] flex-col">
      <p className="text-sm text-brand">Create an Account</p>
      <h1 className="text-3xl font-semibold leading-tight md:text-4xl">Welcome to ByteSpace</h1>
      <Field label="Full Name" name="name" placeholder="Jamie Davis" autoComplete="name" />
      <Field label="Email" type="email" name="email" placeholder="designer@example.com" autoComplete="email" />
      <Field label="Password" type="password" name="password" placeholder="********" minLength={8} autoComplete="new-password" />
      <div className="mt-6 flex items-center justify-end gap-3">
        {done && <span role="status" className="text-xs text-muted">Frontend demo — no backend connected.</span>}
        <button className="h-10 rounded-full bg-lime px-6 text-sm font-medium hover:brightness-95">Continue</button>
      </div>
      <p className="mt-auto pt-10 text-center text-sm text-muted">Already have an account? <Link href="/login" className="text-brand">Login</Link></p>
    </form>
  );
}

export function LoginForm() {
  const [done, setDone] = useState(false);
  return (
    <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="flex min-h-[460px] flex-col">
      <p className="text-sm text-brand">Sign In</p>
      <h1 className="text-3xl font-semibold leading-tight md:text-4xl">Welcome Back</h1>
      <Field label="Email" type="email" name="email" placeholder="designer@example.com" autoComplete="email" />
      <Field label="Password" type="password" name="password" placeholder="********" autoComplete="current-password" />
      <div className="mt-6 flex items-center justify-end gap-3">
        {done && <span role="status" className="text-xs text-muted">Frontend demo — no backend connected.</span>}
        <button className="h-10 rounded-full bg-lime px-6 text-sm font-medium hover:brightness-95">Sign In</button>
      </div>
      <div className="my-8 flex items-center gap-4 text-xs text-muted"><span className="h-px flex-1 bg-black/10" />or<span className="h-px flex-1 bg-black/10" /></div>
      <div className="flex justify-center gap-4">
        <button type="button" aria-label="Continue with Facebook" className="flex h-14 w-14 items-center justify-center rounded-2xl border border-black/10 hover:bg-chip">
          <svg viewBox="0 0 24 24" className="h-7 w-7"><path fill="#0e0e1a" d="M22 12a10 10 0 1 0-11.600 9.900v-7H7.900V12h2.500V9.800c0-2.500 1.500-3.900 3.800-3.900 1.100 0 2.200.2 2.200.2v2.500h-1.300c-1.200 0-1.600.8-1.600 1.600V12h2.800l-.4 2.900h-2.300v7A10 10 0 0 0 22 12Z" /></svg>
        </button>
        <button type="button" aria-label="Continue with Google" className="flex h-14 w-14 items-center justify-center rounded-2xl border border-black/10 hover:bg-chip">
          <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="#0e0e1a" d="M12 10.200v3.900h5.500c-.2 1.400-1.700 4.100-5.500 4.100a6.200 6.200 0 0 1 0-12.400c2 0 3.300.9 4 1.600l2.700-2.600A10 10 0 0 0 12 2a10 10 0 1 0 0 20c5.800 0 9.600-4 9.600-9.800 0-.7-.1-1.200-.2-2H12Z" /></svg>
        </button>
      </div>
      <p className="mt-auto pt-8 text-center text-sm text-muted">New user? <Link href="/signup" className="text-brand">Create an account</Link></p>
    </form>
  );
}
