import Image from "next/image";
import estilos from "./Portfolio.module.css";
import Dsflix from '/public/dsflix.png';
import Barbearia from '/public/barbearia.png';
import Cafe from '/public/cafe-manhattan.png';
import TelaLogin from '/public/tela-login.png';
import Optimustech from '/public/optimustech.png';
import Gelateria from '/public/gelateria.png';

export default function Portfolio() {
  return (
    <main>
      <section className={estilos.banner_topo}>
        <h1>PORTFÓLIO</h1>
      </section>

      <section className={estilos.container_cards}>
        <h2>Você pode conferir alguns dos meus projetos abaixo!</h2>
        <div className={estilos.grid_card}>
          <div className={estilos.projeto_card}>
            <Image src={Dsflix} alt="DSFlix" />
            <h3>DSFlix</h3>
            <p>Projeto desenvolvido em HTML/CSS para treinamento utilizando uma página fictícia imitando a Netflix.</p>
            <a href="https://dsflix2.vercel.app/" target="_blank"><button className={estilos.btn_acessar}>Acessar</button></a>
          </div>
          <div className={estilos.projeto_card}>
            <Image src={Barbearia} alt="Barbearia Stilo Visual" />
            <h3>Barbearia Stilo Visual</h3>
            <p>Projeto desenvolvido em HTML/CSS para treinar técnicas de efeito Parallax e responsividade básica.</p>
            <a href="https://projeto-barbearia-devmedia.vercel.app/" target="_blank"><button className={estilos.btn_acessar}>Acessar</button></a>
          </div>
          <div className={estilos.projeto_card}>
            <Image src={Cafe} alt="Manhattan Coffee House" />
            <h3>Manhattan Coffee House</h3>
            <p>Projeto desenvolvido em HTML/CSS onde apliquei também técnicas de efeito Parallax.</p>
            <a href="https://cafeteria-olive.vercel.app/" target="_blank"><button className={estilos.btn_acessar}>Acessar</button></a>
          </div>
          <div className={estilos.projeto_card}>
            <Image src={TelaLogin} alt="Tela de Login" />
            <h3>Tela de Login</h3>
            <p>Projeto desenvolvido em HTML/CSS de uma simples tela de login.</p>
            <a href="https://telalogin-eight.vercel.app/" target="_blank"><button className={estilos.btn_acessar}>Acessar</button></a>
          </div>
          <div className={estilos.projeto_card}>
            <Image src={Optimustech} alt="OptimusTech" />
            <h3>OptimusTech</h3>
            <p>Projeto desenvolvido em HTML, CSS e JavaScript de uma agência de recrutamento fictícia onde apliquei técnicas de responsividade e menu hamburger.</p>
            <a href="https://optimustech-projeto.vercel.app/" target="_blank"><button className={estilos.btn_acessar}>Acessar</button></a>
          </div>
          <div className={estilos.projeto_card}>
            <Image src={Gelateria} alt="Gelateria" />
            <h3>Gelateria</h3>
            <p>Projeto desenvolvido utilizando React.js onde aprendi e utilizei componentes e também aprendi a desenvolver e melhorar SPAs mais bonitas e responsivas.</p>
            <a href="https://projeto-gelateria-zeta.vercel.app/" target="_blank"><button className={estilos.btn_acessar}>Acessar</button></a>
          </div>
        </div>
      </section>
    </main>
  );
}
