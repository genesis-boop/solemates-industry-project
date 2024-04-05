import shoesImg from "../../assets/images/Product_Community/Similar-Items/Similiar.svg"
import "./SimiliarItems.scss"

function SimiliarItems () {
    return (
        <div className="container">
            <img className="image" src={shoesImg} alt="similiar items" />
        </div>
    )
}

export default SimiliarItems;