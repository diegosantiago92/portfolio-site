"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import estilos from "./Topo.module.css";
import { useMenu } from "@/hooks/useMenu";
import { useIsMobile } from "@/hooks/useIsMobile";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const LINKS = [
  { href: "/",         label: "home" },
  { href: "/portfolio", label: "portfólio" },
  { href: "/sobre",    label: "sobre mim" },
  { href: "/contato",  label: "contato" },
];

export default function Topo() {
  const { menuAtivo, toggleMenu, menuRef, setMenuAtivo } = useMenu();
  const isMobile = useIsMobile();
  const pathname = usePathname();

  useEffect(() => {
    if (!isMobile) setMenuAtivo(false);
  }, [isMobile, setMenuAtivo]);

  return (
    <header className={estilos.header}>

      {/* Logo texto */}
      <Link href="/" className={estilos.logo}>
        <span className={estilos.logo_ds}>DS</span>
        <span className={estilos.logo_slash}>/</span>
        <span className={estilos.logo_nome}>Diego Santiago</span>
      </Link>

      <nav className={estilos.nav} ref={menuRef}>

        {/* Botão hamburguer — mobile */}
        {isMobile && (
          <button
            className={estilos.menu_btn}
            aria-expanded={menuAtivo}
            aria-controls="menu-links"
            onClick={toggleMenu}
          >
            <span className={estilos.hamburger_line} />
            <span className={estilos.hamburger_line} />
            <span className={estilos.hamburger_line} />
          </button>
        )}

        {/* Links */}
        <ul
          id="menu-links"
          className={`${estilos.menu_links} ${menuAtivo && isMobile ? estilos.ativo : ""}`}
        >
          {/* Header do drawer mobile */}
          {isMobile && (
            <li className={estilos.drawer_header}>
              <span className={estilos.drawer_title}>
                <span className={estilos.logo_ds}>DS</span>
                <span className={estilos.logo_slash}>/</span>
              </span>
              <button className={estilos.close_btn} onClick={toggleMenu}>×</button>
            </li>
          )}

          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={isMobile ? toggleMenu : undefined}
                className={`${estilos.link} ${pathname === href ? estilos.link_ativo : ""}`}
              >
                {label}
                {pathname === href && <span className={estilos.link_dot} />}
              </Link>
            </li>
          ))}

          {/* Redes sociais — apenas mobile drawer */}
          {isMobile && (
            <li className={estilos.social_drawer}>
              <a href="https://www.linkedin.com/in/disantiagodev/" target="_blank" rel="noopener noreferrer" className={estilos.social_icon}>
                <FaLinkedin />
              </a>
              <a href="https://github.com/diegosantiago92" target="_blank" rel="noopener noreferrer" className={estilos.social_icon}>
                <FaGithub />
              </a>
            </li>
          )}
        </ul>

        {/* Redes sociais — desktop */}
        {!isMobile && (
          <div className={estilos.social_desktop}>
            <a href="https://www.linkedin.com/in/disantiagodev/" target="_blank" rel="noopener noreferrer" className={estilos.social_icon}>
              <FaLinkedin />
            </a>
            <a href="https://github.com/diegosantiago92" target="_blank" rel="noopener noreferrer" className={estilos.social_icon}>
              <FaGithub />
            </a>
          </div>
        )}

      </nav>
    </header>
  );
}
