"use client";
import { useState, useEffect } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

const announcements = [
  {
    text: "Same-day delivery in Hyderabad for orders before 12 PM",
    highlight: "Same-day delivery",
  },
  {
    text: "Next-day delivery across AP & Telangana",
    highlight: "Next-day",
  },
  {
    text: "Get a quote in 30 minutes",
    highlight: null,
    isLink: true,
  },
];

export default function AnnouncementBar() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const item = announcements[current];

  return (
    <div className="announcement-bar">
      <div className="container">
        <div className="announcement-content">
          {item.isLink ? (
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="announcement-link">
              <span className="announcement-arrow">→</span>
              <strong>{item.text}</strong>
            </a>
          ) : (
            <span>
              {item.highlight ? (
                <>
                  <strong className="announcement-highlight">{item.highlight}</strong>
                  {" "}
                  {item.text.replace(item.highlight, "").trim()}
                </>
              ) : (
                item.text
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
