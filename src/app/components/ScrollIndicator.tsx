// components/ScrollIndicator.tsx
"use client";
import { useEffect, useState } from "react";

const sections = ["hero", "about", "projects"]; // les IDs des sections

export const ScrollIndicator = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sections.indexOf(entry.target.id);
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-40 top-96 -translate-y-1/2 flex flex-col gap-6 z-50">
      {sections.map((id, index) => (
        <button
            key={index}
            onClick={() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          className={`w-12 h-12 border-4 border-primary ${
            index === activeIndex ? "bg-primary rounded-2xl" : "bg-transparent"
          } transition-all`}
        />
      ))}
    </div>
  );
};
