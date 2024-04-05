import RecommendationCard from "../../components/RecommendationCard/RecommendationCard"

function RecommendationPage() {
    return (
        <div className="rec-page">

            <div className="rec-page-feet__details">
                <p className="rec-page-feet__text">High Arch</p>
                <p className="rec-page-feet__text">Medium Volume</p>
                <p className="rec-page-feet__text">Wide Width</p>
            </div>
            <h2>Perfect Fit Only For You</h2>
            <RecommendationCard />
        </div>
    )
}
