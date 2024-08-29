import './styles.css';
import Button from '../../components/button';
import Cards_Home from '../../components/cards-home';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>Crie seus vídeos online</h1>
          <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
          <Button texto="Começar agora!" />
        </div>
        <div className="cara_saltando">
          <img src="/images/banners/cara_saltando.png" alt="Banner Home" />
        </div>
      </section>

      {/* Início Cards */}
      <section className="hero-cards">
        <Cards_Home
          cor=" #F1C2B0"
          numero="01"
          icone="/public/images/icons/youtube_icon.png"
          alt="Ícone do YouTube"
          titulo="YouTube"
          descricao="Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo." 
        />
        <Cards_Home
          cor="#F9EB98"
          numero="02"
          icone="/public/images/icons/tiktok_icon.png"
          alt="Ícone do TikTok"
          titulo="TikTok"
          descricao="Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok." 
        />
        <Cards_Home
          cor="#C0D9DD"
          numero="03"
          icone="/public/images/icons/facebook_icon.png"
          alt="Ícone do Facebook"
          titulo="Facebook"
          descricao="Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook." 
        />
        <Cards_Home
          cor="#6975E8"
          numero="04"
          icone="/public/images/icons/instagram_icon.png"
          alt="Ícone do Instagram"
          titulo="Instagram"
          descricao="Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels." 
        />
        <Cards_Home
          cor=" #f0b0f1"
          numero="05"
          icone="/public/images/icons/twitter_icon.png"
          alt="Ícone do Twitter"
          titulo="Twitter"
          descricao="Compartilhe suas ideias e opiniões em vídeos curtos e impactantes que vão viralizar no Twitter." 
        />
        <Cards_Home
          cor=" #db5fab"
          numero="06"
          icone="/public/images/icons/discord_icon.png"
          alt="Ícone do Discord"
          titulo="Discord"
          descricao="Crie uma comunidade engajada e conectada através de vídeos que vão aproximar seus membros e fortalecer laços." 
        />
      </section>
      {/* Fim Cards */}


    </>
  );
}
