"use client";
import { useEffect } from "react";
import Image from "next/image";
import Logo from "/public/logo.png";
import Link from "next/link";
import estilos from "./Topo.module.css";
import { useMenu } from "@/hooks/useMenu";
import { useIsMobile } from "@/hooks/useIsMobile";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Topo() {
  const { menuAtivo, toggleMenu, menuRef, setMenuAtivo } = useMenu();
  const isMobile = useIsMobile();

  // Resetar estado do menu ao mudar para desktop
  useEffect(() => {
    if (!isMobile) setMenuAtivo(false);
  }, [isMobile, setMenuAtivo]);

  return (
    <div className={estilos.container_topo}>
      <a href="/">
        <Image src={Logo} alt="Logo" />
      </a>

      <nav className={estilos.menu} ref={menuRef}>
        {/* Botão hamburguer – só mobile */}
        {isMobile && (
          <button
            className={estilos.menu_button}
            aria-expanded={menuAtivo}
            aria-controls="menu"
            onClick={toggleMenu}
          >
            <span className={estilos.icon}>☰</span>
          </button>
        )}

        {/* Menu – desktop e mobile */}
        {(isMobile || !isMobile) && (
          <ul
            id="menu"
            className={`${estilos.menu_links} ${
              menuAtivo && isMobile ? estilos.ativo : ""
            }`}
          >
            {/* Cabeçalho do menu – só mobile */}
            {isMobile && (
              <li className={estilos.sidebar_header}>
                <span className={estilos.menu_title}>MENU</span>
                <button
                  className={estilos.close_button}
                  onClick={toggleMenu}
                >
                  ×
                </button>
              </li>
            )}

            {/* Links */}
            <li>
              <Link href="/" onClick={isMobile ? toggleMenu : undefined}>
                home
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                onClick={isMobile ? toggleMenu : undefined}
              >
                portfólio
              </Link>
            </li>
            <li>
              <Link href="/sobre" onClick={isMobile ? toggleMenu : undefined}>
                sobre mim
              </Link>
            </li>
            <li>
              <Link href="/contato" onClick={isMobile ? toggleMenu : undefined}>
                contato
              </Link>
            </li>

            {/* Redes sociais – só mobile */}
            {isMobile && (
              <li className={estilos.social_links}>
                <a
                  href="https://www.linkedin.com/in/disantiagodev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/diegosantiago92"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
            )}
          </ul>
        )}
      </nav>
    </div>
  );
}
