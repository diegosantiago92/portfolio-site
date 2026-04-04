import FormularioContato from "@/componentes/FormularioContato";
import estilos from "./contato.module.css";

export default function ContatoPage() {
  return (
    <main className={estilos.container_principal}>

      {/* ── Cabeçalho ── */}
      <section className={estilos.sec_head}>
        <p className={estilos.mono}>// fale comigo</p>
        <h1 className={estilos.titulo}>Contato</h1>
        <p className={estilos.subtitulo}>
          Aberto a oportunidades, freelas e trocas de ideia sobre tecnologia.
          Manda uma mensagem — respondo rápido.
        </p>
      </section>

      {/* ── Grid: form + info ── */}
      <section className={estilos.sec_body}>
        <div className={estilos.grid}>

          {/* Formulário */}
          <div className={estilos.col_form}>
            <FormularioContato />
          </div>

          {/* Informações laterais */}
          <div className={estilos.col_info}>

            <div className={estilos.info_block}>
              <p className={estilos.info_label}>// email</p>
              <a href="mailto:dev.diegosantiago@gmail.com" className={estilos.info_val}>
                dev.diegosantiago@gmail.com
              </a>
            </div>

            <div className={estilos.info_block}>
              <p className={estilos.info_label}>// whatsapp</p>
              <a
                href="https://wa.me/5571993080974"
                target="_blank"
                rel="noopener noreferrer"
                className={estilos.info_val}
              >
                (71) 99308-0974
              </a>
            </div>

            <div className={estilos.info_block}>
              <p className={estilos.info_label}>// linkedin</p>
              <a
                href="https://linkedin.com/in/disantiagodev"
                target="_blank"
                rel="noopener noreferrer"
                className={estilos.info_val}
              >
                disantiagodev ↗
              </a>
            </div>

            <div className={estilos.info_block}>
              <p className={estilos.info_label}>// github</p>
              <a
                href="https://github.com/diegosantiago92"
                target="_blank"
                rel="noopener noreferrer"
                className={estilos.info_val}
              >
                diegosantiago92 ↗
              </a>
            </div>

            <div className={estilos.info_block}>
              <p className={estilos.info_label}>// localização</p>
              <p className={estilos.info_val}>Salvador, BA · Brasil</p>
              <p className={estilos.info_sub}>Disponível para trabalho remoto</p>
            </div>

            <div className={estilos.info_block}>
              <p className={estilos.info_label}>// disponibilidade</p>
              <div className={estilos.avail_badge}>
                <span className={estilos.avail_dot} />
                Disponível imediatamente
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
