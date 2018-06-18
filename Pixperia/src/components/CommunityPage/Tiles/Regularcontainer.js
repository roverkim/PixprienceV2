import React, {Component} from 'react';


export default class Regularcontainer extends Component {
  render() {
    return (
      <div className="tile bg-transparent fg-white text-shadow" data-role="tile">
        <div className="tile-content">
          <div className="tile-label">{this.props.label}</div>
          <div className="image-container image-format-square" style={{
              width: '100%'
            }}/>
            <div className="frame">
              <div style={{
                  width: '100%',
                  height: 150,
                  backgroundImage: 'url(' + {this.props.image} + ')',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: 0
                }}/>
            </div>
          </div>
        </div>
    );
  }
}

// <Regularcontainer label="Regular Container" image={this.state.images[22]}/> 
