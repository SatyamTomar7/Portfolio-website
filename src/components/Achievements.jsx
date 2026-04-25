import { motion } from "framer-motion";
import { FaAward, FaBrain, FaMedal, FaUsers } from "react-icons/fa";

const achievements = [
  {
    title: "200+ DSA Problems Solved",
    description:
      "Consistent practice across core data structures and algorithms, improving problem-solving speed and code efficiency.",
    icon: FaBrain,
  },
  {
    title: "Oracle AI Certification",
    description:
      "Completed Oracle AI certification, strengthening applied knowledge of AI concepts and practical implementation approaches.",
    icon: FaAward,
  },
  {
    title: "Top 11 in University Merit List",
    description:
      "Recognized among top performers in the university merit list for strong academic consistency and technical excellence.",
    icon: FaMedal,
  },
  {
    title: "IEEE Participation",
    description:
      "Actively participated in IEEE activities and technical discussions, contributing to continuous learning and peer collaboration.",
    icon: FaUsers,
  },
];

function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-28 px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-sm sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-10 text-left"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
            Highlights
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Achievements
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            A snapshot of milestones that reflect technical growth, consistency,
            and active engagement in the engineering community.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="group rounded-2xl border border-white/10 bg-slate-950/45 p-5 transition-all duration-300 hover:border-cyan-200/30 hover:bg-slate-900/70"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-200/25 bg-cyan-300/10 text-cyan-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
