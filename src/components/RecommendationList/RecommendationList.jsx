const RecommendationList = () => {
  return (
    <div className="recommendation-carousel">
      <div className="recommendation-carousel__item">
        <h3>Fit Score: </h3>
        <img src="" alt="Shoe" />
        <div className="recommendation-carousel__info">
          <div className="recommendation-carousel__brand">
            <img
              className="recommendation-carousel__logo"
              src=""
              alt="Brand Logo"
            />
            <p className="recommendation-carousel__name">Brand Name</p>
          </div>
          <h3 className="recommendation-carousel__title">Model</h3>
          <div className="recommendation-carousel__colors">colors</div>
          <div className="recommendation-carousel__details">
            <p>number</p>
            <p>rating</p>
            <p>comment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationList;
