import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      validationErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      validationErrors.message = "Message should be at least 10 characters.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(false);

    if (!validateForm()) {
      return;
    }

    setIsSubmitted(true);
    setFormData(initialForm);
  };

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/SatyamTomar7/",
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/satyam-tomar-5267a1373",
      icon: FaLinkedin,
    },
    {
      label: "Email",
      href: "mailto:tomarsatyam367@gmail.com",
      icon: FaEnvelope,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-28 px-6 pb-28 pt-20 sm:px-10">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-sm sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-8 text-left"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
            Get In Touch
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Contact</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Have a project idea or collaboration in mind? Send me a message and
            I will get back to you soon.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl border border-white/10 bg-slate-950/45 p-5 sm:p-6"
            noValidate
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/30"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-rose-300">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/30"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-rose-300">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/30"
                  placeholder="Write your message"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-rose-300">{errors.message}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:from-blue-400 hover:to-indigo-400"
            >
              Submit Message
            </button>

            {isSubmitted && (
              <p className="mt-4 rounded-lg border border-emerald-300/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                Thank you. Your message has been submitted successfully.
              </p>
            )}
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="rounded-2xl border border-white/10 bg-slate-950/45 p-5 sm:p-6"
          >
            <h3 className="text-xl font-semibold text-white">
              Connect With Me
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              You can also reach me through these platforms for collaboration,
              networking, and project discussions.
            </p>

            <div className="mt-5 space-y-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100 transition duration-300 hover:border-cyan-300/40 hover:bg-white/10"
                  >
                    <Icon className="h-4 w-4 text-cyan-200" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

export default Contact;
