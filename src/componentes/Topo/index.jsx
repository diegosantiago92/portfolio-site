"use client";
import Image from "next/image";
import Logo from "/public/logo.png";
import Link from "next/link";
import estilos from "./Topo.module.css";
import { useMenu } from "@/hooks/useMenu";

export default function Topo() {
  const { menuAtivo, toggleMenu, menuRef } = useMenu();

  return (
    <div className={estilos.container_topo}>
      <a href="/">
        <Image src={Logo} alt="Logo" />
      </a>

      <nav className={estilos.menu} ref={menuRef}>
        <button className={estilos.menu_button} aria-expanded={menuAtivo} aria-controls="menu" onClick={toggleMenu}>
          <span className={estilos.icon}>☰</span>
        </button>

        <ul id="menu" className={`${estilos.menu_links} ${menuAtivo ? estilos.ativo : ""}`}>
          <li>
            <Link href="/" onClick={() => setMenuAtivo(false)}>
              home
            </Link>
          </li>
          <li>
            <Link href="/portfolio" onClick={() => setMenuAtivo(false)}>
              portfólio
            </Link>
          </li>
          <li>
            <Link href="/sobre" onClick={() => setMenuAtivo(false)}>
              sobre mim
            </Link>
          </li>
          <li>
            <Link href="/contato" onClick={() => setMenuAtivo(false)}>
              contato
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
