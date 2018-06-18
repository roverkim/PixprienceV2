import React from 'react';

export default function(props) {

  return (<div className="team-member center-align carousel-item" style={{
      'fontFamily' : "'Didact Gothic', sans-serif"
    }}>
    <a href={props.github}>
      <img id={props.name} className="responsive-img circle materialboxed" src={props.image} alt={props.name}/>
      <h6 style={{
          color: 'white'
        }}>{props.name}</h6>
      <p className="text-muted">{props.role}</p>
    </a>
  </div>);
}
