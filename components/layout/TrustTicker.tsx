const tickerItems = [
  "Authorized Pradeep Channel Partner",
  "iBrew Authorized Dealer",
  "Aeonic Authorized Dealer",
  "Display Centre — Nagole Hyderabad",
  "Same-Day Delivery in Hyderabad",
  "500+ Restaurants & Hotels Served",
  "ISI · NSF · CE · SAA Certified",
];

export default function TrustTicker() {
  const items = [...tickerItems, ...tickerItems]; // duplicate for seamless loop
  return (
    <div className="trust-ticker">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
