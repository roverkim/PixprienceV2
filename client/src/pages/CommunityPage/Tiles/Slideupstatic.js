import React, {Component} from 'react';
import {Slider, Slide} from 'react-materialize';

export default class Slideupstatic extends Component {
  render() {
    return (
      <div className="tile fg-white" data-role="tile">
        <div className="tile-content slide-up">
          <div className="slide">
            <div className="image-container image-format-hd" style={{
                width: '100%'
              }}>
              <div className="frame">
                <div style={{
                    width: '100%',
                    height: '174.375px',
                    backgroundImage: 'url(' + this.props.image + ')',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: 0
                  }}/>
              </div>
            </div>
          </div>
          <div className="slide-over op-orange text-small padding10">
            {this.props.slogan}
          </div>
          <div className="tile-label">{this.props.title}</div>
        </div>
      </div>
  );
  }
}
