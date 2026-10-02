import React, { useState } from "react";
import { 
  Mail, 
  Copy, 
  Check, 
  MapPin, 
  Send
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { personalInfo } from "../data/portfolioData";

export default function Contact({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject || "Software Engineering Role"}`);
    const body = encodeURIComponent(
      `Hello Fazal,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-24 border-t border-[#E2E6E3] dark:border-[#29332E] bg-[#F7F8F6] dark:bg-[#101412] transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-[#087F5B] dark:text-[#35B982] mb-2 block">
            GET IN TOUCH
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#151817] dark:text-[#F1F4F2]">
            Let's connect.
          </h2>
          <p className="text-xs sm:text-sm text-[#66706B] dark:text-[#9AA59F] mt-2 max-w-lg leading-relaxed">
            I'm currently interested in software engineering opportunities, backend development roles, and collaborative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card */}
            <div className="p-5 rounded-2xl border border-[#E2E6E3] dark:border-[#29332E] bg-white dark:bg-[#171C19] shadow-editorial">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#66706B] dark:text-[#9AA59F] block mb-2 font-medium">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-mono text-xs sm:text-sm font-semibold text-[#151817] dark:text-[#F1F4F2] hover:text-[#087F5B] dark:hover:text-[#35B982] transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-md border border-[#E2E6E3] dark:border-[#29332E] hover:border-[#66706B] text-[#66706B] dark:text-[#9AA59F] transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-[#087F5B] dark:text-[#35B982]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              {copied && (
                <span className="text-[10px] font-mono text-[#087F5B] dark:text-[#35B982] mt-1 block">
                  Copied to clipboard!
                </span>
              )}
            </div>

            {/* Location & Status Card */}
            <div className="p-5 rounded-2xl border border-[#E2E6E3] dark:border-[#29332E] bg-white dark:bg-[#171C19] shadow-editorial space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#66706B] dark:text-[#9AA59F] font-medium">
                  Location
                </span>
                <span className="font-medium text-[#151817] dark:text-[#F1F4F2] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#087F5B] dark:text-[#35B982]" />
                  {personalInfo.location}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs pt-2 border-t border-[#E2E6E3] dark:border-[#29332E]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#66706B] dark:text-[#9AA59F] font-medium">
                  Availability
                </span>
                <span className="text-[11px] font-medium text-[#087F5B] dark:text-[#35B982] inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087F5B] dark:bg-[#35B982]" />
                  Open to Opportunities
                </span>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-[#E2E6E3] dark:border-[#29332E] bg-white dark:bg-[#171C19] shadow-editorial hover:border-[#66706B] transition-colors flex items-center gap-2.5 text-xs font-medium text-[#151817] dark:text-[#F1F4F2]"
              >
                <LinkedinIcon className="w-4 h-4 text-[#087F5B] dark:text-[#35B982]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-[#E2E6E3] dark:border-[#29332E] bg-white dark:bg-[#171C19] shadow-editorial hover:border-[#66706B] transition-colors flex items-center gap-2.5 text-xs font-medium text-[#151817] dark:text-[#F1F4F2]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Quick Resume Access Button */}
            <button
              onClick={onOpenResume}
              className="w-full py-2.5 px-4 rounded-xl border border-[#E2E6E3] dark:border-[#29332E] bg-white dark:bg-[#171C19] text-[#151817] dark:text-[#F1F4F2] hover:border-[#087F5B] dark:hover:border-[#35B982] hover:text-[#087F5B] dark:hover:text-[#35B982] font-medium text-xs shadow-editorial transition-colors"
            >
              View Verified Resume →
            </button>

          </div>

          {/* Right Column: Clean Editorial Inquiry Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-7 rounded-2xl border border-[#E2E6E3] dark:border-[#29332E] bg-white dark:bg-[#171C19] shadow-editorial space-y-4"
            >
              <h3 className="text-base font-bold text-[#151817] dark:text-[#F1F4F2] mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-[#66706B] dark:text-[#9AA59F] mb-4">
                Opens your default email client pre-populated with your message.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#66706B] dark:text-[#9AA59F] mb-1.5 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Connor"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-[#E2E6E3] dark:border-[#29332E] bg-[#F7F8F6] dark:bg-[#101412] text-[#151817] dark:text-[#F1F4F2] focus:outline-none focus:border-[#087F5B] dark:focus:border-[#35B982] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#66706B] dark:text-[#9AA59F] mb-1.5 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="s.connor@example.com"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-[#E2E6E3] dark:border-[#29332E] bg-[#F7F8F6] dark:bg-[#101412] text-[#151817] dark:text-[#F1F4F2] focus:outline-none focus:border-[#087F5B] dark:focus:border-[#35B982] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#66706B] dark:text-[#9AA59F] mb-1.5 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Software Engineering Inquiry"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-[#E2E6E3] dark:border-[#29332E] bg-[#F7F8F6] dark:bg-[#101412] text-[#151817] dark:text-[#F1F4F2] focus:outline-none focus:border-[#087F5B] dark:focus:border-[#35B982] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#66706B] dark:text-[#9AA59F] mb-1.5 font-medium">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Fazal, I'd like to discuss..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-[#E2E6E3] dark:border-[#29332E] bg-[#F7F8F6] dark:bg-[#101412] text-[#151817] dark:text-[#F1F4F2] focus:outline-none focus:border-[#087F5B] dark:focus:border-[#35B982] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg bg-[#087F5B] hover:bg-[#066849] dark:bg-[#35B982] dark:hover:bg-[#2da371] text-white dark:text-[#101412] font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-editorial transition-colors"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>

              {submitted && (
                <p className="text-[11px] font-mono text-[#087F5B] dark:text-[#35B982] text-center mt-2">
                  Draft opened in your email client!
                </p>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
