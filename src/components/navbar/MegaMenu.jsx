import { useState } from "react";

export default function MegaMenu({ navItem, onClose }) {
  const [activeSection, setActiveSection] = useState(0);
  const current = navItem.sections[activeSection];

  return (
    <div
      className="absolute top-full left-0 right-0 z-50 bg-white shadow-2xl border-t border-gray-200"
      style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.13)" }}
    >
      <div className="max-w-screen-xl mx-auto flex" style={{ minHeight: 280 }}>
        {/* LEFT: Section sidebar */}
        <div className="w-56 shrink-0 bg-white border-r border-gray-100 py-3">
          {navItem.sections.map((section, i) => (
            <button
              key={i}
              className={`w-full text-left px-5 py-2.5 text-[13px] font-semibold transition-colors flex items-center justify-between group ${
                activeSection === i
                  ? "bg-[var(--primary)] text-white"
                  : "text-[var(--secondary)] hover:bg-[var(--primary)] hover:text-[var(--primary)]"
              }`}
              onMouseEnter={() => setActiveSection(i)}
              onClick={() => setActiveSection(i)}
            >
              <span>{section.title}</span>
              {activeSection === i && (
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>

        {/* RIGHT: Links grid */}
        <div className="flex-1 p-6">
          <p className="text-[12px] font-extrabold text-[var(--secondary)] uppercase tracking-widest mb-4">
            {current.title}
          </p>
          <div
            className="grid gap-x-8 gap-y-1"
            style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
          >
            {current.links.map((link, j) => (
              <a
                key={j}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[var(--secondary)] hover:text-[var(--primary)] py-1.5 transition-colors border-b border-gray-50 hover:border-orange-100"
                onClick={onClose}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
