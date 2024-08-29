import './styles.css';

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
              <img src="/images/icons/twitter_icon.png" alt="Icone X" />
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
            <div className="form-group">
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" placeholder=" " />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder=" " />
            </div>

            <div className="form-group full-width">
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea id="mensagem" placeholder=" "></textarea>
            </div>

            <button type="submit" className="enviar-btn">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
}
