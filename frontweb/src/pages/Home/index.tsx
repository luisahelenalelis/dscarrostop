import './styles.css';

import MainImage from 'assets/images/main-image.png';
import Navbar from 'components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="home-container">
        <div className="base-card home-card">
          <div className="home-content-container">
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
          <div className="home-image-container">
            <img src={MainImage} alt="Audi A8" />
          </div>
        </div>
        <div className="base-card nav-card">
          <a href="/">Ver Catálago</a>
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </>
  );
}

export default Home;
