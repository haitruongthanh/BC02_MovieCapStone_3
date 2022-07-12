import React from "react";
import "./movieNews.css";

export default function NewsItems({ movie }) {
  return (
    <div>
      <div className="card">
        <div className="poster">
          <img src={movie.image} alt="" />
        </div>
        <div className="details">
          <h2>
            {movie.fullTitle}
            <br />
            <span>{movie.crew}r</span>
          </h2>
          <div className="rating">
            <span>IMDB rating {movie.imDbRating}</span>
          </div>
          <div className="tags">
            <span className="fantasy">Fantasy</span>
            <span className="mystery">Mystery</span>
          </div>
          <div className="info">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              dolore vitae similique accusamus. Accusamus, quos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
crew: "Frank Darabont (dir.), Tim Robbins, Morgan Freeman"
fullTitle: "The Shawshank Redemption (1994)"
id: "tt0111161"
imDbRating: "9.2"
imDbRatingCount: "2608025"
image: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg"
rank: "1"
title: "The Shawshank Redemption"
year: "1994"
[[Prototype]]: Object

*/
