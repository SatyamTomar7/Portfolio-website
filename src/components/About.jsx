import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="scroll-mt-28 px-6 py-20 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-sm sm:p-8"
      >
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
          <div className="order-2 text-left md:order-1">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
              About Me
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              3rd Year B.Tech CSE Student
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300">
              I am a third-year B.Tech CSE student with a strong interest in
              backend development and building scalable systems. I enjoy solving
              practical engineering problems and designing reliable server-side
              architectures.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              I have solved 200+ DSA problems, which has strengthened my
              problem-solving mindset and helped me write efficient, optimized
              code.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative overflow-hidden rounded-2xl border border-cyan-200/20 bg-slate-950/40">
              <img
                src="https://quotefancy.com/media/wallpaper/3840x2160/8151359-Hello-World-Wallpaper.jpg"
                alt="Developer workspace setup"
                className="h-64 w-full object-cover sm:h-72 md:h-80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
