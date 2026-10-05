import Image from "next/image";

const products = [
  {
    number: "01",
    type: "Producto digital",
    title: "Mirador del Plata",
    description: "Una experiencia turística digital para descubrir Potrerillos, sus rutas y una forma distinta de habitar el paisaje.",
    tags: ["Web", "Turismo", "Contenido"],
    image: "/images/mirador-del-plata.jpg",
    href: "#contacto",
  },
  {
    number: "02",
    type: "Plataforma a medida",
    title: "Encuestas IJS",
    description: "Una herramienta interna para cargar, consultar y convertir encuestas institucionales en decisiones visibles.",
    tags: ["Next.js", "Datos", "Operaciones"],
    image: null,
    href: "#contacto",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Ideaas, inicio"><span className="brand-mark">i</span><span>ideaas</span></a>
        <div className="nav-links"><a href="#productos">Productos</a><a href="#metodo">Método</a><a href="#contacto">Contacto</a></div>
        <a className="nav-cta" href="#contacto">Hablemos <span>↗</span></a>
      </nav>

      <section className="hero shell" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse" /> Estudio digital independiente</p>
          <h1>Ideas que<br /><em>se vuelven</em><br />producto.</h1>
          <p className="hero-lede">Diseñamos experiencias digitales claras, útiles y con carácter para organizaciones que quieren avanzar.</p>
          <a className="button button-dark" href="#productos">Ver nuestros productos <span>↓</span></a>
        </div>
        <div className="hero-art" aria-label="Composición abstracta de Ideaas">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orb orb-main">i</div><div className="orb orb-small" /><div className="coordinate coordinate-one">34° 51&apos; 12.8&quot; S</div><div className="coordinate coordinate-two">58° 22&apos; 04.1&quot; O</div>
        </div>
      </section>

      <section className="intro-band"><div className="shell intro-grid"><p className="eyebrow">01 / Qué hacemos</p><p className="intro-statement">No empezamos por la tecnología. Empezamos por entender <span>qué tiene que cambiar.</span></p><p className="intro-note">Estrategia, diseño y desarrollo en un mismo equipo. De la primera pregunta a una solución que funciona.</p></div></section>

      <section className="products shell" id="productos">
        <div className="section-top"><div><p className="eyebrow">02 / Productos</p><h2>Lo que ya<br /><em>está pasando.</em></h2></div><p className="section-copy">Proyectos nacidos de problemas reales. Los convertimos en productos simples de usar, fáciles de entender y listos para crecer.</p></div>
        <div className="product-list">{products.map((product) => <article className="product-card" key={product.number}><div className="product-visual">{product.image ? <Image src={product.image} alt="Paisaje de Mirador del Plata" fill sizes="(max-width: 800px) 100vw, 50vw" /> : <div className="data-visual"><div className="data-grid" /><span className="data-label">01 — captura</span><span className="data-label data-label-two">02 — entiende</span><div className="data-line" /></div>}<span className="product-number">{product.number}</span></div><div className="product-info"><p className="product-type">{product.type}</p><h3>{product.title}</h3><p>{product.description}</p><div className="product-footer"><div className="tags">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={product.href} aria-label={`Conocer más sobre ${product.title}`}>Conocer más <span>↗</span></a></div></div></article>)}</div>
      </section>

      <section className="method" id="metodo"><div className="shell method-grid"><div><p className="eyebrow">03 / Método</p><h2>Menos ruido.<br /><em>Más sentido.</em></h2></div><div className="method-steps"><div className="step"><span>01</span><div><h3>Miramos de cerca</h3><p>Nos metemos en el problema, hablamos con las personas y encontramos la oportunidad real.</p></div></div><div className="step"><span>02</span><div><h3>Damos forma</h3><p>Ordenamos lo complejo y lo convertimos en una experiencia que se puede entender.</p></div></div><div className="step"><span>03</span><div><h3>Lo hacemos posible</h3><p>Construimos, medimos y mejoramos hasta que el producto encuentra su lugar.</p></div></div></div></div></section>

      <section className="contact shell" id="contacto"><div><p className="eyebrow">04 / Contacto</p><h2>¿Tenés una idea<br />dando vueltas?</h2></div><div className="contact-action"><p>Contanos qué querés mover. A veces una buena conversación es el primer prototipo.</p><a className="button button-accent" href="mailto:hola@ideaas.com.ar">hola@ideaas.com.ar <span>↗</span></a></div></section>
      <footer className="footer shell"><a className="brand" href="#inicio"><span className="brand-mark">i</span><span>ideaas</span></a><p>Buenos Aires, Argentina · 2025</p><a href="#inicio">Volver arriba ↑</a></footer>
    </main>
  );
}
