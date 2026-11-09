import { WHATSAPP_URL, ADDRESS } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="section final-cta-section">
      <div className="container">
        <div className="final-cta-inner">
          <span className="section-label">Get in Touch Today</span>
          <h2 className="final-cta-title">Ready to Upgrade Your Kitchen?</h2>
          <p className="final-cta-desc">
            WhatsApp us now. Tell us your kitchen setup and what you need. We&apos;ll
            recommend the right equipment for you — same day. No obligation.
          </p>
          <div className="final-cta-buttons">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              WhatsApp for Free Quote
            </a>
            <a href="/contact" className="btn btn-outline btn-lg">
              Visit Our Showroom
            </a>
          </div>
          <p className="final-cta-address">
            {ADDRESS.line1}, {ADDRESS.line2} — Mon–Sat 10 AM to 6 PM
          </p>
        </div>
      </div>
    </section>
  );
}
