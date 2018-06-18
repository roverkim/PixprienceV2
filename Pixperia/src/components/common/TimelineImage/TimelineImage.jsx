import React from 'react';

export default function TimelineImage(props) {
  return (
    <div className="center-align">
      <a className="carousel-item" href="#">
        <img className="responsive-img materialboxed" src={props.image} alt={props.title} />
        <h6 style={{
            color: 'white',
            'font-family': "'Roboto', sans-serif"
          }}>
          {props.title}
        </h6>
        <p
          style={{
          'font-family': "'Roboto', sans-serif"
        }}
          className="text-muted"
        >
          {props.dateAdded}
        </p>
      </a>
    </div>
  );
}
