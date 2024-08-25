import './styles.css';
import Button from "../../components/button";

export default function Contato() {
  return (
    <>
      <header className="banner-contato">
        <div className="contato-texto">
          <h1>Dúvidas e suporte, entre em contato:</h1>
        </div>
      </header>

      <div className="main-contato">
        <div className="inputs-contato">
          <div className="form-group">
            <label>Nome:</label>
            <input type="text" id="nome" name="nome" required />
          </div>
          <div className="form-group">
            <label>E-mail:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label>Mensagem:</label>
          </div>
          <Button texto={"Enviar"} />
        </div>
      </div>
    </>
  );
}
