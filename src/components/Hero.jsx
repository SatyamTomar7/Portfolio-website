import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const ROLE_TEXT = "Backend Developer | MERN Stack Developer";

function Hero() {
  const [typedRole, setTypedRole] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTypingIndex((current) => {
        if (current >= ROLE_TEXT.length) {
          return 0;
        }

        return current + 1;
      });
    }, 95);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    setTypedRole(ROLE_TEXT.slice(0, typingIndex));
  }, [typingIndex]);

  const socialLinks = useMemo(
    () => [
      {
        name: "GitHub",
        href: "https://github.com/",
        icon: (
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.22.72-.5v-1.92c-2.93.64-3.54-1.25-3.54-1.25-.48-1.22-1.17-1.55-1.17-1.55-.95-.64.07-.63.07-.63 1.05.08 1.6 1.08 1.6 1.08.94 1.6 2.45 1.14 3.05.87.1-.68.37-1.14.67-1.4-2.34-.27-4.8-1.16-4.8-5.18 0-1.15.42-2.1 1.1-2.84-.12-.27-.48-1.37.1-2.86 0 0 .9-.29 2.94 1.08a10.3 10.3 0 0 1 5.36 0c2.04-1.37 2.94-1.08 2.94-1.08.58 1.49.22 2.59.1 2.86.69.74 1.1 1.69 1.1 2.84 0 4.03-2.47 4.9-4.82 5.16.38.33.72.96.72 1.94v2.88c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5Z" />
          </svg>
        ),
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/",
        icon: (
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.84v1.72h.06c.54-1.02 1.86-2.1 3.84-2.1 4.1 0 4.86 2.7 4.86 6.2V21h-4v-5.44c0-1.3-.02-2.98-1.82-2.98-1.82 0-2.1 1.42-2.1 2.88V21h-4V9Z" />
          </svg>
        ),
      },
    ],
    [],
  );

  return (
    <section
      id="home"
      className="scroll-mt-28 px-6 pb-20 pt-24 sm:px-10 sm:pt-28"
    >
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-indigo-200/10 bg-gradient-to-br from-[#0d1026]/90 via-[#1a1d44]/85 to-[#101a38]/90 p-8 shadow-[0_25px_80px_rgba(59,130,246,0.25)] backdrop-blur-xl sm:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-left"
          >
            <p className="mb-4 inline-flex rounded-full border border-indigo-300/30 bg-indigo-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-200">
              Welcome to my portfolio
            </p>

            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Satyam Tomar
            </h1>

            <p className="mt-5 min-h-8 text-lg font-medium text-cyan-200 sm:text-xl">
              {typedRole}
              <span className="ml-1 inline-block h-5 w-[2px] translate-y-1 animate-pulse bg-cyan-200" />
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Building scalable backend systems and real-time applications
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 transition duration-300 hover:-translate-y-0.5 hover:from-blue-400 hover:to-indigo-400"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-cyan-200/35 bg-cyan-100/5 px-6 py-3 text-sm font-semibold text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200/10"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.name}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-indigo-200/20 bg-indigo-100/5 text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-cyan-200/10 hover:text-cyan-100"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative mx-auto h-64 w-full max-w-sm rounded-3xl border border-indigo-200/15 bg-gradient-to-b from-indigo-400/20 via-blue-500/15 to-cyan-400/10 p-6 lg:h-80"
          >
            <div className="absolute -left-10 -top-8 h-28 w-28 rounded-full bg-blue-500/35 blur-2xl" />
            <div className="absolute -bottom-10 -right-8 h-28 w-28 rounded-full bg-purple-500/35 blur-2xl" />

            <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur-sm">
              <p className="text-sm text-slate-400">Current Focus</p>
              <h3 className="text-2xl font-bold text-white">
                API Architecture
                <br />
                Real-time Systems
              </h3>
              <p className="text-sm text-slate-300">
                Node.js, Express, MongoDB, and scalable websocket workflows.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
