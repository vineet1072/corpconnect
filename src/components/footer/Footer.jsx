import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f1c2e] to-[#1b2b40] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white p-2 rounded-md">
                <img
                  src="./images/logo.png"
                  alt="CorpConnect Logo"
                  className="h-auto w-36"
                />
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-400">
              Professional business solutions for startups, enterprises, and
              entrepreneurs. We help you navigate the complex world of business
              registration, compliance, and growth.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[var(--primary)] cursor-pointer transition">
                Buy/Sell Business
              </li>
              <li className="hover:text-[var(--primary)] cursor-pointer transition">
                Trademark Registration
              </li>
              <li className="hover:text-[var(--primary)] cursor-pointer transition">
                Startup Registration
              </li>
              <li className="hover:text-[var(--primary)] cursor-pointer transition">
                Registration & Licenses
              </li>
              <li className="hover:text-[var(--primary)] cursor-pointer transition">
                Compliance & Filing
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[var(--primary)] cursor-pointer transition">
                Company Registration
              </li>
              <li className="hover:text-[var(--primary)] cursor-pointer transition">
                GST Registration
              </li>
              <li className="hover:text-[var(--primary)] cursor-pointer transition">
                Trademark & IP Services
              </li>
              <li className="hover:text-[var(--primary)] cursor-pointer transition">
                Business Consulting
              </li>
              <li className="hover:text-[var(--primary)] cursor-pointer transition">
                Compliance Management
              </li>
              <li className="hover:text-[var(--primary)] cursor-pointer transition">
                Tax Filing Services
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[var(--secondary)]" />
                info@corpconnect.in
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[var(--secondary)]" />
                corpconnect.biz@gmail.com
              </li>

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[var(--secondary)]" />
                +91 97734 89722
              </li>

              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[var(--secondary)]" />
                India
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          © 2026 CorpConnect Business Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
