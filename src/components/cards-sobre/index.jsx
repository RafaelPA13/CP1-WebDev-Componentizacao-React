import "./styles.css"

export default function Cards_Sobre ({titulo}) {
    return(
        <div className="cards-sobre">
            <h3>{titulo}</h3>
            <button>Cadastrar</button>
        </div>
    )
}