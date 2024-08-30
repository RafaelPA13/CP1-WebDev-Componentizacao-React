import "./styles.css";
import Input from "../../components/inputs";
import Textarea from "../../components/textArea";

export default function Contato() {
  return (
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
            <Input label="Nome:" placeholder="Jon Doe" />
            <Input label="Email:" placeholder="example@email.com" type="email" />
            <Textarea label="Mensagem:" placeholder="Sua mensagem" />
            <button type="submit" className="enviar-btn">Enviar</button>
          </form>
        </div>
      </div>
  );
}
