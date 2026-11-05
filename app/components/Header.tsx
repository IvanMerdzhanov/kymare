"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navigation, siteConfig } from "../site-data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="header-logo" href="#home" aria-label="KÝMARE home">
        <Image src="/pictures/logo.png" alt="KÝMARE" width={1774} height={887} priority />
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.slice(0, 5).map((item) => (
          <a href={item.href} key={item.href}>{item.label}</a>
        ))}
      </nav>
      <a className="reserve-link" href={siteConfig.reservationUrl}>Reserve <span aria-hidden="true">↗</span></a>
      <button
        className={`menu-toggle ${open ? "is-open" : ""}`}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span />
      </button>
      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <Image className="mobile-menu-mark" src="/pictures/logo_icon.png" alt="" width={1254} height={1254} />
        <nav aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{item.label}
            </a>
          ))}
        </nav>
        <p>Greek cuisine · New York City</p>
      </div>
    </header>
  );
}
