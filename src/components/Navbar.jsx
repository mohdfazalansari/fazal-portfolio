import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Download } from "lucide-react";

export default function Navbar({ onOpenResume }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Learning", href: "#learning" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 pt-3 sm:pt-4 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-[1200px] mx-auto bg-white/95 dark:bg-[#171C19]/95 backdrop-blur-md border border-[#E2E6E3] dark:border-[#29332E] rounded-2xl px-5 sm:px-7 py-3 flex items-center justify-between shadow-editorial pointer-events-auto transition-colors duration-200">
        
        {/* Brand Lockup: Stylized MF Monogram in #087F5B + MOHAMMAD FAZAL */}
        <a
          href="#"
          className="flex items-center gap-2.5 group select-none transition-colors"
        >
          {/* Custom SVG Monogram matching image */}
          <span className="font-extrabold text-[22px] tracking-[-0.08em] text-[#087F5B] dark:text-[#35B982] leading-none">
            MF
          </span>
          <span className="font-bold text-[13px] tracking-[0.06em] uppercase font-sans text-[#151817] dark:text-[#F1F4F2]">
            MOHAMMAD FAZAL
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-[#66706B] dark:text-[#9AA59F]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#151817] dark:hover:text-[#F1F4F2] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls: Green Resume Button + Theme Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[10px] bg-[#087F5B] hover:bg-[#066849] dark:bg-[#35B982] dark:hover:bg-[#2da371] text-white dark:text-[#101412] text-xs font-semibold shadow-2xs transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-1.5 rounded-lg border border-transparent hover:border-[#E2E6E3] dark:hover:border-[#29332E] text-[#151817] dark:text-[#F1F4F2] transition-colors"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-[#35B982]" />
            ) : (
              <Moon className="w-4 h-4 text-[#151817]" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-1.5 text-[#151817] dark:text-[#F1F4F2]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-[1200px] mx-auto mt-2 px-6 py-4 bg-white dark:bg-[#171C19] border border-[#E2E6E3] dark:border-[#29332E] rounded-2xl shadow-lg pointer-events-auto">
          <div className="flex flex-col space-y-3 text-sm font-medium text-[#151817] dark:text-[#F1F4F2]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#087F5B] dark:hover:text-[#35B982] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
