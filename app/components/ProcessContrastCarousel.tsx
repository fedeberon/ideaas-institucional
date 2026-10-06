"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    label: "CON IDEEAS",
    title: "/images/ideaas-process/01_ideaas_titulo.png",
    steps: [
      ["/images/ideaas-process/02_chat_cliente_ia.png", "Pedido por chat"],
      ["/images/ideaas-process/04_implementacion_ia.png", "Implementación asistida"],
      ["/images/ideaas-process/05_cicd_despliegue.png", "CI/CD y despliegue"],
      ["/images/ideaas-process/06_web_actualizada_ideaas.png", "Web actualizada"],
    ],
    footer: "/images/ideaas-process/07_seguimiento_chat.png",
    tone: "with-ideaas",
  },
  {
    label: "SIN IDEEAS",
    title: "/images/ideaas-process/08_tradicional_titulo.png",
    steps: [
      ["/images/ideaas-process/09_cliente_humano.png", "Explicás tu pedido"],
      ["/images/ideaas-process/10_desarrollo_tradicional.png", "El equipo desarrolla"],
      ["/images/ideaas-process/11_revisiones_ajustes.png", "Revisiones y ajustes"],
      ["/images/ideaas-process/12_web_actualizada_tradicional.png", "Web actualizada"],
    ],
    footer: "/images/ideaas-process/13_seguimiento_manual.png",
    tone: "without-ideaas",
  },
] as const;

export function ProcessContrastCarousel() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  return <div className={`process-carousel ${slide.tone}`}>
    <div className="process-carousel-header"><div><p className="kicker">Contraste de procesos</p><h3>{active === 0 ? "Dónde agregamos valor" : "Qué cambia sin acompañamiento"}</h3></div><div className="process-tabs" role="tablist" aria-label="Comparar procesos"><button type="button" className={active === 0 ? "active" : ""} onClick={() => setActive(0)} role="tab" aria-selected={active === 0}>Con IDEEAS</button><button type="button" className={active === 1 ? "active" : ""} onClick={() => setActive(1)} role="tab" aria-selected={active === 1}>Sin IDEEAS</button></div></div>
    <div className="process-slide"><div className="process-title-asset"><Image src={slide.title} alt={slide.label} fill sizes="(max-width: 800px) 100vw, 30vw" /></div><div className="process-steps">{slide.steps.map(([src, alt], index) => <div className="process-step" key={src}><span>{index + 1}</span><Image src={src} alt={alt} fill sizes="(max-width: 800px) 80vw, 18vw" /></div>)}</div><div className="process-footer-asset"><Image src={slide.footer} alt={active === 0 ? "Seguimiento por chat" : "Seguimiento manual"} fill sizes="(max-width: 800px) 90vw, 40vw" /></div></div>
    <div className="process-carousel-nav"><button type="button" onClick={() => setActive((active + 1) % slides.length)}>{active === 0 ? "Ver el proceso tradicional" : "Ver cómo trabajamos con IDEEAS"} <span>→</span></button><span>{active + 1} / {slides.length}</span></div>
  </div>;
}
