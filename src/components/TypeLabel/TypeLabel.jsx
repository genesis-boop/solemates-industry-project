import './TypeLabel.scss';

const TypeLabel = (props) => {
    return (
        <div className='label__container'>
            {props.labeltext}
        </div>
    )
}

export default TypeLabel;