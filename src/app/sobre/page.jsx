"use client";

import estilos from "./Sobre.module.css";

// ── Calcula idade dinamicamente ──────────────────────────────────────────────
function calcularIdade(dataNascimento) {
  const hoje = new Date();
  const nasc = new Date(dataNascimento);
  let idade = hoje.getFullYear() - nasc.getFullYear();
  const mesAtual = hoje.getMonth();
  const mesNasc  = nasc.getMonth();
  const diaAtual = hoje.getDate();
  const diaNasc  = nasc.getDate();
  if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
    idade--;
  }
  return idade;
}

const HABILIDADES = [
  { nome: "HTML5",       sub: "semântico" },
  { nome: "CSS3",        sub: "responsivo, flexbox, grid" },
  { nome: "JavaScript",  sub: "ES6+, DOM, localStorage" },
  { nome: "React.js",    sub: "componentes, hooks, SPA" },
  { nome: "Git",         sub: "versionamento" },
  { nome: "Vercel",      sub: "deploy" },
  { nome: "APIs REST",   sub: "consumo básico" },
];

const DADOS = [
  ["localização",     "Salvador, BA"],
  ["modalidade",      "presencial · remoto"],
  ["graduação",       "ADS · Estácio 2024"],
  ["pós-grad",        "Eng. Software · PUC-Rio"],
  ["transição",       "desde 2021"],
  ["disponibilidade", "imediata"],
];

export default function Sobre() {
  const idade = calcularIdade("1992-01-21");

  return (
    <main className={estilos.container_principal}>

      {/* ── Cabeçalho ── */}
      <section className={estilos.sec_head}>
        <p className={estilos.mono}>// quem sou eu</p>
        <h1 className={estilos.titulo}>Sobre mim</h1>
      </section>

      {/* ── Habilidades ── */}
      <section className={estilos.sec}>
        <div className={estilos.sec_divider}>
          <span className={estilos.sec_num}>01.</span>
          <span className={estilos.sec_label}>Habilidades técnicas</span>
          <div className={estilos.sec_line} />
        </div>
        <div className={estilos.skills_list}>
          {HABILIDADES.map((h) => (
            <span key={h.nome} className={estilos.skill}>
              <b>{h.nome}</b> — {h.sub}
            </span>
          ))}
        </div>
      </section>

      {/* ── Sobre ── */}
      <section className={estilos.sec}>
        <div className={estilos.sec_divider}>
          <span className={estilos.sec_num}>02.</span>
          <span className={estilos.sec_label}>Trajetória</span>
          <div className={estilos.sec_line} />
        </div>

        <div className={estilos.sobre_grid}>

          {/* Texto principal */}
          <div className={estilos.sobre_texto}>
            <p>
              Tenho <strong>{idade} anos</strong>, sou de Salvador e desde 2021
              venho construindo, com foco e disciplina, uma transição real para o
              desenvolvimento front-end. Não foi um impulso — foi uma decisão
              consciente de quem entendeu que precisava ir além.
            </p>
            <br />
            <p>
              Minha base é sólida: me formei em{" "}
              <strong>Administração de Empresas</strong>, me especializei em{" "}
              <strong>Logística Empresarial</strong> e anos depois voltei para a
              faculdade para cursar{" "}
              <strong>Análise e Desenvolvimento de Sistemas</strong> pela Estácio,
              concluída em 2024. Hoje sou pós-graduando em{" "}
              <strong>Engenharia de Software pela PUC-Rio</strong> — uma das
              melhores instituições do país na área.{" "}
              <span className={estilos.destaque}>Cada etapa foi intencional.</span>
            </p>
            <br />
            <p>
              Essa trajetória dupla me dá algo que poucos desenvolvedores têm: a
              capacidade de enxergar um problema tanto pelo lado técnico quanto
              pelo lado do negócio. Sei o que é trabalhar sob pressão, cumprir
              prazos e me comunicar com clareza — e levo isso para o código.
            </p>
            <br />
            <p>
              Por trás de tudo isso existe uma motivação muito concreta:{" "}
              <strong>minha esposa, minha mãe e meus irmãos</strong>. São eles
              que me fazem acordar cedo, estudar mais uma hora e não desistir
              quando fica difícil. Quero provar — para eles e para mim mesmo —
              que sou capaz de construir algo novo do zero.
            </p>

            <blockquote className={estilos.quote}>
              "Não estou apenas trocando de emprego. Estou construindo a versão
              do profissional que sempre quis ser."
            </blockquote>
          </div>

          {/* Tabela de dados */}
          <div className={estilos.sidebar}>
            <table className={estilos.tabela}>
              <tbody>
                <tr>
                  <td className={estilos.tabela_key}>idade</td>
                  <td className={estilos.tabela_val}>{idade} anos</td>
                </tr>
                {DADOS.map(([k, v]) => (
                  <tr key={k}>
                    <td className={estilos.tabela_key}>{k}</td>
                    <td className={estilos.tabela_val}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

    </main>
  );
}
