import { useState, useRef, useEffect } from "react";
import { NAV_DATA } from "../../data/navData";
import Logo from "./Logo";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import NavActions, { MobileNavActions } from "./NavActions";
import SimpleDropdown from "./Simpledropdown";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hover handlers with small delay so menu doesn't flicker
  const handleEnter = (label) => {
    clearTimeout(closeTimer.current);
    setActiveNav(label);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setActiveNav(null), 120);
  };

  const activeItem = NAV_DATA.find((n) => n.label === activeNav);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-17 gap-6">
          {/* Logo */}
          <Logo />

          {/* Desktop nav items */}
          <nav className="hidden lg:flex items-stretch h-full flex-1">
            {NAV_DATA.map((item) => (
              <div
                key={item.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => handleEnter(item.label)}
                onMouseLeave={handleLeave}
              >
                <button
                  className={`flex items-center gap-1 px-3.5 h-full text-[14px] font-semibold transition-colors whitespace-nowrap ${
                    activeNav === item.label
                      ? "text-[var(--primary)]"
                      : "text-[var(--secondary)] hover:text-[var(--primary)] "
                  }`}
                >
                  {item.label}
                  <svg
                    className={`w-3 h-3 mt-0.5 transition-transform duration-150 ${
                      activeNav === item.label
                        ? "rotate-180 text-[var(--primary)]"
                        : "text-gray-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </nav>

          {/* Desktop right actions */}
          {/* <NavActions /> */}

          {/* Mobile hamburger + CTA */}
          <MobileNavActions
            isOpen={mobileOpen}
            onToggle={() => setMobileOpen((v) => !v)}
          />
        </div>
      </div>

      {/* Desktop mega menu — rendered inside header so it inherits z-index */}
      {/* {activeItem && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-full"
          onMouseEnter={() => handleEnter(activeItem.label)}
          onMouseLeave={handleLeave}
        >
          <MegaMenu navItem={activeItem} onClose={() => setActiveNav(null)} />
        </div>
      )} */}
      {activeItem && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-full"
          onMouseEnter={() => handleEnter(activeItem.label)}
          onMouseLeave={handleLeave}
        >
          {activeItem.useSimpleDropdown ? (
            <SimpleDropdown
              navItem={activeItem}
              onClose={() => setActiveNav(null)}
            />
          ) : (
            <MegaMenu navItem={activeItem} onClose={() => setActiveNav(null)} />
          )}
        </div>
      )}

      {/* Mobile sliding menu */}
      {mobileOpen && (
        <MobileMenu navData={NAV_DATA} onClose={() => setMobileOpen(false)} />
      )}
    </header>
  );
}
