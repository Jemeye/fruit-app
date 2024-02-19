import React from 'react';
import { useState } from "react";
import FruitCard from "./fruit-card";
import { FaSearch } from "react-icons/fa";

function FruitList() {

    const [fruit, setFruit] = useState([]);
    const [currentFruit, setCurrentFruit] = useState([]);
    const [query, setQuery] = useState([]);

    // Function to fetch fruit data asynchronously from a mock API endpoint
    const fetchData = async () => {
        fetch('https://2c3d4167-aaff-4fdf-ac62-6956081d0f21.mock.pstmn.io/fruits')
            .then(response => response.json())
            .then(data => {
                setFruit(data);
                setCurrentFruit(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    // Function to search for a fruit
    const searchFruit = (e) => {
        e.preventDefault();
        console.log(query)
        if(query) {
            setCurrentFruit(fruit.filter(
                    (element) => element.name.toLowerCase().includes(query.toLowerCase()) || element.family.toLowerCase().includes(query.toLowerCase())
                ));
        } else {
            setCurrentFruit(fruit);
        }
    };

    useState(() => {
        fetchData();
    }, []);

    return (
        <div className="fruit-list-container">
            <div className="search">
                <form onSubmit={searchFruit}> 
                    <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)}/>
                    <button type="submit"><FaSearch></FaSearch></button>
                </form>
            </div>
            <div className="fruit-list">
                {currentFruit.map(( element, index) => (
                    <FruitCard key={index} fruit={element} />
                ))}
            </div>
        </div>
    );
}

export default FruitList;