import './TypeLabel.scss';

const TypeLabel = (props) => {
    return (
        <div className='label__container'>
            {props.value} {props.label}
        </div>
    )
}

export default TypeLabel;