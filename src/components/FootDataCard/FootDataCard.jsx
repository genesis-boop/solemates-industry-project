import './FootDataCard.scss';
import footModel from '../../assets/images/Recommendation_Page/foot-model.png';
import TypeLabel from '../TypeLabel/TypeLabel';


const FootDataCard = (props) => {
    return (
        <>
        <h1>Your Foot Analysis</h1>
        <p>Key Feature of Your Foot</p>
        
        <img src={footModel} alt='Foot Model' />
        </>
    )
}

export default FootDataCard;