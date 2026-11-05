export const RESERVATION_URL = "#reservations";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: "KÝMARE",
  location: "New York City",
  address: "27 West 20th Street · New York, NY 10011",
  phone: "+1 212 555 0196",
  email: "reservations@kymare-nyc.com",
  instagram: "#",
  reservationUrl: RESERVATION_URL,
  eventEmail: "mailto:events@kymare-nyc.com?subject=Private%20Dining%20at%20K%C3%9DMARE",
  hours: [
    { label: "Sun — Wed", value: "5 PM — 11 PM" },
    { label: "Thursday", value: "5 PM — Late" },
    { label: "Fri — Sat", value: "5 PM — Late" },
  ],
  afterDarkHours: "Thu — Sat · 10:30 PM — Late",
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Dining", href: "#dining" },
  { label: "Menu", href: "#menu" },
  { label: "After Dark", href: "#after-dark" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reservations", href: "#reservations" },
];

export const menuPages = [
  { number: "01", label: "Raw Bar & Meze", src: "/pictures/menu/page1.jpg" },
  { number: "02", label: "Starters & Salads", src: "/pictures/menu/page2.jpg" },
  { number: "03", label: "From the Sea", src: "/pictures/menu/page3.jpg" },
  { number: "04", label: "From the Fire", src: "/pictures/menu/page4.jpg" },
  { number: "05", label: "Greek Classics", src: "/pictures/menu/page5.jpg" },
  { number: "06", label: "Dessert", src: "/pictures/menu/page6.jpg" },
  { number: "07", label: "Cocktails", src: "/pictures/menu/page7.png" },
  { number: "08", label: "Wines & Spirits", src: "/pictures/menu/page8.png" },
  { number: "09", label: "After Dark", src: "/pictures/menu/page9.png" },
];

export const galleryImages = [
  { src: "/pictures/interiors/olive-tree-room-enhanced.jpg", alt: "KÝMARE dining room centered around an illuminated olive tree", caption: "The Dining Room" },
  { src: "/pictures/interiors/bar-enhanced.jpg", alt: "Backlit marble bar at KÝMARE", caption: "The Bar" },
  { src: "/pictures/interiors/hallway-enhanced.jpg", alt: "Sculptural arched corridor with warm lighting", caption: "The Passage" },
  { src: "/pictures/interiors/open-kitchen-enhanced.jpg", alt: "Open charcoal kitchen and seafood counter", caption: "The Fire" },
  { src: "/pictures/interiors/private-dining-enhanced.jpg", alt: "Intimate private dining table at KÝMARE", caption: "Private Dining" },
  { src: "/pictures/interiors/lounge-enhanced.jpg", alt: "Candlelit lounge with classical sculpture", caption: "The Lounge" },
];
