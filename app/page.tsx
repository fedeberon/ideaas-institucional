import Image from "next/image";
import { TregoCarousel } from "./components/TregoCarousel";
import { ProcessContrastCarousel } from "./components/ProcessContrastCarousel";

const services = [
  ["Desarrollo a medida", "Aplicaciones web, portales B2B/B2C y sistemas internos alineados a tu operación."],
  ["Integraciones & APIs", "Conectamos ERP, CRM, eCommerce, pasarelas de pago y servicios de terceros."],
  ["Automatización e IA", "Automatizamos procesos repetitivos y aceleramos decisiones con IA aplicada."],
  ["Consultoría tecnológica", "Diagnóstico, estrategia y acompañamiento para escalar equipos y plataformas."],
];

const steps = [
  ["01", "Descubrimiento", "Objetivos, alcance, riesgos y priorización."],
  ["02", "Diseño", "Arquitectura, UX y plan de entregas."],
  ["03", "Construcción", "Sprints, QA continuo y feedback temprano."],
  ["04", "Evolución", "Monitoreo, mejoras y roadmap vivo."],
];

const products = [
  { title: "Trego", text: "Conectamos cargas con transportistas que ya están en camino.", image: "/images/trego/trego-truck-hero.png", href: "https://trego-eta.vercel.app" },
  { title: "Uniendo Sonrisas", text: "Gestión de socios y aportes mensuales para organizaciones que hacen la diferencia.", image: "/images/ideaas-source/camara.png", href: "https://uniendo-sonrisas.vercel.app" },
  { title: "Encuestas IJS", text: "Carga y consulta de encuestas institucionales para convertir datos en decisiones.", image: "/images/ideaas-source/gyd.png", href: "https://encuestas-ijs.vercel.app" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header"><div className="container header-inner"><a href="#inicio" className="logo-link"><Image src="/images/ideaas-logo-final.png" alt="IDEEAS — Ingeniería, Desarrollo y Análisis de Aplicaciones y Software" width={260} height={118} priority /></a><nav className="desktop-nav"><a href="#servicios">Servicios</a><a href="#producto">Producto</a><a href="#metodologia">Metodología</a><a href="#casos">Casos</a><a href="#nosotros">Nosotros</a><a className="header-cta" href="#contacto">Agendar reunión</a></nav><a className="mobile-menu" href="#servicios">Menú</a></div></header>

      <section id="inicio" className="hero-source"><div className="container hero-grid"><div className="hero-copy-source"><p className="pill pill-amber">Producto estrella IDEEAS</p><h1>Nos pedís el servicio y te dejamos la web <span>lista para crecer</span></h1><p className="hero-lede-source">Te entregamos una web funcionando y, desde ahí, la vas haciendo crecer por chat cuando quieras. Ese chat está atendido por un <b>agente de IA</b> que transforma tus pedidos en cambios reales de forma automatizada.</p><p className="hero-note">Vos pedís el cambio en lenguaje simple, el agente lo procesa y nuestro equipo valida para publicarlo rápido y con control.</p><div className="hero-actions"><a className="button-source button-brand" href="#producto">Quiero mi web lista</a><a className="button-source button-outline" href="#contacto">Quiero una propuesta</a></div><div className="metrics"><div><strong>+40</strong><span>implementaciones</span></div><div><strong>+10</strong><span>años construyendo software</span></div><div><strong>SLA</strong><span>seguimiento y soporte continuo</span></div></div></div></div></section>

      <section className="promise"><div className="container promise-card"><h2>Qué hacemos por tu empresa</h2><div className="promise-list"><span>✓ Discovery funcional y técnico</span><span>✓ Diseño de arquitectura y roadmap</span><span>✓ Desarrollo e integración de sistemas</span><span>✓ QA, puesta en producción y evolución continua</span></div><p>Trabajamos como partner de producto: objetivos claros, entregables medibles y comunicación constante.</p></div></section>

      <section id="servicios" className="section-source"><div className="container"><div className="section-heading-source"><p className="kicker">Lo que hacemos</p><h2>Capacidades para mover tu negocio</h2><p>Desde una necesidad puntual hasta una transformación digital integral.</p></div><div className="service-grid">{services.map(([title, text]) => <article className="source-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section id="ai-agentes" className="section-source section-muted"><div className="container split-source"><div><p className="pill pill-purple">Nuevo · AI Engineering</p><h2>Agentes de IA para desarrollo y control de calidad</h2><p>En IDEEAS incorporamos agentes de IA para asistir al equipo técnico en tareas de desarrollo, revisión de código y testing. Esto acelera entregas, mejora cobertura de pruebas y reduce errores antes de producción.</p><ul className="check-list"><li>Generación asistida de código y refactors controlados</li><li>Revisión técnica automática sobre PRs</li><li>QA inteligente: casos de prueba y regresión</li><li>Documentación técnica y trazabilidad de cambios</li></ul></div><div className="ai-visual"><Image src="/images/ideaas-ai-process.png" alt="Flujo de trabajo de IDEEAS con chat, inteligencia artificial, desarrollo y validación" fill sizes="(max-width: 800px) 100vw, 50vw" /></div></div></section>

      <section id="proceso" className="process-documentation"><div className="container"><div className="section-heading-source"><p className="kicker">Cómo trabajamos</p><h2>Del pedido al producto publicado</h2><p>Una comparación clara entre el flujo acompañado por IDEEAS y el proceso tradicional.</p></div><ProcessContrastCarousel /></div></section>

      <section id="producto" className="trego-feature"><div className="container"><div className="trego-heading"><div><p className="pill pill-cyan">Producto principal IDEEAS</p><h2>Trego: logística que se mueve</h2><p>Conectamos personas y empresas que necesitan mover cosas con vehículos que ya están en camino. Más simple, más rápido y más eficiente.</p></div><a className="button-source button-brand" href="https://trego-eta.vercel.app" target="_blank" rel="noreferrer">Conocer Trego ↗</a></div><TregoCarousel /><div className="trego-flow"><article><strong>01</strong><h3>Publicá o buscá</h3><p>Publicá tu carga o explorá cargas disponibles.</p></article><article><strong>02</strong><h3>Conectá</h3><p>Chateá y acordá los detalles del viaje.</p></article><article><strong>03</strong><h3>Mové</h3><p>Seguí el viaje y recibí la confirmación.</p></article></div></div></section>

      <section id="metodologia" className="section-source section-muted"><div className="container"><div className="section-heading-source"><p className="kicker">Cómo trabajamos</p><h2>Metodología de trabajo</h2></div><div className="steps-grid">{steps.map(([number, title, text]) => <article className="step-card" key={number}><strong>{number}</strong><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section id="casos" className="section-source"><div className="container"><div className="section-heading-source"><p className="kicker">Productos y casos</p><h2>Software que ya está funcionando</h2><p>Algunos productos nacidos de problemas reales y construidos por IDEEAS.</p></div><div className="product-grid">{products.map((product) => <a className="product-card-source" href={product.href} key={product.title}><div className="product-image"><Image src={product.image} alt={product.title} fill sizes="(max-width: 800px) 100vw, 33vw" /></div><div className="product-card-copy"><h3>{product.title} ↗</h3><p>{product.text}</p></div></a>)}</div></div></section>

      <section className="collaboration"><div className="container collaboration-inner"><div className="collaboration-mark"><Image src="/images/uniendo-sonrisas-logo.png" alt="Logo de Uniendo Sonrisas" width={110} height={110} /></div><div><p className="kicker">En colaboración con</p><h2>Uniendo Sonrisas</h2><p>Para esta fundación de Bolívar desarrollamos herramientas de gestión que ayudan a organizar socios, aportes y la operación cotidiana, para que el equipo pueda concentrarse en acompañar a las infancias.</p><a className="text-link" href="https://uniendo-sonrisas.vercel.app/institucional" target="_blank" rel="noreferrer">Conocer la fundación ↗</a></div><div className="collaboration-quote">“El cambio se construye con otros.”<small>— Uniendo Sonrisas</small></div></div></section>

      <section id="nosotros" className="section-source section-muted"><div className="container split-source about-source"><div><p className="kicker">IDEEAS</p><h2>Software Factory con mentalidad de consultora</h2><p>Entendemos el negocio, proponemos soluciones concretas y ejecutamos con foco en impacto.</p><p>Nos involucramos de punta a punta: estrategia, implementación y mejora continua.</p></div><div className="differential"><h3>Nuestro diferencial</h3><ul><li>Cercanía y comunicación clara con stakeholders.</li><li>Enfoque en resultados, no solo en features.</li><li>Buenas prácticas de arquitectura, QA y despliegue.</li><li>Equipo flexible para proyectos y staff augmentation.</li></ul></div></div></section>

      <section id="contacto" className="contact-source"><div className="container contact-inner"><div><p className="kicker">¿Hablamos?</p><h2>Hablemos de tu proyecto</h2><p>Contanos en qué etapa estás y te proponemos el mejor camino.</p></div><a className="button-source button-brand" href="mailto:contacto@ideaas.com.ar?subject=Consulta web IDEEAS">contacto@ideaas.com.ar ↗</a></div></section>

      <footer className="site-footer"><div className="container footer-inner"><span>© 2026 IDEEAS — Software Factory</span><div><a href="#servicios">Servicios</a><a href="#casos">Casos</a><a href="#contacto">Contacto</a></div></div></footer>
    </main>
  );
}
