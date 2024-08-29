import "./styles.css";
import Inputs from "../../components/inputs";

export default function Contato() {
  return (
    <>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');
    </style>
      <div className="container">
        <div className="contato-texto">
          <h1>Dúvidas e suporte, entre em contato:</h1>
          <div className='icons'>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/icons/twitter_icon.png" alt="Icone Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/icons/instagram2_icon.png" alt="Icone Instagram" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/icons/discord_icon.png" alt="Icone Discord" />
            </a>
          </div>
        </div>
        <div id="contact">
          <form>
            <Inputs 
              nomeLabel="Nome:" 
              emailLabel="Email:" 
              mensagemLabel="Mensagem:" 
            />
            <button type="submit" className="enviar-btn">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
}
