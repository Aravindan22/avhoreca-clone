import { industries } from "@/data/industries";

export default function WhoWeServe() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Who We Serve</span>
          <h2 className="section-title">Built for Every Food Service Business</h2>
          <p className="section-desc">
            From a small tea stall to a 5-star hotel — we have the right equipment for your kitchen.
          </p>
        </div>
        <div className="serve-grid">
          {industries.map((ind) => (
            <div key={ind.id} className="serve-card">
              <div className="serve-icon">{ind.emoji}</div>
              <span className="serve-label">{ind.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
