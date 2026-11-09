const brandPartners = [
  {
    name: "PRADEEP",
    range: "Pots & Pans · Electrical · Buffet",
    badge: "Authorized Channel Partner",
  },
  {
    name: "AEONIC",
    range: "Induction Equipment · Bulk Systems",
    badge: "Authorized Dealer & Service",
  },
  {
    name: "iBREW",
    range: "Filter Coffee · Tea · Milk Boilers",
    badge: "Authorized Dealer & Service",
  },
];

export default function BrandPartners() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Authorized Partner for</span>
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
          All products 100% genuine.{" "}
          <strong>
            Warranty as per manufacturer policy — select products. Check before purchase.
          </strong>
        </p>
      </div>
    </section>
  );
}
