"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/images/dsk-logo.jpg";
import {
  WHATSAPP_URL,
  PHONE_DISPLAY,
  PHONE_NUMBER,
  BUSINESS_NAME,
  BRAND_NAME,
} from "@/lib/constants";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "HORECA Solutions",
    href: "/products",
    dropdown: [
      { label: "Commercial Kitchen Equipment", sub: "Heavy duty preparation & utility", href: "/products#commercial-kitchen" },
      { label: "Induction Cooking Systems", sub: "Commercial tabletop & bulk 3-phase", href: "/products#induction-cooking" },
      { label: "Milk Boilers & Water Boilers", sub: "Insulated PUF 5L to 30L", href: "/products#milk-water-boilers" },
      { label: "Tea & Coffee Brewing Equipment", sub: "South Indian filter & brewers", href: "/products#tea-coffee-brewing" },
      { label: "Stainless Steel Cookware & Hotpots", sub: "Pradeep NSF certified SS 304", href: "/products#cookware-hotpots" },
      { label: "Kitchen Infrastructure & Accessories", sub: "Modular storage, racks & buffet", href: "/products#infrastructure-accessories" },
      { label: "View Complete Catalogue →", sub: "Authentic Pradeep products & systems", href: "/products", isAll: true },
    ],
  },
  {
    label: "Coverage Areas",
    href: "/#coverage",
    dropdown: [
      { label: "Salem (Showroom & HQ)", sub: "Meyyanur Junction Main Road", href: "/contact" },
      { label: "Hosur & Krishnagiri", sub: "Authorized sales & delivery", href: "/#coverage" },
      { label: "Dharmapuri & Tirupathur", sub: "Authorized sales & delivery", href: "/#coverage" },
      { label: "Erode & Karur", sub: "Authorized sales & delivery", href: "/#coverage" },
      { label: "Namakkal & Kallakurichi", sub: "Authorized sales & delivery", href: "/#coverage" },
      { label: "Tiruchirappalli & Thanjavur", sub: "Authorized sales & delivery", href: "/#coverage" },
      { label: "Thiruvannamalai", sub: "Authorized sales & delivery", href: "/#coverage" },
    ],
  },
  { label: "About DSK", href: "/about" },
  { label: "Contact & Showroom", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        {/* Logo */}
        <Link href="/" className="nav-logo">
          <Image
            src={logoImg}
            alt={`${BRAND_NAME} - ${BUSINESS_NAME}`}
            width={52}
            height={52}
            className="logo-img"
            priority
          />
          <div className="logo-text-group">
            <span className="logo-brand">
              DSK <em>Kitchen</em>
            </span>
            <span className="logo-sub">Pradeep Authorised Dealer · Salem</span>
          </div>
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
            <span>{PHONE_DISPLAY}</span>
            <span className="nav-phone-loc">Meyyanur, Salem</span>
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
                Call: {PHONE_DISPLAY}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-wa mobile-btn">
                WhatsApp Us →
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
