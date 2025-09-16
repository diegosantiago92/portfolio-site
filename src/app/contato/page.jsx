import FormularioContato from "@/componentes/FormularioContato";
import estiloBanner from '@/componentes/Banner/Banner.module.css'

export default function ContatoPage() {
  return (
    <main>
      <section className={estiloBanner.banner}>
        <h1>CONTATO</h1>
      </section>
      <FormularioContato />
    </main>
  );
}