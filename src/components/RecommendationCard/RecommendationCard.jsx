function RecommendationCard() {
    return (
        <div className="rec-card">
            <div className="rec-card-product">
                <img className="rec-card-product__img" src="" alt="" />
            </div>
            <div className="rec-card-product__description">
                <img className="rec-card-product__description__logo" src="" alt="" />
                <img className="rec-card-product__description__member" src="" alt="" />
                <img className="rec-card-product__description__rating" src="" alt="" />
                <img className="rec-card-product__description__fit" src="" alt="" />
                <div className="dot">
                    <span className="dot-white"></span>
                    <span className="dot-red"></span>
                    <span className="dot-blue"></span>
                    <span className="dot-yellow"></span>
                </div>
            </div>
        </div>
    )
}

export default RecommendationCard;