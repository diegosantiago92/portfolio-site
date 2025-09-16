import estilos from "./Sobre.module.css";
import estiloBanner from '@/componentes/Banner/Banner.module.css'
import Image from "next/image";

export default function Sobre() {
  return (
    <main>
      <section className={estiloBanner.banner}>
        <h1>SOBRE MIM</h1>
      </section>

      <section className={estilos.container_sobre}>
        <div className={estilos.texto_sobre}>
          <h2>Quem sou eu?</h2>
          <span>Abaixo conto um pouco mais...</span>
          <p>
          Olá! Me chamo Diego Santiago, tenho 33 anos e estou em transição de carreira para a área de tecnologia, um passo que venho construindo com muito foco e dedicação desde 2021.

          Minha trajetória profissional começou na área administrativa, onde me formei em Administração de Empresas e me especializei em Logística Empresarial. Após alguns anos de experiência, percebi a necessidade de buscar novos desafios e encontrei na tecnologia a oportunidade de transformar minha carreira.

          Em 2022, iniciei a graduação em Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá, concluída em 2024. Atualmente, estou cursando uma pós-graduação em Engenharia de Software pela PUC-Rio, com término previsto para Dezembro de 2025.

          Estou constantemente em busca de evolução, complementando minha formação com cursos e materiais de plataformas como DevMedia, Alura e Origamid. Meu grande objetivo hoje é conquistar minha primeira oportunidade como desenvolvedor e colocar em prática tudo o que venho aprendendo.

          Se quiser saber mais sobre meus projetos ou trocar ideias sobre tecnologia, será um prazer conversar! 🚀
          </p>
        </div>
        {/*<div className={estilos.container_imagens}>
          <div className={estilos.box_imagem}>
            <Image src={SobreNos} className={estilos.imagem} alt="Imagem Sobre Nós" />
          </div>
          <div className={estilos.box_imagem}>
            <Image src={Sorveteria} className={estilos.imagem} alt="Imagem da Sorveteria" />
          </div>
        </div>*/}
      </section>
    </main>
  );
}
