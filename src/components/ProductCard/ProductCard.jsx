import "./ProductCard.scss";

function ProductCard() {
  return (
    <div className="product-card">
      <p>Fit Score</p>
      <div className="product-card__main">
        <img src="" alt="shoe" />
        <div className="product-card__info">
          <img className="product-card__logo" src="" alt="lululemon" />
          <h3 className="product-card__title">Blissfeel Trail Running Shoe</h3>
          <p>Colors</p>
          <div className="product-card__details">
            <p>0.5K</p>
            <p>4.5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
