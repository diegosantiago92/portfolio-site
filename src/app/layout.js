import "./globals.css";
import Topo from "@/componentes/Topo";
import Rodape from "@/componentes/Rodape"

export const metadata = {
  title: "Diego Santiago - Desenvolvedor Front-End",
  description: "Desenvolvedor Front-End - HTML, CSS, JavaScript, React.JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo/>
        {children}
        <Rodape/>
      </body>
    </html>
  );
}
