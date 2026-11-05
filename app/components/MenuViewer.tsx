"use client";

import Image from "next/image";
import { KeyboardEvent, TouchEvent, useState } from "react";
import { menuPages } from "../site-data";

export default function MenuViewer() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const page = menuPages[active];

  const move = (direction: number) => {
    setActive((value) => (value + direction + menuPages.length) % menuPages.length);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight") move(1);
    if (event.key === "Escape") setExpanded(false);
  };

  const onTouchStart = (event: TouchEvent) => setTouchStart(event.touches[0].clientX);
  const onTouchEnd = (event: TouchEvent) => {
    if (touchStart === null) return;
    const distance = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(distance) > 45) move(distance > 0 ? -1 : 1);
    setTouchStart(null);
  };

  return (
    <div className="menu-viewer" tabIndex={0} onKeyDown={onKeyDown} aria-label="KÝMARE menu viewer">
      <div className="menu-stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <p className="menu-side-label">The KÝMARE menu · New York</p>
        <button className="menu-image-button" type="button" onClick={() => setExpanded(true)} aria-label={`Enlarge menu page ${page.number}: ${page.label}`}>
          <Image key={page.src} className="menu-page-image" src={page.src} alt={`KÝMARE menu — ${page.label}`} width={1536} height={1024} sizes="(max-width: 800px) 92vw, 74vw" />
          <span className="expand-label">Expand <b aria-hidden="true">↗</b></span>
        </button>
        <div className="menu-page-title" aria-live="polite">
          <span>{page.number}</span>
          <strong>{page.label}</strong>
        </div>
        <button className="menu-arrow previous" type="button" onClick={() => move(-1)} aria-label="Previous menu page">←</button>
        <button className="menu-arrow next" type="button" onClick={() => move(1)} aria-label="Next menu page">→</button>
      </div>
      <div className="menu-tabs" role="tablist" aria-label="Menu pages">
        {menuPages.map((item, index) => (
          <button
            key={item.number}
            type="button"
            role="tab"
            aria-selected={index === active}
            onClick={() => setActive(index)}
          >
            <span>{item.number}</span><b>{item.label}</b>
          </button>
        ))}
      </div>
      {expanded && (
        <div className="lightbox menu-lightbox" role="dialog" aria-modal="true" aria-label={`${page.label} menu page`} onClick={() => setExpanded(false)}>
          <button className="lightbox-close" type="button" onClick={() => setExpanded(false)} aria-label="Close enlarged menu">Close ×</button>
          <Image src={page.src} alt={`Enlarged KÝMARE menu — ${page.label}`} width={1536} height={1024} onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
