import "./style.css";

export default function Inputs({ nomeLabel, emailLabel, mensagemLabel }) {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="nome">{nomeLabel}</label>
        <input type="text" id="nome" placeholder=" " />
      </div>

      <div className="form-group">
        <label htmlFor="email">{emailLabel}</label>
        <input type="email" id="email" placeholder=" " />
      </div>

      <div className="form-group full-width">
        <label htmlFor="mensagem">{mensagemLabel}</label>
        <textarea id="mensagem" placeholder=" "></textarea>
      </div>
    </div>
  );
}
