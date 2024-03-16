import React, { useState } from "react";
import "./App.css"; 

const App = () => {
  const initialDictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const [dictionary, setDictionary] = useState(initialDictionary);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    const normalizedSearchTerm = searchTerm.toLowerCase();
    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === normalizedSearchTerm
    );

    setSearchResult(foundWord ? foundWord.meaning : "Word not found in the dictionary.");
  };

  return (
    <div className="XDictionaryApp">
      <h1>Dictionary App</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for word..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="result">
        <p>Definition:</p>
        {searchResult !== null && <p>{searchResult}</p>}
      </div>
    </div>
  );
};

export default App;