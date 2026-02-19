// Desktop right-side action buttons
export default function NavActions() {
  return (
    <div className="hidden lg:flex items-center gap-3 shrink-0">
      {/* Search icon */}
      {/* <button className="p-2 text-gray-500 hover:text-orange-500 transition-colors">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button> */}

      {/* Contact Us */}
      {/* <a
        href="https://www.registerkaro.in/contact-us"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[14px] font-semibold text-gray-800 hover:text-orange-500 transition-colors whitespace-nowrap"
      >
        Contact Us
      </a> */}

      {/* Login */}
      {/* <a
        href="https://portal.registerkaro.in"
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 border border-gray-300 rounded-md text-[14px] font-semibold text-gray-800 hover:border-orange-400 hover:text-orange-500 transition-colors whitespace-nowrap"
      >
        Login
      </a> */}

      {/* Talk to Experts */}
      {/* <a
        href="tel:+919211993861"
        className="inline-flex items-center gap-2 px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white text-[14px] font-bold rounded-md transition-colors whitespace-nowrap shadow-sm"
      >
        <PhoneIcon />
        Talk to Experts
      </a> */}
    </div>
  );
}

// Mobile version — just Talk to Experts button
export function MobileNavActions({ onToggle, isOpen }) {
  return (
    <div className="lg:hidden flex items-center gap-2">
      {/* <a
        href="tel:+919211993861"
        className="px-3 py-1.5 bg-orange-500 text-white text-xs font-bold rounded-md flex items-center gap-1"
      >
        <PhoneIcon className="w-3.5 h-3.5" />
        Talk to Experts
      </a> */}
      <button
        className="p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
        onClick={onToggle}
        aria-label="Toggle menu"
      >
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </button>
    </div>
  );
}

// ─── Icon helpers ─────────────────────────────────────────────────────────────
function PhoneIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
