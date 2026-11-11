const tickerItems = [
  "DSK Enterprises — DSK Kitchen Solutions",
  "Authorised Dealer of Pradeep Stainless Kitchen",
  "Commercial Kitchen Equipment",
  "Induction Cooking Systems",
  "Insulated Milk & Water Boilers",
  "Tea & Coffee Brewing Equipment",
  "Salem Showroom: Meyyanur Junction Main Road",
  "Serving 12 Districts across Tamil Nadu",
  "100% Genuine Manufacturer Warranties",
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
