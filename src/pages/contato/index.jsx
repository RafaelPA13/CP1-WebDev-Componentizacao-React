import './styles.css';
import '../../App.css'

export default function Contato() {
  return (
    <>
      <div className="container">
        <div className="contato-texto">
          <h1>Dúvidas e suporte, entre em contato:</h1>
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
