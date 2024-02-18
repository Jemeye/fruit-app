import FruitCard from "./fruit-card";

function FruitList() {

    return (
        <>
            <div className="fruit-list">
                {[...Array(20)].map((_, index) => (
                    <FruitCard key={index} />
                ))}
            </div>
        </>
    );
}

export default FruitList;