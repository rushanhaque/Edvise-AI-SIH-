"use client";
import { Code2, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function ClientFooter() {
  return (
    <footer className="relative z-10 mt-24 border-top border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center gap-3 text-sm"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)]/20">
              <Code2 className="h-4 w-4 text-[var(--primary)]" />
            </span>
            <span className="text-[var(--text-muted)]">developed with</span>
            <Heart className="h-4 w-4 text-rose-400" />
            <span className="text-[var(--text-muted)]">by</span>
            <span className="font-medium text-[var(--foreground)]">Rushan Haque</span>
          </motion.div>

          <div className="flex flex-1 items-center justify-between gap-6 md:justify-end">
            <div className="flex flex-wrap items-center gap-3">
              {[
                {
                  href:
                    "https://www.linkedin.com/in/rushanhaque?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                  label: "LinkedIn",
                  bg: "",
                  icon: (
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor"><path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.345V9h3.41v1.561h.048c.476-.9 1.637-1.852 3.37-1.852 3.604 0 4.269 2.372 4.269 5.457v6.286zM5.337 7.433a1.984 1.984 0 1 1 0-3.968 1.984 1.984 0 0 1 0 3.968zM6.995 20.452H3.676V9h3.319v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  ),
                },
                {
                  href: "https://github.com/rushanhaque",
                  label: "GitHub",
                  bg: "",
                  icon: (
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor"><path d="M12 .296a12 12 0 0 0-3.794 23.393c.6.11.82-.26.82-.58v-2.17c-3.338.73-4.04-1.61-4.04-1.61-.546-1.39-1.333-1.76-1.333-1.76-1.09-.75.083-.735.083-.735 1.205.084 1.84 1.23 1.84 1.23 1.07 1.836 2.807 1.305 3.492.997.108-.79.42-1.305.763-1.606-2.665-.304-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.304-.536-1.527.117-3.183 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 6.006 0c2.29-1.552 3.297-1.23 3.297-1.23.655 1.656.243 2.879.12 3.183.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.922.43.37.815 1.102.815 2.222v3.293c0 .322.218.695.825.577A12 12 0 0 0 12 .296"/></svg>
                  ),
                },
                {
                  href:
                    "https://www.instagram.com/rushanhaque?igsh=MTN1eTBlMG45andoZw==",
                  label: "Instagram",
                  bg: "",
                  icon: (
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="3.5" />
                      <path d="M17.5 6.5h.01" />
                    </svg>
                  ),
                },
                {
                  href: "mailto:rushanulhaque@gmail.com",
                  label: "rushanulhaque@gmail.com",
                  bg: "",
                  icon: (
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor"><path d="M12 13.065 0 6.75V18a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6.75l-12 6.315z"/><path d="M22 4H2a2 2 0 0 0-2 2v.122l12 6.316L24 6.122V6a2 2 0 0 0-2-2z"/></svg>
                  ),
                },
              ].map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35, delay: 0.06 * idx, ease: "easeOut" }}
                  className={`glass rounded-lg px-3 py-1.5 inline-flex items-center gap-2 text-sm text-[var(--foreground)]/90 shadow-sm hover:shadow transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.03]`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              {[
                { title: "HTML5", svg: (<svg viewBox="0 0 128 128" className="h-5 w-5"><path fill="#E34F26" d="M19 3l8.2 92.2L64 125l36.9-29.8L109 3H19z"/><path fill="#EF652A" d="M64 116.1l29.8-24.1 7-78.6H64v102.7z"/><path fill="#fff" d="M64 52.7H48.4l-1-11.4H64V30H35.6l.3 3.7 2.9 32.8H64V52.7zM64 86.8l-.1.1-13.2-3.6-.8-9.3H38.5l1.6 18 23.8 6.6.1-.1V86.8z"/><path fill="#fff" d="M64 52.7v10.8h14.5l-1.4 16.2L64 86.9v12.6l23.8-6.6 3.7-41.8.4-3.7H64z"/></svg>) },
                { title: "CSS3", svg: (<svg viewBox="0 0 128 128" className="h-5 w-5"><path fill="#1572B6" d="M19 3l8.2 92.2L64 125l36.9-29.8L109 3H19z"/><path fill="#33A9DC" d="M64 116.1l29.8-24.1 7-78.6H64v102.7z"/><path fill="#fff" d="M64 52.7H48.4l-1-11.4H64V30H35.6l.3 3.7 2.9 32.8H64V52.7zM64 86.8l-.1.1-13.2-3.6-.8-9.3H38.5l1.6 18 23.8 6.6.1-.1V86.8z"/><path d="M64 52.7v10.8h14.5l-1.4 16.2L64 86.9v12.6l23.8-6.6 3.7-41.8.4-3.7H64z" fill="#EBEBEB"/></svg>) },
                { title: "JavaScript", svg: (<svg viewBox="0 0 128 128" className="h-5 w-5"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/><path d="M116.347 96.736c-.917-5.762-4.643-10.6-15.7-15.14-3.84-1.77-8.12-3.04-9.4-5.96-.45-1.67-.51-2.61-.23-3.62.83-3.36 4.86-4.39 8.05-3.43 2.06.69 4 .23 5.33-1.55 1.71-2.32 1.47-6.03-1.26-7.93-4.33-3.18-11.97-2.26-16.04 2.05-3.42 3.49-4.44 8.38-3.7 13.01.534 3.469 1.969 6.337 3.969 8.602 5.62 6.41 15.34 6.45 19.62 12.26 3.74 5.3-.9 12.57-7.89 11.66-3.27-.41-5.2-1.62-7.24-3.71-1.86-1.94-3.53-4.21-7.35-3.66-3.2.46-6.38 3.34-5.55 7.03.64 2.86 3 4.37 6.69 5.55 7.75 2.51 18.51 2.13 25.23-3.16 6.22-4.95 8.77-13.62 7.61-20.901zM69.808 49.99H57.918v34.55c0 7.38-.31 15.07-9.66 15.07-2.35 0-4.9-.41-6.96-1.39l1.02 7.9c2.36.82 5.77 1.07 8.52 1.1 13.02 0 18.97-8.07 18.97-20.6V49.99z"/></svg>) },
                { title: "React", svg: (<svg viewBox="0 0 128 128" className="h-5 w-5"><g fill="none" stroke="#61DAFB" strokeWidth="6"><ellipse cx="64" cy="64" rx="50" ry="18"/><ellipse cx="64" cy="64" rx="50" ry="18" transform="rotate(60 64 64)"/><ellipse cx="64" cy="64" rx="50" ry="18" transform="rotate(120 64 64)"/></g><circle cx="64" cy="64" r="8" fill="#61DAFB"/></svg>) },
                { title: "Node.js", svg: (<svg viewBox="0 0 256 272" className="h-5 w-5"><path fill="#83CD29" d="M128 .021L0 68.229v135.542l128 68.208 128-68.208V68.229z"/><path fill="#fff" d="M128 34.63l93.867 50.028v100.685L128 235.37l-93.867-50.027V84.658z"/><path fill="#83CD29" d="M170.667 135.356c0-24.356-21.333-30.222-45.333-30.222-20.889 0-43.556 7.111-43.556 26.222 0 18 13.333 23.334 35.556 27.111l10.222 1.778c14.666 2.444 22.222 4.889 22.222 12 0 7.556-6.444 10.889-22.222 10.889-19.778 0-28.889-3.556-31.111-15.111h-24.444c2.444 24 21.556 33.111 55.111 33.111 26.889 0 47.556-7.111 47.556-28.889 0-18.889-12.222-24-36.444-28l-11.556-2c-14.444-2.444-20.889-5.111-20.889-11.333 0-6.444 7.889-10 21.333-10 17.333 0 25.556 3.667 27.778 13.333h24z"/></svg>) },
              ].map((t, idx) => (
                <motion.div
                  key={t.title}
                  title={t.title}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35, delay: 0.05 * idx, ease: "easeOut" }}
                  className="glass rounded-lg p-2 hover:-translate-y-0.5 hover:scale-[1.05] transition-transform duration-300"
                >
                  {t.svg}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


