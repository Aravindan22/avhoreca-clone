import { testimonials } from "@/data/testimonials";
import { GOOGLE_REVIEWS_URL } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Customer Reviews</span>
          <h2 className="section-title">
            Trusted by <em>Restaurants Across India</em>
          </h2>
          <p className="section-desc">
            Real feedback from restaurant owners, hotel managers and cloud kitchen
            operators who rely on us every day.
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <span className="testimonial-quote-mark">&ldquo;</span>
              <p className="testimonial-text">{t.review}</p>
              <div className="testimonial-author">
                <div className={`testimonial-avatar avatar-${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-biz">{t.business}</div>
                  <div className="testimonial-loc">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonials-cta">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            See All Reviews on Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
