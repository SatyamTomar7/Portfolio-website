import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaNodeJs, FaReact, FaTools } from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    icon: FaCode,
    accent: "from-cyan-500/40 to-blue-500/20",
    skills: [
      { name: "JavaScript", level: 88, icon: SiJavascript },
      { name: "C++", level: 82, icon: FaCode },
      { name: "SQL", level: 80, icon: FaDatabase },
    ],
  },
  {
    title: "Backend",
    icon: FaNodeJs,
    accent: "from-emerald-500/40 to-lime-500/20",
    skills: [
      { name: "Node.js", level: 90, icon: FaNodeJs },
      { name: "Express.js", level: 87, icon: SiExpress },
      { name: "REST APIs", level: 92, icon: FaTools },
    ],
  },
  {
    title: "Frontend",
    icon: FaReact,
    accent: "from-indigo-500/40 to-cyan-500/20",
    skills: [
      { name: "React", level: 85, icon: FaReact },
      { name: "Tailwind CSS", level: 84, icon: SiTailwindcss },
      { name: "Responsive UI", level: 86, icon: FaTools },
    ],
  },
  {
    title: "Database & Tools",
    icon: FaDatabase,
    accent: "from-violet-500/40 to-blue-500/20",
    skills: [
      { name: "MongoDB", level: 88, icon: SiMongodb },
      { name: "Git/GitHub", level: 83, icon: FaTools },
      { name: "Postman", level: 82, icon: FaTools },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-sm sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 text-left"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
            Expertise
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Skills</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            A focused set of technologies I use to build reliable backend
            systems and modern full-stack applications.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;

            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: categoryIndex * 0.08 }}
                className="group rounded-2xl border border-white/10 bg-slate-950/45 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-slate-900/70"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${category.accent} text-cyan-100`}
                  >
                    <CategoryIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-200">
                            <SkillIcon className="h-4 w-4 text-cyan-300" />
                            {skill.name}
                          </span>
                          <span className="text-xs font-semibold text-slate-400">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, amount: 0.65 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
