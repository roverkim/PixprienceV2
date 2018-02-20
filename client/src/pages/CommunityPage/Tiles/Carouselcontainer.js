import React, {Component} from 'react';
import {Slider, Slide} from 'react-materialize';

export default class Carouselcontainer extends Component {
  render() {
    return (
      <div className=" metro tile bg-orange fg-white" data-role="tile">
        <div className=" metro widget tile-content">
          <Slider>
            <Slide
              src={this.props.image}
              title={this.props.slidetitle}>
              {this.props.slogan}
            </Slide>
            <Slide
              src={this.props.image1}
              title={this.props.slidetitle1}
              placement="left" >
              {this.props.slogan1}
            </Slide>
            <Slide
              src={this.props.image2}
              title={this.props.slidetitle2}
              placement="right">
              {this.props.slogan2}
            </Slide>
          </Slider>
          <div className="tile-label">{this.props.title}</div>
        </div>
      </div>
  );
  }
}

// <Carouselcontainer image={this.state.images[0]} image1={this.state.images[1]} image2={this.state.images[2]} image3={this.state.images[3]} label="Carousel" />
