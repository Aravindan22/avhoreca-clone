const stats = [
  { num: "500+", label: "Restaurants & Hotels Served" },
  { num: "Genuine", label: "Authorized — Not Grey Market" },
  { num: "3 Brands", label: "Authorized Service Centre" },
  { num: "Same Day", label: "Delivery — Hyderabad" },
  { num: "Nagole", label: "Display Centre — See Before Buy" },
  { num: "Since 2020", label: "Established in Hyderabad" },
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="container">
        <div className="trust-bar-grid">
          {stats.map((s) => (
            <div key={s.label} className="trust-bar-item">
              <span className="trust-bar-num">{s.num}</span>
              <span className="trust-bar-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
