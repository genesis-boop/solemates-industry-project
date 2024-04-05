import allShoeData from "../../data/adjusted_shoes_data.json";
import shoeImg from "../../assets/images/Recommendation_Page/ShoeNike.svg";
import brandLogo from "../../assets/icons/ShoeBrandIcons/Icon_Nike.svg";
import people from "../../assets/icons/ShoeBrandIcons/Recommendation_Icons/Icon_People.svg";
import star from "../../assets/icons/ShoeBrandIcons/Recommendation_Icons/Icon_Large Star.svg";
import comment from "../../assets/icons/ShoeBrandIcons/Recommendation_Icons/svgexport-23 2.svg";
import shoeIcon from "../../assets/icons/MainProductFrame_Icons/Icon_Shoe.svg";

import "./RecommendationList.scss";

const RecommendationList = ({ category }) => {
  const filteredShoes = allShoeData.filter(
    (shoe) => shoe.shoe_type_category === category
  );

  return (
    <div className="recommendation-carousel">
      {filteredShoes.map((shoe) => (
        <div className="recommendation-carousel__item">
          <div className="recommendation-carousel__shoe">
            <img src={shoeIcon} alt="" />
            <h3 className="recommendation-carousel__fit">
              Fit Score: {shoe.fit_score}{" "}
            </h3>
          </div>
          <img src={shoeImg} alt={shoe.model} />
          <div className="recommendation-carousel__info">
            <div className="recommendation-carousel__brand">
              <img
                className="recommendation-carousel__logo"
                src={brandLogo}
                alt="Brand Logo"
              />
              <p className="recommendation-carousel__name">{shoe.brand}</p>
            </div>
            <h3 className="recommendation-carousel__title">{shoe.model}</h3>
            <div className="recommendation-carousel__colors">
              <div className="recommendation-carousel__green" />
              <div className="recommendation-carousel__pink" />
              <div className="recommendation-carousel__purple" />
              <div className="recommendation-carousel__orange" />
            </div>
            <div className="recommendation-carousel__details">
              <img src={people} alt="" />
              <p>{shoe.community_number}</p>
              <img src={star} alt="" />
              <p>{shoe.score}</p>
              <img src={comment} alt="" />
              <p>{shoe.comment_number}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendationList;
