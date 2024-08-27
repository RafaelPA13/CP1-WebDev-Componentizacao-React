import './styles.css';
import Button from '../../components/button';

export default function Home() {
  return (
    <section class="hero">
      <div class="hero-text">
        <h1>Crie seus vídeos online</h1>
        <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
        <Button texto="Começar agora!" />
      </div>
      <div class="cara_saltando">
        <img src="/images/banners/cara_saltando.png" alt="Banner Home"/>
      </div>
    </section>
  );
}
