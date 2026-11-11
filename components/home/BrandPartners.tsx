const brandPartners = [
  {
    name: "PRADEEP STAINLESS KITCHEN",
    range: "Commercial Cookware · Hotpots · Food Prep · Infrastructure",
    badge: "Authorised Dealer",
  },
  {
    name: "COMMERCIAL INDUCTION",
    range: "Tabletop Woks · 3-Phase Bulk Cooking Cauldrons",
    badge: "High Energy Efficiency (85%+)",
  },
  {
    name: "BEVERAGE & BOILER SYSTEMS",
    range: "PUF Insulated Milk Boilers · South Indian Filter Brewers",
    badge: "Quality Guaranteed",
  },
];

export default function BrandPartners() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Authorised Partnership</span>
          <h2 className="section-title">Authentic Products Backed by Pradeep</h2>
          <p className="section-desc">
            DSK Enterprises is the official authorized dealer of Pradeep Commercial Kitchen and Beverage Equipment. Every item comes with direct manufacturer warranty and genuine documentation.
          </p>
        </div>
        <div className="brand-partners-row">
          {brandPartners.map((b) => (
            <div key={b.name} className="brand-partner-card">
              <div className="bp-name">{b.name}</div>
              <div className="bp-range">{b.range}</div>
              <div className="bp-badge">
                <span className="bp-check">✓</span> {b.badge}
              </div>
            </div>
          ))}
        </div>
        <p className="brand-disclaimer">
          100% genuine stainless steel equipment.{" "}
          <strong>
            Official warranty as per Pradeep manufacturer policy. Inspect in person at our Salem showroom.
          </strong>
        </p>
      </div>
    </section>
  );
}
