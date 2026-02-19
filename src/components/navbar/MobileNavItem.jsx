import { useState } from "react";

export default function MobileNavItem({ item, onClose }) {
  const [open, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  return (
    <div className="border-b">
      <button
        className="w-full flex justify-between px-5 py-4 text-sm font-bold"
        onClick={() => {
          setOpen(!open);
          setOpenSection(null);
        }}
      >
        {item.label}
      </button>

      {open &&
        item.sections.map((section, i) => {
          const hasLinks =
            Array.isArray(section.links) && section.links.length > 0;

          return (
            <div key={i}>
              {/* Section Title */}
              <button
                className="w-full text-left px-6 py-2 font-semibold text-[var(--primary)]"
                onClick={() => {
                  if (hasLinks) {
                    setOpenSection(openSection === i ? null : i);
                  } else {
                    onClose();
                  }
                }}
              >
                {section.title}
              </button>

              {/* Links (only if exists) */}
              {hasLinks &&
                openSection === i &&
                section.links.map((link, j) => (
                  <a
                    key={j}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="block px-8 py-1 text-sm text-gray-600 hover:text-[var(--primary)]"
                  >
                    {link}
                  </a>
                ))}
            </div>
          );
        })}
    </div>
  );
}
