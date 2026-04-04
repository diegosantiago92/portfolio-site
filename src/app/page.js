import estilos from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className={estilos.fundo}>
        <div className={estilos.hero}>

          {/* Label top */}
          <p className={estilos.mono}>// front-end developer</p>

          {/* Nome */}
          <h1 className={estilos.nome}>
            Diego<br />
            <span>Santiago</span>
          </h1>

          {/* Subtítulo */}
          <p className={estilos.sub}>
            Desenvolvedor Front-End em transição de carreira. HTML, CSS,
            JavaScript e React — com background em Administração e Logística
            que traz clareza analítica ao código.
          </p>

          {/* Badges de tecnologia */}
          <div className={estilos.badges}>
            {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Git · GitHub', 'Vercel', 'Pós-grad PUC-Rio'].map((b, i) => (
              <span key={b} className={`${estilos.badge} ${i < 4 ? estilos.badge_on : ''}`}>
                {b}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className={estilos.ctas}>
            <Link href="/portfolio" className={estilos.btn_primary}>
              Ver projetos
            </Link>
            <Link href="/sobre" className={estilos.btn_outline}>
              Sobre mim
            </Link>
          </div>

          {/* Links sociais */}
          <div className={estilos.sociais}>
            <a href="https://github.com/diegosantiago92" target="_blank" rel="noopener noreferrer" className={estilos.social_link}>
              github ↗
            </a>
            <a href="https://www.linkedin.com/in/disantiagodev/" target="_blank" rel="noopener noreferrer" className={estilos.social_link}>
              linkedin ↗
            </a>
          </div>

          {/* Detalhe gráfico top-right */}
          <div className={estilos.glow} aria-hidden="true" />
          <div className={estilos.grid_label} aria-hidden="true">
            // disponível<br />// remoto · Salvador
          </div>

        </div>
      </section>
    </main>
  );
}
