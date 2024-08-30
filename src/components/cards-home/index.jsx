import './styles.css';

export default function Cards_Home({
  cor,
  numero,
  titulo,
  icone,
  alt,
  descricao,
}) {
  return (
    <div className="cards-home" style={{ backgroundColor: cor }}>
      <h1>{numero}</h1>
      <h3>{titulo}</h3>
      <div className="img-container">
        <img src={icone} alt={alt} />
      </div>
      <p>{descricao}</p>
    </div>
  );
}
