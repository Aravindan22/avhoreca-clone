"use client";
import { useState } from "react";
import Link from "next/link";
import { WHATSAPP_URL, PHONE_DISPLAY, PHONE_NUMBER } from "@/lib/constants";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    dropdown: [
      { label: "Tea · Coffee · Milk Boilers", sub: "iBrew · Pradeep", href: "/products#tea-coffee" },
      { label: "Table Top Electrical", sub: "Fryers · Steamers", href: "/products#electrical" },
      { label: "Food & Beverage Equipment", sub: "Snacks · Cooking · Beverage", href: "/products#food-bev" },
      { label: "Table Top Induction", sub: "Aeonic", href: "/products#induction" },
      { label: "Bulk Induction Equipment", sub: "3-Phase · Hotels · Institutions", href: "/products#bulk-induction" },
      { label: "Pots & Pans", sub: "NSF Certified", href: "/products#pots-pans" },
      { label: "Copper Serveware", sub: "Premium", href: "/products#copper" },
      { label: "Buffet Products", sub: "Chafers · Urns", href: "/products#buffet" },
      { label: "View All Products →", sub: "80+ products across 8 categories", href: "/products", isAll: true },
    ],
  },
  {
    label: "Industries",
    href: "/products",
    dropdown: [
      { label: "For Restaurants", sub: "Cafés · QSRs · Full-service", href: "/products" },
      { label: "For Cloud Kitchens", sub: "Space-optimised setups", href: "/products" },
      { label: "For Hotels", sub: "Bulk induction · Banquet", href: "/products" },
    ],
  },
  { label: "Resources", href: "/resources" },
  { label: "Service", href: "/service" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        {/* Logo */}
        <Link href="/" className="nav-logo">
          <span className="logo-icon">🍳</span>
          <span className="logo-text">AV Horeca</span>
        </Link>

        {/* Desktop nav */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="nav-item"
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link href={link.href} className="nav-link">
                {link.label}
                {link.dropdown && <span className="nav-caret">▾</span>}
              </Link>
              {link.dropdown && openDropdown === link.label && (
                <div className="dropdown-menu">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`dropdown-item ${"isAll" in item && item.isAll ? "dropdown-item-all" : ""}`}
                    >
                      <span className="dropdown-label">{item.label}</span>
                      <span className="dropdown-sub">{item.sub}</span>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Nav actions */}
        <div className="nav-actions">
          <a href={`tel:${PHONE_NUMBER}`} className="nav-phone">
            {PHONE_DISPLAY}
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta">
            Get Quote →
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-inner">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="mobile-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="mobile-submenu">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="mobile-sublink"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mobile-actions">
              <a href={`tel:${PHONE_NUMBER}`} className="btn btn-outline mobile-btn">
                Call Us
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-wa mobile-btn">
                WhatsApp →
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
