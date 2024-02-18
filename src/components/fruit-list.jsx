import { useState } from "react";
import FruitCard from "./fruit-card";

function FruitList() {

    const [fruit, setFruit] = useState([]);

    // Function to fetch fruit data asynchronously from a mock API endpoint
    const fetchData = async () => {
        fetch('https://2c3d4167-aaff-4fdf-ac62-6956081d0f21.mock.pstmn.io/fruits')
            .then(response => response.json())
            .then(data => {
                setFruit(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    useState(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="fruit-list">
                {fruit.map(( element, index) => (
                    <FruitCard key={index} fruit={element} />
                ))}
            </div>
        </>
    );
}

export default FruitList;