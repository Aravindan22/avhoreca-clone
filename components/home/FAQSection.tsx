"use client";
import { useState } from "react";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Frequently Asked</span>
          <h2 className="section-title">Questions We Get Every Day</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`faq-item ${openId === faq.id ? "faq-open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                aria-expanded={openId === faq.id}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openId === faq.id ? "−" : "+"}</span>
              </button>
              {openId === faq.id && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
