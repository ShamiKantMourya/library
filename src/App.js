import React, { useState } from "react";
import "./styles.css";

const bookDataBase = {
  Manga: [
    { name: "Naruto", rating: "4.5/5" },
    { name: "That Time I Got Reincarnated As Slime ", rating: "3.5/5" },
    { name: "One Piece", rating: "4.5/5" },
    { name: "Tokyo Ghoul", rating: "3.5/5" }
  ],

  Sci_Fi: [
    {
      name: "The Last Train To London",
      rating: "4/5"
    },
    {
      name: "The man who knew too much",
      rating: "3.5/5"
    },
    {
      name: "The Time Machine",
      rating: "3.5/5"
    }
  ],
  Inspirational: [
    {
      name: "Ikigai",
      rating: "3.5/5"
    },
    {
      name: "The Monk Who Sold His Ferrari",
      rating: "4.5/5"
    },
    {
      name: "Atomic Habits",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Manga");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚Library </h1>
      <p> Checkout my favorite books. Select a genre to get started </p>

      <div>
        {Object.keys(bookDataBase).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul>
          {bookDataBase[selectedGenre].map((book) => (
            <li key={book.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
