import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import estilos from "./Rodape.module.css";

const LINKS = [
  { href: "/",          label: "home" },
  { href: "/portfolio", label: "portfólio" },
  { href: "/sobre",     label: "sobre mim" },
  { href: "/contato",   label: "contato" },
];

export default function Rodape() {
  const ano = new Date().getFullYear();

  return (
    <footer className={estilos.footer}>
      <div className={estilos.inner}>

        {/* Coluna esquerda — identidade */}
        <div className={estilos.col_identity}>
          <div className={estilos.logo}>
            <span className={estilos.logo_ds}>DS</span>
            <span className={estilos.logo_slash}>/</span>
            <span className={estilos.logo_nome}>Diego Santiago</span>
          </div>
          <p className={estilos.tagline}>
            Desenvolvedor Front-End em transição de carreira.<br />
            Salvador, BA · disponível para oportunidades.
          </p>
          <div className={estilos.sociais}>
            <a href="https://github.com/diegosantiago92" target="_blank" rel="noopener noreferrer" className={estilos.social_icon}>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/disantiagodev/" target="_blank" rel="noopener noreferrer" className={estilos.social_icon}>
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Coluna central — navegação */}
        <div className={estilos.col_nav}>
          <p className={estilos.col_title}>Navegação</p>
          <ul className={estilos.nav_list}>
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={estilos.nav_link}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna direita — contato */}
        <div className={estilos.col_contato}>
          <p className={estilos.col_title}>Contato</p>
          <div className={estilos.contato_list}>
            <a href="mailto:dev.diegosantiago@gmail.com" className={estilos.contato_item}>
              <span className={estilos.contato_label}>email</span>
              dev.diegosantiago@gmail.com
            </a>
            <a href="https://linkedin.com/in/disantiagodev" target="_blank" rel="noopener noreferrer" className={estilos.contato_item}>
              <span className={estilos.contato_label}>linkedin</span>
              disantiagodev
            </a>
            <a href="https://github.com/diegosantiago92" target="_blank" rel="noopener noreferrer" className={estilos.contato_item}>
              <span className={estilos.contato_label}>github</span>
              diegosantiago92
            </a>
          </div>
        </div>

      </div>

      {/* Barra inferior */}
      <div className={estilos.bottom}>
        <p className={estilos.creditos}>
          © {ano} Diego Santiago — Desenvolvedor Front-End
        </p>
        <p className={estilos.built}>
          <span className={estilos.mono}>// built with</span> React · Next.js · Vercel
        </p>
      </div>
    </footer>
  );
}
