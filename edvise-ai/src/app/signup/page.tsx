"use client";
export default function SignupPage() {
  return (
    <main className="mx-auto max-w-md px-4 py-16">
      <h2 className="text-3xl font-semibold mb-6 neon-text">Sign up</h2>
      <form className="glass rounded-2xl p-6 grid gap-4">
        <input className="bg-transparent border border-white/15 rounded-lg px-3 py-2" placeholder="Full name" />
        <input className="bg-transparent border border-white/15 rounded-lg px-3 py-2" placeholder="Email" />
        <input className="bg-transparent border border-white/15 rounded-lg px-3 py-2" placeholder="Password" type="password" />
        <button className="glass rounded-xl px-5 py-2.5">Create account</button>
      </form>
    </main>
  );
}


