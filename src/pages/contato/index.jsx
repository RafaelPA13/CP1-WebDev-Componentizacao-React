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

      <section id="contact">
        <form>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Mensagem" />
          <Button texto={"Enviar"} />
        </form>
      </section>
    </>
  );
}
