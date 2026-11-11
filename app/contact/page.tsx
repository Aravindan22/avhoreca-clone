import {
  WHATSAPP_URL,
  ADDRESS,
  PHONE_DISPLAY,
  PHONE_NUMBER,
  PHONE_LANDLINE,
  EMAIL,
  BUSINESS_NAME,
  BRAND_NAME,
  DEALERSHIP_TITLE,
  SOCIAL,
} from "@/lib/constants";

export default function ContactPage() {
  return (
    <div>
      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <div style={{ maxWidth: "700px" }}>
            <span className="section-label">Showroom &amp; Enquiry</span>
            <h1 className="section-title" style={{ textAlign: "left", marginBottom: "16px" }}>
              Contact {BUSINESS_NAME}
            </h1>
            <p style={{ fontSize: "17px", color: "var(--text-secondary)" }}>
              {DEALERSHIP_TITLE}. Visit our Meyyanur Salem showroom or contact us directly on WhatsApp or call for immediate quotes and product guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "52px" }}>
            {/* Contact channels */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                {
                  icon: "💬",
                  title: "WhatsApp (Fastest Response)",
                  value: `${PHONE_DISPLAY} (Click to Chat)`,
                  href: WHATSAPP_URL,
                  isExternal: true,
                },
                {
                  icon: "📞",
                  title: "Mobile Phone",
                  value: PHONE_DISPLAY,
                  href: `tel:${PHONE_NUMBER}`,
                  isExternal: false,
                },
                {
                  icon: "☎",
                  title: "Landline Phone",
                  value: PHONE_LANDLINE,
                  href: `tel:${PHONE_LANDLINE}`,
                  isExternal: false,
                },
                {
                  icon: "✉",
                  title: "Email Address",
                  value: EMAIL,
                  href: `mailto:${EMAIL}`,
                  isExternal: false,
                },
                {
                  icon: "📍",
                  title: "Showroom Address",
                  value: ADDRESS.full,
                  href: ADDRESS.mapsUrl,
                  isExternal: true,
                },
                {
                  icon: "🕒",
                  title: "Business Hours",
                  value: ADDRESS.hours,
                  href: null,
                  isExternal: false,
                },
                {
                  icon: "📸",
                  title: "Instagram",
                  value: "Watch Showroom Video Reel",
                  href: SOCIAL.instagram,
                  isExternal: true,
                },
              ].map((item) => (
                <div key={item.title} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "24px", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: "700", fontSize: "14px", color: "var(--ink)", marginBottom: "4px" }}>
                      {item.title}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.isExternal ? "_blank" : undefined}
                        rel={item.isExternal ? "noopener noreferrer" : undefined}
                        style={{ fontSize: "15px", color: "var(--ember)", fontWeight: "600" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: "15px", color: "var(--text-secondary)" }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Showroom card & Map box */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--r-lg)",
                  padding: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "14px",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "44px" }}>🏪</span>
                <div style={{ fontFamily: "Playfair Display, serif", fontSize: "20px", fontWeight: "700", color: "var(--ink)" }}>
                  {BRAND_NAME} Display Showroom
                </div>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", maxWidth: "340px" }}>
                  {ADDRESS.line1}, {ADDRESS.line2}
                </p>
                <a
                  href={ADDRESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Get Directions on Google Maps →
                </a>
              </div>

              <div
                style={{
                  background: "var(--ink)",
                  borderRadius: "var(--r-lg)",
                  padding: "30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div style={{ fontFamily: "Playfair Display, serif", fontSize: "20px", fontWeight: "700", color: "#fff" }}>
                  Start a New Kitchen or Upgrade?
                </div>
                <p style={{ fontSize: "14px", color: "#CBD5E1", lineHeight: "1.7" }}>
                  Tell us what commercial kitchen equipment, milk boilers, induction units, or cookware you need. We provide customized quotes within 30 minutes!
                </p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
                  WhatsApp for Quick Quotation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
