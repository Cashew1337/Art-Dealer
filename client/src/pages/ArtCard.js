import React from 'react';
import "../ArtCard.css";  

export default function ArtCard(props) {

  return (
    <div className="container">
      <div className="card">
        <div className="extra-container">
        <img
          className="card-img-top"
          src={`https://i.imgur.com/FJq8tuK.png`}
          alt="Card cap"
        />
        <div className="card-body">
        <h5 className="card-title"> {props.title}</h5>
        <p className="card-text">{props.size}</p>
          <p className="card-text">{props.description}</p>
          <p className="card-text"> {props.year}</p>
          <p className="card-text"> {props.price}</p>
         {/*  <a href="#"=">
            Buy {props.title}
          </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
