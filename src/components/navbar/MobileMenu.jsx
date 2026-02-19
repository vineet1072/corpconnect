import { useState } from "react";

// ─── Single mobile nav item (3-level accordion) ───────────────────────────────
function MobileNavItem({ item, onClose }) {
  const [open, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  return (
    <div className="border-b border-gray-100">
      {/* Level 1: Top nav label */}
      <button
        className={`w-full flex items-center justify-between px-5 py-4 text-sm font-bold transition-colors ${
          open
            ? "text-[var(--primary)] bg-orange-50"
            : "text-gray-800 hover:bg-gray-50"
        }`}
        onClick={() => {
          setOpen((v) => !v);
          setOpenSection(null);
        }}
      >
        <span>{item.label}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            open ? "rotate-180 text-[var(--primary)]" : "text-gray-400"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="border-t border-gray-100 bg-gray-50">
          {item.sections.map((section, i) => {
            const hasLinks =
              Array.isArray(section.links) && section.links.length > 0;
            const slug = section.title.toLowerCase().replace(/\s+/g, "-");

            return (
              <div key={i} className="border-b border-gray-100 last:border-0">
                {/* Level 2: Section heading */}

                {hasLinks ? (
                  <button
                    className={`w-full flex items-center justify-between px-6 py-3 text-[12px] font-bold transition-colors ${
                      openSection === i
                        ? "bg-[var(--primary)] text-white"
                        : "text-gray-700 hover:bg-[var(--primary)]hover:text-[var(--primary)]"
                    }`}
                    onClick={() => setOpenSection(openSection === i ? null : i)}
                  >
                    <span>{section.title}</span>

                    {/* Arrow only when links exist */}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${
                        openSection === i ? "rotate-90" : ""
                      }`}
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
                  </button>
                ) : (
                  <a
                    href={`https://www.registerkaro.in/${slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="block w-full px-6 py-3 text-[12px] font-bold text-gray-700 hover:bg-orange-50 hover:text-[var(--primary)] transition-colors"
                  >
                    {section.title}
                  </a>
                )}

                {/* Level 3: Links */}
                {hasLinks && openSection === i && (
                  <div className="bg-white px-6 py-3 grid grid-cols-2 gap-x-4 gap-y-0.5">
                    {section.links.map((link, j) => (
                      <a
                        key={j}
                        href={`https://www.registerkaro.in/${link
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11.5px] text-gray-600 hover:text-[var(--primary)] py-1 transition-colors"
                        onClick={onClose}
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Full mobile menu panel ───────────────────────────────────────────────────
export default function MobileMenu({ navData, onClose }) {
  return (
    <div
      className="lg:hidden bg-white border-t border-gray-100 overflow-y-auto shadow-xl"
      style={{ maxHeight: "82vh" }}
    >
      {navData.map((item) => (
        <MobileNavItem key={item.label} item={item} onClose={onClose} />
      ))}

      {/* Bottom action buttons */}
      {/* <div className="px-5 py-5 space-y-3 border-t border-gray-100 bg-gray-50">
        <div className="flex gap-3">
          <a
            href="https://portal.registerkaro.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 border border-gray-300 text-gray-800 text-sm font-bold rounded-md text-center hover:border-orange-400 hover:text-orange-500 transition-colors"
          >
            Login
          </a>
          <a
            href="https://www.registerkaro.in/contact-us"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 bg-orange-500 text-white text-sm font-bold rounded-md text-center hover:bg-orange-600 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div> */}
    </div>
  );
}
