import estilos from "./Portfolio.module.css";

const PROJETOS = [
  {
    id: "portfolio",
    tag: "// projeto principal · React.js",
    titulo: "Portfólio pessoal",
    desc: "SPA completa construída em React.js, com domínio próprio e deploy na Vercel. Componentização, roteamento e identidade visual própria.",
    chips: ["React.js", "Vercel", "CSS3"],
    url: "https://www.diegosantiago.dev",
    destaque: true,
    destaqueLabel: "diegosantiago.dev ↗",
    destaqueDesc: "Primeiro projeto completo em React com deploy em produção e domínio customizado.",
  },
  {
    id: "optimustech",
    tag: "// HTML · CSS · JS",
    titulo: "OptimusTech ↗",
    desc: "Landing page responsiva com menu hamburger em JavaScript puro.",
    chips: ["JavaScript", "responsivo"],
    url: "https://optimustech-projeto.vercel.app/",
  },
  {
    id: "gelateria",
    tag: "// React.js",
    titulo: "Gelateria ↗",
    desc: "SPA em React com componentização. Primeiro projeto relevante com o framework.",
    chips: ["React.js", "SPA"],
    url: "https://projeto-gelateria-three.vercel.app/",
  },
  {
    id: "barbearia",
    tag: "// CSS avançado",
    titulo: "Barbearia Stilo ↗",
    desc: "Parallax e responsividade. Foco em técnicas de CSS avançado.",
    chips: ["parallax", "CSS"],
    url: "https://projeto-barbearia-devmedia.vercel.app/",
  },
  {
    id: "cafe",
    tag: "// HTML · CSS",
    titulo: "Manhattan Coffee ↗",
    desc: "Landing page com parallax e layout editorial tipográfico.",
    chips: ["parallax", "editorial"],
    url: "https://cafeteria-olive.vercel.app/",
  },
  {
    id: "dsflix",
    tag: "// HTML · CSS",
    titulo: "DSFlix ↗",
    desc: "Página fictícia inspirada na Netflix. Projeto de treinamento em HTML e CSS.",
    chips: ["HTML", "CSS"],
    url: "https://ds-flix.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <main className={estilos.container_principal}>

      {/* ── Cabeçalho da seção ── */}
      <section className={estilos.sec_head}>
        <p className={estilos.mono}>// meus projetos</p>
        <h1 className={estilos.titulo}>Portfólio</h1>
        <p className={estilos.subtitulo}>
          Projetos desenvolvidos ao longo da minha jornada de transição para o front-end.
          Clique em qualquer card para acessar.
        </p>
      </section>

      {/* ── Grid de projetos ── */}
      <section className={estilos.sec_projetos}>
        <div className={estilos.grid}>
          {PROJETOS.map((p) =>
            p.destaque ? (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${estilos.card} ${estilos.card_destaque}`}
              >
                <div className={estilos.destaque_left}>
                  <span className={estilos.card_tag}>{p.tag}</span>
                  <h2 className={estilos.card_titulo}>{p.titulo}</h2>
                  <p className={estilos.card_desc}>{p.desc}</p>
                  <div className={estilos.chips}>
                    {p.chips.map((c) => (
                      <span key={c} className={estilos.chip}>{c}</span>
                    ))}
                  </div>
                </div>
                <div className={estilos.destaque_right}>
                  <span className={estilos.card_tag}>// acessar</span>
                  <h3 className={`${estilos.card_titulo} ${estilos.titulo_roxo}`}>
                    {p.destaqueLabel}
                  </h3>
                  <p className={estilos.card_desc}>{p.destaqueDesc}</p>
                </div>
              </a>
            ) : (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={estilos.card}
              >
                <span className={estilos.card_tag}>{p.tag}</span>
                <h2 className={estilos.card_titulo}>{p.titulo}</h2>
                <p className={estilos.card_desc}>{p.desc}</p>
                <div className={estilos.chips}>
                  {p.chips.map((c) => (
                    <span key={c} className={estilos.chip}>{c}</span>
                  ))}
                </div>
              </a>
            )
          )}
        </div>
      </section>

    </main>
  );
}
