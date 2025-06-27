import estilos from "./page.module.css";
import Image from 'next/image';
import ImageBanner from '/public/img-banner.png';
import Github from '/public/github-icon.png';
import Linkedin from '/public/linkedin-icon.png'

export default function Home() {
  return (
    <main>
      <section className={estilos.fundo}>
        <div className={estilos.home}>
        <div className={estilos.banner_titulo}>
          <h1>Olá pessoal,</h1>
          <p><span>ME CHAMO DIEGO SANTIAGO, SOU DESENVOLVEDOR FRONT-END</span></p>
          <p>e este é o meu portfólio!</p>
          <a href="/sobre" className={estilos.saiba_mais}>SAIBA MAIS</a>
          <div className={estilos.redes_sociais}>
          <a href="https://github.com/diegosantiago92" target="_blank"><Image src={Github} alt="GitHub"/></a>
          <a href="https://www.linkedin.com/in/disantiagodev/" target="_blank"><Image src={Linkedin} alt="LinkedIn"/></a>
          </div>
        </div>
        <div className={estilos.image_banner}>
          <Image src={ImageBanner} alt="Banner"/>
        </div>
        </div>
      </section>
    </main>
  );
}
