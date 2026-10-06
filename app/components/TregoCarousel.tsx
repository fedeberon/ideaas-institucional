"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    label: "Para entenderlo rápido",
    title: "Tu carga, en buenas manos.",
    body: "Publicá una carga o encontrá oportunidades en tu ruta. Trego conecta a quien necesita transportar con quien ya está en camino.",
    tags: ["Seguro y confiable", "Rápido y simple", "Menos emisiones"],
  },
  {
    label: "Para verlo técnicamente",
    title: "Una operación conectada de punta a punta.",
    body: "Trego reúne publicación de cargas, búsqueda por ruta, perfiles de transportistas, conversación y seguimiento en una misma experiencia digital.",
    tags: ["Cargas y recorridos", "Matching por ruta", "Chat y seguimiento"],
  },
];

export function TregoCarousel() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  return (
    <div className="trego-carousel" aria-label="Presentación de Trego">
      <div className="trego-showcase-copy">
        <div className="trego-carousel-top"><Image src="/images/trego/trego-logo.png" alt="Trego" width={150} height={41} /><span>{active + 1} / {slides.length}</span></div>
        <p className="trego-slide-label">{slide.label}</p>
        <h3>{slide.title}</h3>
        <p>{slide.body}</p>
        <div className="trego-pill-row">{slide.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="trego-carousel-controls"><button type="button" onClick={() => setActive((active - 1 + slides.length) % slides.length)} aria-label="Ver explicación anterior">←</button><button type="button" onClick={() => setActive((active + 1) % slides.length)} aria-label="Ver explicación siguiente">→</button></div>
      </div>
      <div className="trego-showcase-image"><Image src="/images/trego/trego-truck-hero.png" alt="Camión de Trego en ruta" fill sizes="(max-width: 800px) 100vw, 55vw" /></div>
    </div>
  );
}
