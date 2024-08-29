import './styles.css';
import Button from '../../components/button';
import Cards_Home from '../../components/cards-home';

export default function Home() {
  return (
    <><section className="hero">
      <div className="hero-text">
        <h1>Crie seus vídeos online</h1>
        <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
        <Button texto="Começar agora!" />
      </div>
      <div className="cara_saltando">
        <img src="/images/banners/cara_saltando.png" alt="Banner Home" />
      </div>
    </section><section>
        <Cards_Home />
      </section></>
  );
}
