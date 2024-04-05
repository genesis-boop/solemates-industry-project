import './FootDataCard.scss';
import footModel from '../../assets/images/Recommendation_Page/foot-model-bright.png';
import TypeLabel from '../TypeLabel/TypeLabel';
import footTypes from '../../data/foot-types.json'; // Assuming this is an array of foot types

const FootDataCard = (props) => {
  // Finding the selected foot type based on props.type_category
  const selectedFootType = footTypes.find(footType => footType.category === props.userData.type_category);
    console.log(selectedFootType);
  return (
    <div className='footcard'>
      <h1>Your Foot Analysis</h1>
      <p>Key Feature of Your Foot</p>
      <div className='footcard__labellist'>
      <TypeLabel value={selectedFootType.arch} label="arch" />
      <TypeLabel value={selectedFootType.volume} label="volume" />
      <TypeLabel value={selectedFootType.shape} label="shape" />
      </div>
      <img className='footcard__model' src={footModel} alt='Foot Model' />
    </div>
  );
}

export default FootDataCard;