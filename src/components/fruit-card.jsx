import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function FruitCard({ fruit }) {

    return (
        <>
            <div className="fruit-card">
                <div className="fruit-image">
                    <LazyLoadImage src={`src/assets/${fruit.name}.jpg`} alt="Fruit"></LazyLoadImage>
                </div>
                <div className="fruit-description">
                    <h2>{fruit.name}</h2>
                    <p>{`This fruit belongs to the family ${fruit.family}.`}</p>
                    <button>View </button>
                </div>
            </div>
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