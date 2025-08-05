import { useState, useEffect } from 'react'; 
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// import React, { useEffect, useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quotes.slice(0, 10)); 
      })
      .catch((error) => {
        console.error("Error fetching quotes:", error);
      });
  }, []); 
  return (
    <div>
      {quotes.map((quote) => (
        <h1 key={quote.id}>{quote.quote}</h1>
      ))}
    </div>
  );
}

export default App;