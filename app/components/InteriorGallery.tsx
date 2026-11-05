"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImages } from "../site-data";

export default function InteriorGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const image = selected === null ? null : galleryImages[selected];

  return (
    <>
      <div className="gallery-grid">
        {galleryImages.map((item, index) => (
          <button type="button" className={`gallery-item gallery-item-${index + 1}`} key={item.src} onClick={() => setSelected(index)} aria-label={`View ${item.caption}`}>
            <Image src={item.src} alt={item.alt} fill sizes="(max-width: 760px) 92vw, 48vw" />
            <span><i>0{index + 1}</i>{item.caption}</span>
          </button>
        ))}
      </div>
      {image && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={image.caption} onClick={() => setSelected(null)}>
          <button className="lightbox-close" type="button" onClick={() => setSelected(null)} aria-label="Close gallery image">Close ×</button>
          <figure onClick={(event) => event.stopPropagation()}>
            <Image src={image.src} alt={image.alt} width={1536} height={1024} />
            <figcaption>{image.caption}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
