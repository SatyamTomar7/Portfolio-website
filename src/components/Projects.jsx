import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Lost & Found Management System",
    description:
      "A full-stack platform that helps users report, discover, and reclaim lost items through intelligent matching and instant updates.",
    techStack: ["MERN", "Socket.io", "JWT", "Nodemailer"],
    features: [
      "Real-time notifications",
      "JWT authentication",
      "Fuzzy item matching",
      "Email alerts",
    ],
    githubUrl: "https://github.com/",
    liveUrl: "https://lost-and-found-website-omega.vercel.app",
  },
  {
    title: "Weather App",
    description:
      "A responsive weather dashboard that provides current conditions and forecast details with a clean, user-friendly interface.",
    techStack: ["React", "OpenWeather API", "Tailwind CSS"],
    features: [
      "Live weather search",
      "Location-based forecast",
      "Error handling for invalid cities",
      "Mobile-first layout",
    ],
    githubUrl: "https://github.com/",
    liveUrl: "https://weather-seven-olive-27.vercel.app/",
  },
  {
    title: "Todo App",
    description:
      "A productivity-focused task manager with a fast workflow for creating, tracking, and organizing daily tasks effectively.",
    techStack: ["React", "Node.js", "MongoDB"],
    features: [
      "Create, update, and delete tasks",
      "Status-based filtering",
      "Persistent task storage",
      "Simple and intuitive UX",
    ],
    githubUrl: "https://github.com/",
    liveUrl: "https://todo-list-mu-wine-11.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-sm sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 text-left"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
            Featured Work
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Projects
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            Selected projects that demonstrate backend thinking, full-stack
            execution, and user-focused product delivery.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.01 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/75 to-slate-950/75 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-200/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3 pt-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition duration-300 hover:border-cyan-200/35 hover:bg-white/10"
                >
                  <FaGithub className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:from-blue-400 hover:to-indigo-400"
                >
                  <FaExternalLinkAlt className="h-3.5 w-3.5" />
                  Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
