"use client";
import { useState, useEffect, useRef } from "react";

export function useMenu() {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const menuRef = useRef(null);

  function toggleMenu() {
    setMenuAtivo(prev => !prev);
  }

  // Fecha o menu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuAtivo(false);
      }
    }

    if (menuAtivo) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuAtivo]);

  return { menuAtivo, toggleMenu, menuRef, setMenuAtivo };
}
