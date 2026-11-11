import {
  WHATSAPP_URL,
  ADDRESS,
  PHONE_DISPLAY,
  PHONE_NUMBER,
  PHONE_LANDLINE,
  EMAIL,
  AUTHORIZED_DISTRICTS,
  BUSINESS_NAME,
} from "@/lib/constants";

const usps = [
  {
    icon: "🛡️",
    title: "Official Authorised Dealer — Pradeep Stainless Kitchen",
    desc: "100% genuine products with manufacturer-backed warranties. Zero grey market or unbranded materials.",
  },
  {
    icon: "🏪",
    title: "Meyyanur, Salem Showroom — See It Before You Buy",
    desc: "Visit our display center in Salem to touch, inspect, and test cookware, boilers, and induction units in person.",
  },
  {
    icon: "📍",
    title: "Authorized Dealer for 12 Tamil Nadu Districts",
    desc: "Official dealership territory across Salem, Hosur, Dharmapuri, Erode, Karur, Namakkal, Trichy, Thanjavur, and more.",
  },
  {
    icon: "⚡",
    title: "Complete End-to-End HORECA Solutions",
    desc: "From NSF SS 304 triply cookware to 3-phase commercial induction cauldrons and automated tea/coffee brewing systems.",
  },
  {
    icon: "🤝",
    title: "Tailored Guidance for New Setups & Upgrades",
    desc: "Whether launching a new restaurant or upgrading an existing setup, we recommend the exact equipment size you need.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section section-alt" id="coverage">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Why Choose {BUSINESS_NAME}</span>
          <h2 className="section-title">Your Trusted HORECA Partner in Tamil Nadu</h2>
          <p className="section-desc">
            We bridge commercial kitchens with genuine Pradeep stainless equipment, local availability in Salem, and dedicated support across 12 authorized districts.
          </p>
        </div>

        <div className="why-grid">
          {/* Left — USPs */}
          <div className="why-usps">
            {usps.map((u) => (
              <div key={u.title} className="why-usp">
                <div className="why-ic">{u.icon}</div>
                <div>
                  <h4 className="why-usp-title">{u.title}</h4>
                  <p className="why-usp-desc">{u.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Info cards */}
          <div className="why-cards">
            {/* Coverage: 12 Districts */}
            <div className="why-info-card">
              <h4 className="why-card-title">📍 Authorized Dealership Coverage (12 Districts)</h4>
              <div className="cities-grid">
                {AUTHORIZED_DISTRICTS.map((c) => (
                  <div key={c.name} className="city-item">
                    <span className="city-name">{c.name}</span>
                    <span className="city-note">{c.note}</span>
                  </div>
                ))}
              </div>
              <p className="pan-india-note">Direct dispatch from our Salem showroom across Tamil Nadu</p>
            </div>

            {/* Display Centre */}
            <div className="why-info-card">
              <h4 className="why-card-title">🏪 Salem Display Showroom</h4>
              <address className="why-address">
                <p><strong>{ADDRESS.line1}</strong></p>
                <p>{ADDRESS.line2}</p>
                <p className="why-hours">🕒 {ADDRESS.hours}</p>
              </address>
              <a href={ADDRESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="why-maps-link">
                Open in Google Maps →
              </a>
            </div>

            {/* Contact */}
            <div className="why-info-card">
              <h4 className="why-card-title">📞 Connect Directly with DSK</h4>
              <div className="why-contacts">
                <a href={`tel:${PHONE_NUMBER}`} className="why-contact-link">
                  📞 Mobile: {PHONE_DISPLAY}
                </a>
                <a href={`tel:${PHONE_LANDLINE}`} className="why-contact-link">
                  ☎ Phone: {PHONE_LANDLINE}
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="why-contact-link why-wa">
                  💬 WhatsApp Us Now
                </a>
                <a href={`mailto:${EMAIL}`} className="why-contact-link">
                  ✉ {EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
