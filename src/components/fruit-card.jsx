function FruitCard() {


    return (  
        <>
           <div className="fruit-card">
                <div className="fruit-image">
                    <img src="src\assets\istockphoto-1194235751-612x612.jpg" alt="Fruit"></img>
                </div>
                <div className="fruit-description">
                    <h2>Fruit name</h2>
                    <p>This fruit belongs to the family family and its genus is genus</p>
                    <button>View </button>
                </div>   
           </div>
        </>
    );
}

export default FruitCard;