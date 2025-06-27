import Image from 'next/image';
import Logo from '../../../public/logo.png';
import estilos from './Rodape.module.css';

export default function Rodape(){
    return(
        <footer>
  <div className={estilos.container_rodape}>
    <div className={estilos.conteudo_rodape}>
      <Image src={Logo} alt="Logo" className={estilos.logo_rodape} />
      <div className={estilos.container_infos}>
        <div className={estilos.infos}>
          <h3>ENDEREÇO</h3>
          <p>Salvador/Bahia</p>
          <p>Brasil</p>
        </div>
        <div className={estilos.infos}>
          <h3>CONTATO</h3>
          <p>dev.diegosantiago@gmail.com</p>
          <p>Tel.: (71) 99308-0974</p>
        </div>
        <div className={estilos.infos}>
          <h3>HORÁRIOS</h3>
          <p>TODOS OS DIAS</p>
          <p>08:00 – 22:00</p>
        </div>
      </div>
    </div>
  </div>
  <p className={estilos.creditos}>Diego Santiago - Desenvolvedor Front-End - Alguns direitos reservados.</p>
</footer>
    )
}