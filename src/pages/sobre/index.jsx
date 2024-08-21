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
          <Button texto={"Baixe o app"} />
        </div>
        <div className="banner-fotos">
          <img
            src="/images/banners/celular1.png"
            alt="celular1"
          />
          <img
            src="/images/banners/celular2.png"
            alt="celular2"
          />
        </div>
      </header>

      <main className="main-sobre">
        <h2>Planos</h2>
        <div className="cards">
          <Cards_Sobre
            titulo={"Individual"}
            conteudo={
              <div className="conteudo">
                <h4>1 Usuário</h4>
                <p>10 Vídeos R$15</p>
              </div>
            }
            button={"Cadastrar"}
          />
          <Cards_Sobre
            titulo={"Profissional - Times"}
            conteudo={
              <div className="conteudo">
                <div>
                  <h4>1 - 10 Usuários</h4>
                  <p>Vídeos Ilimitados R$40</p>
                </div>
                <div>
                  <h4>+10 Usuários</h4>
                  <p>Vídeos Ilimitados R$20</p>
                </div>
              </div>
            }
            button={"Cadastrar"}
          />
          <Cards_Sobre
            titulo={"Corporativo"}
            conteudo={
              <div className="conteudo">
                <img
                  src="/images/card-sobre-img.png"
                  alt="mulher com celular"
                />
              </div>
            }
            button={"Entrar Em Contato"}
          />
        </div>
      </main>
    </>
  );
}
