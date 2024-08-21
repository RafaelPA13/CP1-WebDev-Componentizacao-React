import "./styles.css";
import Button from "../../components/button";
import Cards_Sobre from "../../components/cards-sobre";

export default function Sobre() {
  return (
    <>
      <header className="banner-sobre">
        <div className="banner-texto">
          <h1>Bem vindo a revolução dos vídeos!</h1>
          <p>
            Somos uma startup com o objetivo de facilitar a produção de conteúdo
            em larga escala com qualidade profissional, capaz de atingir uma
            audiência de milhões de seguidores.
          </p>
          <Button texto={"Baixe o app"}/>
        </div>
        <div className="banner-fotos">
          <img src="../../../public/images/banners/celular1.png" alt="celular1" />
          <img src="../../../public/images/banners/celular2.png" alt="celular2" />
        </div>
      </header>

      <main className="main-sobre">
          <h2>Planos</h2>
          <Cards_Sobre />
          <Cards_Sobre />
          <Cards_Sobre />
      </main>
    </>
  );
}
