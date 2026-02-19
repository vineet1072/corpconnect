export default function SimpleDropdown({ navItem, onClose }) {
  const position = navItem.position || {
    left: "50%",
    translateX: "-50%",
    top: "100%",
  };

  return (
    <div
      className="absolute z-50 mt-2 w-64 bg-white shadow-2xl border border-gray-100 rounded-lg overflow-hidden"
      style={{
        left: position.left,
        top: position.top,
        transform: `translateX(${position.translateX})`,
      }}
    >
      <ul className="py-2">
        {navItem.sections.map((section, i) => {
          const slug = section.title.toLowerCase().replace(/\s+/g, "-");

          return (
            <li key={i}>
              <a
                href={`/${slug}`}
                onClick={onClose}
                className="block px-5 py-2.5 text-sm text-[var(--secondary)] hover:bg-[var(--primary)] hover:text-white transition-colors"
              >
                {section.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
