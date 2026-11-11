const stats = [
  { num: "Pradeep", label: "Authorised Dealer" },
  { num: "12 Districts", label: "Authorized TN Coverage" },
  { num: "Salem", label: "Meyyanur Showroom" },
  { num: "SS 304", label: "NSF Certified Food Grade" },
  { num: "Quick Dispatch", label: "Direct from Showroom" },
  { num: "HORECA", label: "New & Upgrade Setups" },
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
