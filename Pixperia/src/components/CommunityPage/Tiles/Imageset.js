import React, {Component} from 'react';


export default class Imageset extends Component {
  render() {
    return (
      <div className="tile-wide bg-orange fg-white" data-role="tile">
        <div className="tile-content image-set">
          <img src={this.props.image}/>
          <img src={this.props.image1}/>
          <img src={this.props.image2}/>
          <img src={this.props.image3}/>
          <img src={this.props.image4}/>
        </div>
        <span className="tile-label">{this.props.label}}</span>
      </div>
    );
  }
}

//<Imageset label="Image Set" image={this.state.images[0]} image1={this.state.images[1]} image2={this.state.images[2]} image3={this.state.images[3]} image4={this.state.images[4]}/>
