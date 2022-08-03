import './styles.css';

import MainImage from 'assets/images/main-image.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
        <div className="home-image-container">
          <img src={MainImage} alt="Audi A8" />
        </div>
      </div>
      <div className="base-card nav-card link-card">
        <Link to="/products">Ver Catálago</Link>
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default Home;
