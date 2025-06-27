import Image from 'next/image';
import Logo from '/public/logo.png';
import Link from 'next/link';
import estilos from './Topo.module.css';

export default function Topo(){
    return(
        <div className={estilos.container_topo}>
            <a href="/"><Image src={Logo} alt="Logo" /></a>
            <nav className={estilos.links}>
                <Link href="/">home</Link>
                <Link href="/portfolio">portfólio</Link>
                <Link href="/sobre">sobre</Link>
                <Link href="/contato">contato</Link>
            </nav>
        </div>
    )
}