import React, {Component} from 'react';
import {Slider, Slide} from 'react-materialize';

export default class Zoomoutstatic extends Component {
  render() {
    return (
      <div className="tile fg-white" data-role="tile">
        <div className="tile-content zooming-out">
          <div className="slide">
            <img style={{height: "100%"}} src={this.props.image}/></div>
          <div className="tile-label">{this.props.title}</div>
        </div>
      </div>
  );
  }
}
