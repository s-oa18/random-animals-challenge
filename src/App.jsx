import "./App.css";
import React from "react";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  function handleClick() {
    setAnimals([...animals, getRandomAnimal()]);
  }

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button
        onClick={handleClick}
        style={{ fontSize: "2rem", padding: "10px", marginLeft: "50px" }}
      >
        Add Animal
      </button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
