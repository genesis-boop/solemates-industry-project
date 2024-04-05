import allShoeData from "../../data/shoes_and_reviews.json";
import "./RecommendationList.scss";

const RecommendationList = ({ category }) => {
  const filteredShoes = allShoeData.filter(
    (shoe) => shoe.shoe_type_category === category
  );

  return (
    <div className="recommendation-carousel">
      {filteredShoes.map((shoe) => (
        <div className="recommendation-carousel__item">
          <h3>Fit Score: {shoe.fit_score} </h3>
          <img src={shoe.shoe_img} alt={shoe.model} />
          <div className="recommendation-carousel__info">
            <div className="recommendation-carousel__brand">
              <img
                className="recommendation-carousel__logo"
                src={shoe.logo}
                alt="Brand Logo"
              />
              <p className="recommendation-carousel__name">{shoe.brand}</p>
            </div>
            <h3 className="recommendation-carousel__title">{shoe.model}</h3>
            <div className="recommendation-carousel__colors">colors</div>
            <div className="recommendation-carousel__details">
              <p>{shoe.community_number}</p>
              <p>{shoe.score}</p>
              <p>{shoe.comment_number}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendationList;
