import { WHATSAPP_URL, ADDRESS, PHONE_DISPLAY, PHONE_NUMBER, EMAIL } from "@/lib/constants";

const usps = [
  {
    icon: "🛡️",
    title: "Authorized Dealer — 100% Genuine Products",
    desc: "Zero grey market, zero fake products. Every item we sell comes with manufacturer documentation and warranty.",
  },
  {
    icon: "🔧",
    title: "Authorized Service Centre — We Don't Disappear After Sale",
    desc: "Certified technicians and genuine spare parts. We service what we sell.",
  },
  {
    icon: "👁️",
    title: "See It Before You Buy",
    desc: "500+ products on display at our Nagole showroom. Touch, test, and inspect before you commit.",
  },
  {
    icon: "🚚",
    title: "Same-Day Delivery in Hyderabad",
    desc: "Order before noon — delivered the same day within Hyderabad. Next-day across AP & Telangana.",
  },
  {
    icon: "💡",
    title: "Expert Guidance — Not Just Sales",
    desc: "We recommend the right equipment for your kitchen, not the most expensive one.",
  },
];

const cities = [
  { name: "Hyderabad", note: "Same-day delivery" },
  { name: "Vijayawada", note: "AP Coverage" },
  { name: "Visakhapatnam", note: "AP Coverage" },
  { name: "Warangal", note: "Telangana" },
  { name: "Tirupati", note: "AP Coverage" },
  { name: "Karimnagar", note: "Telangana" },
];

export default function WhyChooseUs() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">More Than Just a Shop</h2>
          <p className="section-desc">
            Since 2020, across 500+ customers, every product we sold has been genuine.
            Every customer got exactly what they ordered. That is our reputation and we guard it.
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
            {/* Coverage */}
            <div className="why-info-card">
              <h4 className="why-card-title">📍 Coverage Area</h4>
              <div className="cities-grid">
                {cities.map((c) => (
                  <div key={c.name} className="city-item">
                    <span className="city-name">{c.name}</span>
                    <span className="city-note">{c.note}</span>
                  </div>
                ))}
              </div>
              <p className="pan-india-note">Pan-India shipping available on request</p>
            </div>

            {/* Display Centre */}
            <div className="why-info-card">
              <h4 className="why-card-title">🏪 Display Centre</h4>
              <address className="why-address">
                <p>{ADDRESS.full}</p>
                <p className="why-hours">{ADDRESS.hours}</p>
              </address>
              <a href={ADDRESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="why-maps-link">
                Get Directions on Google Maps →
              </a>
            </div>

            {/* Contact */}
            <div className="why-info-card">
              <h4 className="why-card-title">📞 Quick Contact</h4>
              <div className="why-contacts">
                <a href={`tel:${PHONE_NUMBER}`} className="why-contact-link">{PHONE_DISPLAY}</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="why-contact-link why-wa">
                  💬 WhatsApp Us Now
                </a>
                <a href={`mailto:${EMAIL}`} className="why-contact-link">{EMAIL}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
