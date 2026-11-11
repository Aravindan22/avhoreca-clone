const brands = [
  { name: "Pradeep Stainless", sub: "Authorised Dealer" },
  { name: "DSK Kitchen Solutions", sub: "Salem Showroom" },
  { name: "12 TN Districts", sub: "Authorized Reach" },
  { name: "SS 304 Food Grade", sub: "NSF Certified" },
  { name: "HORECA Specialists", sub: "New & Upgrade Setups" },
];

export default function BrandsStrip() {
  return (
    <div className="brands-strip">
      <div className="container">
        <div className="brands-row">
          {brands.map((b, i) => (
            <div key={i} className="brand-item">
              <span className="brand-name">{b.name}</span>
              <span className="brand-sub">{b.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
