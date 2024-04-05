import "./ProductCard.scss";
import MainShoe from "../../assets/images/Product_Community/Blissfeel_White.svg";
import LuluLogo from "../../assets/icons/ShoeBrandIcons/Icon_Lululemon.svg";
function ProductCard() {
  return (
    <div className="product-card">
      <p className="product-card__score">Fit Score: 93%</p>
      <div className="product-card__main">
        <img src={MainShoe} alt="shoe" />
        <div className="product-card__info">
          <div className="product-card__brand">
            <img
              className="product-card__logo"
              src={LuluLogo}
              alt="lululemon"
            />
            <p className="product-card__name">Lululemon</p>
          </div>
          <h3 className="product-card__title">Blissfeel Trail Running Shoe</h3>
          <p className="product-card__color">Colors</p>
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
