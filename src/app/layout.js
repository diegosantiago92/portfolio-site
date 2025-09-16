import "./globals.css";
import Topo from "@/componentes/Topo";
import Rodape from "@/componentes/Rodape";
import Head from "next/head";

export const metadata = {
  title: "Diego Santiago - Desenvolvedor Front-End",
  description: "Desenvolvedor Front-End - HTML, CSS, JavaScript, React.JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        {/* Meta tag para responsividade */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body>
        <Topo />
        {children}
        <Rodape />
      </body>
    </html>
  );
}