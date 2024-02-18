import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import FruitDetail from './fruit-detail';
import { useState } from 'react';
function FruitCard({ fruit }) {

    const [modalOpen, setModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div className="fruit-card">
                <div className="fruit-image">
                    <LazyLoadImage src={`   /${fruit.name}.jpg`} alt="Fruit"></LazyLoadImage>
                </div>
                <div className="fruit-description">
                    <h2>{fruit.name}</h2>
                    <p>{`This fruit belongs to the family ${fruit.family}.`}</p>
                    <button onClick={openModal}>View </button>
                </div>
            </div>
            <FruitDetail isOpen={modalOpen} onClose={closeModal} fruit={fruit}></FruitDetail>
        </>
    );
}


FruitCard.propTypes = {
    fruit: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        family: PropTypes.string.isRequired,
        order: PropTypes.string.isRequired,
        genus: PropTypes.string.isRequired,
        nutritions: PropTypes.object.isRequired,
    }).isRequired,
};

export default FruitCard;