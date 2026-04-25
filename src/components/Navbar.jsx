import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Achievements", id: "achievements" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersLight = window.matchMedia(
      "(prefers-color-scheme: light)",
    ).matches;
    const initialTheme = savedTheme || (prefersLight ? "light" : "dark");

    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    const isLight = theme === "light";
    document.documentElement.classList.toggle("light", isLight);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + 130;
      let current = "home";

      NAV_LINKS.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= marker) {
          current = link.id;
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  const handleLinkClick = (event, id) => {
    event.preventDefault();
    setIsOpen(false);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-r from-slate-950/85 via-slate-900/80 to-slate-950/85 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur-xl sm:px-6">
        <a
          href="#home"
          onClick={(event) => handleLinkClick(event, "home")}
          className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-2xl font-bold tracking-wide text-transparent"
        >
          Satyam
        </a>

        <ul className="hidden items-center gap-2 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(event) => handleLinkClick(event, link.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-400/20 text-cyan-200 ring-1 ring-cyan-300/50"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2 text-slate-100 transition hover:bg-white/10"
            aria-label="Toggle dark and light mode"
            title="Toggle theme"
          >
            {theme === "dark" ? (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a7 7 0 1 0 9 9 9 9 0 1 1-9-9" />
              </svg>
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2 text-slate-100 transition hover:bg-white/10 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12h16" />
                <path d="M4 6h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mx-auto mt-2 w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900/85 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col p-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(event) => handleLinkClick(event, link.id)}
                    className={`block rounded-xl px-4 py-3 text-left text-base font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-cyan-400/20 text-cyan-200"
                        : "text-slate-200 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
