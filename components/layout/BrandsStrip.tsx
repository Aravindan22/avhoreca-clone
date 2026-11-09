const brands = [
  { name: "Pradeep", sub: "Channel Partner" },
  { name: "Aeonic", sub: "Auth. Dealer" },
  { name: "iBrew", sub: "Service Centre" },
  { name: "ISI · NSF", sub: "Certifications" },
  { name: "Since 2020", sub: "Established" },
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
