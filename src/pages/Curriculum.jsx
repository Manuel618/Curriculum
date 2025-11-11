import { useEffect } from "react";
import "../styles/Curriculum.css";
import foto from "../assets/foto.jpg";

// Imágenes locales de proyectos (nombres sin espacios ni acentos)
import ataquesImg from "../assets/pagina-ataques-ciberneticos.png";
import carteleraImg from "../assets/cartelera-de-peliculas.png";
import sitioImg from "../assets/sitio-personal.png";

export default function Curriculum() {
  useEffect(() => {
    document.title = "Curriculum | Jesús Manuel Meraz Marrufo";
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    const links = document.querySelectorAll('a[href^="#"]');
    const handler = (e) => {
      const id = e.currentTarget.getAttribute("href");
      const el = id ? document.querySelector(id) : null;
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth", block: "start" }); }
    };
    links.forEach((a) => a.addEventListener("click", handler));
    return () => links.forEach((a) => a.removeEventListener("click", handler));
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="container nav-wrap">
          <div className="brand">
            <div className="logo" aria-hidden="true"></div>
            <h1>Jesús Manuel Meraz Marrufo</h1>
          </div>
          <div className="links" role="navigation" aria-label="Secciones del sitio">
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#video">Video</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero container">
        <section className="intro card" aria-labelledby="titulo-principal">
          <div className="intro-header">
            <div className="intro-title">
              <p className="kicker">Curriculum · Monterrey, MX</p>
              <h2 id="titulo-principal" className="title">
                Desarrollador <span className="title-accent">Web & Móvil</span>
              </h2>
              <p className="subtitle">React · HTML/CSS · JavaScript · SQL · PostgreSQL</p>
            </div>

            {/* Foto dentro del mismo card */}
            <div className="intro-photo">
              <img src={foto} alt="Foto de perfil" />
            </div>
          </div>

          <p className="intro-text">
            Soy un desarrollador orientado a productos con gusto por el diseño limpio, el rendimiento y la experiencia
            de usuario. Construyo apps web y móviles, integro bases de datos, despliego a producción y documento mis procesos.
          </p>

          <ul className="meta-list" aria-label="Datos rápidos">
            <li>🎯 Frontend & UX</li>
            <li>🗄️ SQL / PostgreSQL</li>
            <li>🚀 SPA & Deploy</li>
          </ul>

          <div className="badges" aria-label="Habilidades principales">
            <span className="badge">JavaScript / TypeScript</span>
            <span className="badge">React & Vite</span>
            <span className="badge">React Native</span>
            <span className="badge">Node / Express</span>
            <span className="badge">PostgreSQL</span>
          </div>
        </section>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="container">
        {/* SOBRE MI */}
        <section id="sobre-mi">
          <h2>Sobre mí</h2>
          <div className="card card--pad">
            <p>
              Soy estudiante de Ingeniería en Desarrollo y Gestión de Software. Me considero organizado, responsable y
              constante. Tengo más experiencia en desarrollo web con React, HTML/CSS y JavaScript, y trabajo con bases
              de datos relacionales (SQL y PostgreSQL). Me motiva aprender tecnologías que mejoren la experiencia del
              usuario y convertir ideas en interfaces claras y eficientes. Fuera del código, disfruto la música
              —especialmente la ópera— y soy fan de las series de detectives. También me encanta la comida, en especial
              la china. Además, colecciono figuras de anime, artículos de mis series favoritas y audífonos.
            </p>
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" aria-labelledby="proyectos-title">
          <h2 id="proyectos-title">Proyectos recientes</h2>
          <div className="grid">
            <article className="project card">
              <div className="thumb"><img src={ataquesImg} alt="Página informativa de ciberseguridad" /></div>
              <div className="content">
                <h3 className="project__title">Página de ataques cibernéticos</h3>
                <p className="meta">Phishing · Ransomware · Buenas prácticas</p>
                <p>Información educativa con diseño responsive.</p>
                <p className="project__actions">
                  <a className="link" href="https://examen-manuel-meraz.vercel.app/" target="_blank" rel="noreferrer noopener">Ver proyecto</a>
                </p>
              </div>
            </article>

            <article className="project card">
              <div className="thumb"><img src={carteleraImg} alt="Cartelera de películas" /></div>
              <div className="content">
                <h3 className="project__title">Cartelera de películas (CineTrix Hub)</h3>
                <p className="meta">Búsqueda · Pósters · Detalles</p>
                <p>Grid responsivo con tarjetas, filtros y vista de detalle.</p>
                <p className="project__actions">
                  <a className="link" href="https://cine-terminado.vercel.app/" target="_blank" rel="noreferrer noopener">Ver proyecto</a>
                </p>
              </div>
            </article>

            <article className="project card">
              <div className="thumb"><img src={sitioImg} alt="Sitio personal" /></div>
              <div className="content">
                <h3 className="project__title">Sitio personal (Curriculum)</h3>
                <p className="meta">React · SPA · Despliegue</p>
                <p>Curriculum y portafolio con enlaces y contacto.</p>
                <p className="project__actions">
                  <a className="link" href="https://sitio-personal-omega.vercel.app/" target="_blank" rel="noreferrer noopener">Ver proyecto</a>
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* VIDEO */}
        <section id="video" aria-labelledby="video-title">
          <h2 id="video-title">Video corto</h2>
          <div className="video-wrap">
            {/* Columna 1: video */}
            <figure className="video card">
              <iframe
                src="https://www.youtube.com/embed/UH5Fzi3hrQw"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <figcaption>Demo breve desde YouTube.</figcaption>
            </figure>

            {/* Columna 2: info (más ancha, más abajo y centrada) */}
            <div className="card card--pad video-info">
              <h3 style={{ marginTop: 4 }}>¿Qué muestra este video?</h3>
              <p>
                El video trata de los objetos <code>Date</code> en JavaScript y de cómo trabajar con fechas y horas:
                explica que un <code>Date</code> representa un instante medido en milisegundos desde el 1 de enero de
                1970 (UTC), muestra distintas formas de crearlo —<code>new Date()</code> para la fecha/hora actual y
                <code> new Date(2023, 2, 26)</code> para una fecha específica (mes 0-indexado)—, y recorre métodos
                para obtener año, mes, día, día de la semana, hora, minutos y segundos
                (<code>getFullYear</code>, <code>getMonth</code>, <code>getDate</code>, <code>getDay</code>,
                <code> getHours</code>, <code>getMinutes</code>, <code>getSeconds</code>), además de
                <code> Date.now()</code>; finalmente ilustra cómo mostrar la fecha con <code>alert()</code> y sugiere
                formatear mejor la salida para interfaces.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
