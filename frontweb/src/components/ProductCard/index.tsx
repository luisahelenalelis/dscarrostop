import './styles.css';

import ProductImg from 'assets/images/car-card.png';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="Nome do produto" />
      </div>
      <div className="card-container">
        <h6>Audi Supra TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <div className="nav-card">
          <a href="/">Comprar</a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
