import Link from "next/link";
import { WHATSAPP_URL, ADDRESS, BUSINESS_NAME, BRAND_NAME } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="section final-cta-section">
      <div className="container">
        <div className="final-cta-inner">
          <span className="section-label">Connect with Us Today</span>
          <h2 className="final-cta-title">Upgrade Your Commercial Kitchen with {BUSINESS_NAME}</h2>
          <p className="final-cta-desc">
            Greetings from {BRAND_NAME}! We look forward to serving your food service establishment with authentic Pradeep products, induction cooking systems, and expert guidance.
          </p>
          <div className="final-cta-buttons">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              WhatsApp for Quick Quotation
            </a>
            <Link href="/contact" className="btn btn-outline btn-lg" style={{borderColor: '#CBD5E1', color: '#fff'}}>
              Visit Our Salem Showroom
            </Link>
          </div>
          <p className="final-cta-address">
            📍 {ADDRESS.line1}, {ADDRESS.line2}
          </p>
        </div>
      </div>
    </section>
  );
}
