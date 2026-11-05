import Image from "next/image";
import Header from "./components/Header";
import InteriorGallery from "./components/InteriorGallery";
import MenuViewer from "./components/MenuViewer";
import Reveal from "./components/Reveal";
import { navigation, siteConfig } from "./site-data";

const culinaryNotes = [
  ["Raw Bar", "Oysters, crudo, caviar and shellfish, served with a distinctly Aegean point of view."],
  ["From the Sea", "Whole Mediterranean fish selected at the counter and presented tableside."],
  ["From the Fire", "Lamb, prime cuts and Greek cooking shaped by charcoal and flame."],
  ["Greek Classics", "Heritage recipes interpreted with modern restraint and made for the table."],
];

function ArrowLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return <a className={`arrow-link ${light ? "light" : ""}`} href={href}><span>{children}</span><b aria-hidden="true">↗</b></a>;
}

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero" id="home" aria-label="KÝMARE introduction">
        <Image className="hero-image" src="/pictures/interiors/olive-tree-room-enhanced.jpg" alt="Candlelit dining room at KÝMARE centered around an old olive tree" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Greek cuisine · New York</p>
          <h1><span>The Aegean,</span><em>after dark.</em></h1>
          <p className="hero-copy">Pristine seafood, charcoal fire and the generous spirit of Greece—set against the pulse of Manhattan.</p>
          <div className="hero-actions">
            <ArrowLink href="#menu" light>Explore the menu</ArrowLink>
            <ArrowLink href={siteConfig.reservationUrl} light>Reserve a table</ArrowLink>
          </div>
        </div>
        <div className="hero-bottom">
          <span>Thursday — Saturday</span>
          <i />
          <span>KÝMARE After Dark</span>
        </div>
        <span className="scroll-cue" aria-hidden="true">Scroll</span>
      </section>

      <section className="intro section-pad" aria-labelledby="intro-title">
        <div className="vertical-note">Athens <span>→</span> New York</div>
        <Reveal className="intro-images">
          <div className="intro-image-main">
            <Image src="/pictures/interiors/arrival-enhanced.jpg" alt="The sculptural KÝMARE arrival and host stand" fill sizes="(max-width: 760px) 78vw, 42vw" />
          </div>
          <div className="intro-image-detail">
            <Image src="/pictures/interiors/banquette-enhanced.jpg" alt="An intimate candlelit banquette" fill sizes="(max-width: 760px) 52vw, 22vw" />
          </div>
          <span className="image-index">01 / The arrival</span>
        </Reveal>
        <Reveal className="intro-copy">
          <p className="eyebrow dark">Dinner <span>→</span> After Dark</p>
          <h2 id="intro-title">A new Greek ritual<br /><em>in New York.</em></h2>
          <p>KÝMARE brings the poise of the Aegean to Manhattan through pristine seafood, charcoal fire, Greek hospitality and a dining room that changes character as the night unfolds.</p>
          <ArrowLink href="#dining">Discover KÝMARE</ArrowLink>
        </Reveal>
      </section>

      <section className="cuisine" id="dining" aria-labelledby="table-title">
        <div className="cuisine-image-wrap">
          <Image className="cuisine-image" src="/pictures/interiors/open-kitchen-enhanced.jpg" alt="Seafood display and live charcoal kitchen at KÝMARE" fill sizes="100vw" />
          <p className="photo-caption">Selected whole · Grilled over charcoal · Served for the table</p>
        </div>
        <div className="cuisine-heading section-pad">
          <Reveal>
            <p className="eyebrow">The cuisine</p>
            <h2 id="table-title">The table</h2>
          </Reveal>
          <Reveal className="cuisine-intro">
            <p>Mediterranean seafood, whole fish, charcoal-grilled meats, Greek classics and seasonal vegetables—dishes that arrive generously and invite the table to share.</p>
          </Reveal>
        </div>
        <div className="culinary-notes section-pad">
          {culinaryNotes.map(([title, copy], index) => (
            <Reveal className="culinary-note" key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="menu-section section-pad" id="menu" aria-labelledby="menu-title">
        <Reveal className="menu-heading">
          <div><p className="eyebrow">Dinner &amp; drinks</p><h2 id="menu-title">The menu</h2></div>
          <p>A journey from the raw bar to the fire, followed by cocktails and bottles for the hours after dinner.</p>
        </Reveal>
        <MenuViewer />
      </section>

      <section className="after-dark" id="after-dark" aria-labelledby="after-dark-title">
        <Image className="after-dark-image" src="/pictures/interiors/after-dark-enhanced.jpg" alt="Live Greek musicians and guests celebrating at KÝMARE After Dark" fill sizes="100vw" />
        <div className="after-dark-overlay" />
        <div className="after-dark-content section-pad">
          <Reveal className="after-dark-heading">
            <p className="eyebrow">Thursday · Friday · Saturday</p>
            <h2 id="after-dark-title"><span>KÝMARE</span>After Dark</h2>
          </Reveal>
          <Reveal className="after-dark-copy">
            <p>Dinner gives way to live Greek energy, music and celebration—a room that changes as the night moves forward.</p>
            <p>Live voices and bouzouki set the rhythm. Flowers fill the air, tables gather, and controlled moments of plate-breaking theater punctuate evenings of premium bottle service.</p>
          </Reveal>
          <div className="night-timeline">
            <div><span>01</span><strong>Dinner</strong><time>6:00 PM</time></div>
            <div><span>02</span><strong>The room awakens</strong><time>10:30 PM</time></div>
            <div><span>03</span><strong>After Dark</strong><time>11:00 PM — Late</time></div>
          </div>
          <p className="night-statement">Athens after midnight.<br /><em>Manhattan until late.</em></p>
        </div>
      </section>

      <section className="gallery-section section-pad" id="gallery" aria-labelledby="gallery-title">
        <Reveal className="gallery-heading">
          <p className="eyebrow dark">Inside KÝMARE</p>
          <h2 id="gallery-title">A room for<br /><em>every hour.</em></h2>
          <p>Warm stone, aged olive trees, marble and fire. An interior composed to move from quiet dinner to celebration.</p>
        </Reveal>
        <InteriorGallery />
      </section>

      <section className="bar-section" aria-labelledby="bar-title">
        <div className="bar-image"><Image src="/pictures/interiors/bar-enhanced.jpg" alt="The illuminated stone bar at KÝMARE" fill sizes="(max-width: 800px) 100vw, 58vw" /></div>
        <Reveal className="bar-copy">
          <p className="eyebrow">From Santorini to Manhattan</p>
          <h2 id="bar-title">The bar</h2>
          <p>Greek spirits, rare Assyrtiko, Champagne, martinis and cocktails built for long dinners and later nights.</p>
          <ul><li>Greek wines</li><li>Champagne</li><li>Signature cocktails</li><li>Ouzo · Tsipouro · Mastiha</li><li>Premium spirits</li></ul>
          <ArrowLink href="#menu" light>Explore the drinks</ArrowLink>
        </Reveal>
      </section>

      <section className="private-section section-pad" aria-labelledby="private-title">
        <Reveal className="private-copy">
          <p className="eyebrow dark">Gather differently</p>
          <h2 id="private-title">Private dining<br /><em>&amp; celebrations</em></h2>
          <p>Private dinners, birthdays, engagements and corporate evenings, tailored around KÝMARE’s dining and After Dark experience.</p>
          <ArrowLink href={siteConfig.eventEmail}>Plan an event</ArrowLink>
        </Reveal>
        <Reveal className="private-image">
          <Image src="/pictures/interiors/private-dining-enhanced.jpg" alt="Private dining table set for a candlelit celebration" fill sizes="(max-width: 760px) 92vw, 51vw" />
          <span>Private Dining · New York</span>
        </Reveal>
      </section>

      <section className="reservation-section" id="reservations" aria-labelledby="reservation-title">
        <Image src="/pictures/interiors/lounge-enhanced.jpg" alt="Candlelit lounge seating at KÝMARE" fill sizes="100vw" />
        <div className="reservation-overlay" />
        <Reveal className="reservation-content">
          <Image src="/pictures/logo_icon.png" alt="" width={1254} height={1254} />
          <p className="eyebrow">An evening at KÝMARE</p>
          <h2 id="reservation-title">Your table<br /><em>is waiting.</em></h2>
          <p>Dinner seven nights.<br />KÝMARE After Dark Thursday through Saturday.</p>
          <a className="outline-button" href={siteConfig.reservationUrl}>Reserve at KÝMARE <span aria-hidden="true">↗</span></a>
        </Reveal>
      </section>

      <section className="contact-section section-pad" aria-label="Location and hours">
        <div className="contact-title"><p className="eyebrow">Find us</p><h2>New York<br /><em>City</em></h2></div>
        <div className="contact-column"><span>Location</span><p>{siteConfig.address}</p><p>{siteConfig.phone}</p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
        <div className="contact-column"><span>Dinner</span>{siteConfig.hours.map((row) => <p key={row.label}>{row.label}<b>{row.value}</b></p>)}</div>
        <div className="contact-column"><span>After Dark</span><p>{siteConfig.afterDarkHours}</p><ArrowLink href={siteConfig.reservationUrl}>Reservations</ArrowLink></div>
      </section>

      <footer className="footer section-pad">
        <div className="footer-wordmark" aria-hidden="true">KÝMARE</div>
        <div className="footer-top">
          <Image src="/pictures/logo.png" alt="KÝMARE Greek Cuisine NYC" width={1774} height={887} />
          <nav aria-label="Footer navigation">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
          <div><span>Follow</span><a href={siteConfig.instagram}>Instagram ↗</a><a href={`mailto:${siteConfig.email}`}>Contact ↗</a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} KÝMARE NYC</span><span>Greek cuisine · New York City</span><a href="#home">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
