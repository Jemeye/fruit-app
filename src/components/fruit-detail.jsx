import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

function FruitDetail({ isOpen, onClose, fruit }) {

    // Function to handle closing the modal with the "Esc" key
    const handleEscKey = (event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    // Add an event listener to detect the "Esc" key when the component is mounted
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleEscKey);
        }
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen, onClose]);


    if (!isOpen) return null;

    return (
        <>
            <div className="fruit-modal">
                <div className="fruit-modal-content">
                    <div className="fruit-modal-image">
                        <img src={`/${fruit.name}.jpg`} alt="Fruit"></img>
                    </div>
                    <div className="fruit-modal-description">
                        <h2>{fruit.name}</h2>
                        <div className='general-info'>
                            <p><span>Family: </span>{fruit.family}</p>
                            <p><span>Order: </span>{fruit.order}</p>
                            <p><span>Genus: </span>{fruit.genus}</p>
                        </div>
                        <div className='general-info--nutritions'>
                            <p>Nutritions:</p>
                            <div>
                                <p><span>Calories: </span>{fruit.nutritions.calories}</p>
                                <p><span>Fat: </span>{fruit.nutritions.fat}</p>
                                <p><span>Protein: </span>{fruit.nutritions.protein}</p>
                                <p><span>Sugar: </span>{fruit.nutritions.sugar}</p>
                                <p><span>Carbohydrates: </span>{fruit.nutritions.carbohydrates}</p>
                            </div>
                        </div>
                        <button onClick={onClose} className='close-button'><FaTimes></FaTimes></button>
                    </div>
                </div>
            </div>
        </>);
}

FruitDetail.propTypes = {
    fruit: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        family: PropTypes.string.isRequired,
        order: PropTypes.string.isRequired,
        genus: PropTypes.string.isRequired,
        nutritions: PropTypes.object.isRequired,
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default FruitDetail;