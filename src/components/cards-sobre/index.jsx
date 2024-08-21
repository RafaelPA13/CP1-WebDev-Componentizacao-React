import "./styles.css";

export default function Cards_Sobre({ titulo, conteudo, button }) {
  return (
    <div className="card-sobre">
      <h3>{titulo}</h3>
        {conteudo}
      <button>{button}</button>
    </div>
  );
}
