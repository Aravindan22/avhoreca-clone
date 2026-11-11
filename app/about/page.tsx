import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/images/dsk-logo.jpg";
import {
  WHATSAPP_URL,
  ADDRESS,
  PHONE_DISPLAY,
  PHONE_NUMBER,
  PHONE_LANDLINE,
  BUSINESS_NAME,
  BRAND_NAME,
  DEALERSHIP_TITLE,
  AUTHORIZED_DISTRICTS,
  CORE_OFFERINGS,
} from "@/lib/constants";

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <div style={{ maxWidth: "780px" }}>
            <span className="section-label">About {BUSINESS_NAME}</span>
            <h1 className="section-title" style={{ textAlign: "left", marginBottom: "18px" }}>
              Salem&apos;s Authorised Dealer for Pradeep Commercial Kitchen &amp; Beverage Equipment
            </h1>
            <p style={{ fontSize: "17px", color: "var(--text-secondary)", lineHeight: "1.75" }}>
              Greetings from <strong>{BUSINESS_NAME} ({BRAND_NAME})</strong>! We are the official Authorised Dealer of Pradeep Stainless Kitchen in Salem, dedicated to providing complete HORECA commercial kitchen solutions, energy-saving induction systems, insulated boilers, and heavy-duty cookware across 12 authorized districts in Tamil Nadu.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Showroom Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <span className="section-label">Our Mission</span>
              <h2 className="section-title" style={{ textAlign: "left", marginBottom: "20px" }}>
                Quality Products. Expert Guidance. No Compromise.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "15px", color: "var(--text-secondary)", lineHeight: "1.75" }}>
                <p>
                  At {BUSINESS_NAME}, we understand that running a commercial kitchen — whether a high-speed café, fine-dining restaurant, cloud kitchen, or massive wedding hall — requires equipment that performs flawlessly 365 days a year.
                </p>
                <p>
                  As an authorised partner for Pradeep Stainless Kitchen, every piece of cookware, hotpot, induction cauldron, and milk boiler we supply is 100% genuine, food-grade SS 304, and backed by manufacturer warranty.
                </p>
                <p>
                  Our physical display showroom on <strong>Junction Main Road, Meyyanur, Salem</strong> welcomes food service entrepreneurs and executive chefs to inspect, test, and consult before purchasing.
                </p>
              </div>
            </div>

            <div style={{ background: "var(--surface-0)", border: "1px solid var(--border)", borderRadius: "var(--r-lg)", padding: "32px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <Image
                  src={logoImg}
                  alt={BRAND_NAME}
                  width={64}
                  height={64}
                  style={{ borderRadius: "8px", objectFit: "contain" }}
                />
                <div>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "20px", fontWeight: "700", color: "var(--ink)" }}>
                    {BUSINESS_NAME}
                  </h3>
                  <p style={{ fontSize: "12px", color: "var(--ember)", fontWeight: "600" }}>
                    {DEALERSHIP_TITLE}
                  </p>
                </div>
              </div>

              <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "16px" }}>
                <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--ink)", marginBottom: "10px" }}>
                  What We Offer:
                </h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", color: "var(--text-secondary)" }}>
                  {CORE_OFFERINGS.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ color: "var(--ember)", fontWeight: "800" }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "16px", fontSize: "13px", color: "var(--text-muted)" }}>
                📍 Ground floor, 116/28/3, Junction Main Road, Meyyanur, Salem – 636004
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authorized Districts Strip */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Territory Coverage</span>
            <h2 className="section-title">Authorised Dealer for 12 Tamil Nadu Districts</h2>
            <p className="section-desc">
              We provide equipment delivery, product demonstrations, and technical support across these designated regions:
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {AUTHORIZED_DISTRICTS.map((d) => (
              <div key={d.name} style={{ background: "var(--surface-0)", border: "1px solid var(--border)", borderRadius: "var(--r-md)", padding: "16px", textAlign: "center" }}>
                <div style={{ fontWeight: "700", fontSize: "15px", color: "var(--ink)" }}>{d.name}</div>
                <div style={{ fontSize: "11px", color: "var(--ember)", marginTop: "4px" }}>{d.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">Showroom Visit</span>
          <h2 className="section-title">Visit {BRAND_NAME} in Salem</h2>
          <p className="section-desc" style={{ marginBottom: "36px" }}>
            {ADDRESS.full}<br />{ADDRESS.hours}
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg">
              WhatsApp: {PHONE_DISPLAY}
            </a>
            <a href={`tel:${PHONE_NUMBER}`} className="btn btn-ghost-dark btn-lg">
              Call Showroom: {PHONE_LANDLINE}
            </a>
            <Link href="/contact" className="btn btn-outline btn-lg">
              Get Directions &amp; Contact →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
