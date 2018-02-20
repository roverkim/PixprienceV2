import React, {Component} from 'react';

export default class Slideupcontainer extends Component {
  render() {
    return (

      <div className="tile fg-white" data-role="tile" data-effect="slideUpDown">
        <div className="tile-content">
          <div className="live-slide" style={{
              top: '16.6672px'
            }}>
            <div className="image-container image-format-fill" style={{
                width: '100%',
                height: '100%'
              }}>
              <div className="frame">
                <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(' + this.props.image + ')',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: 0
                  }}/>
              </div>
            </div>
          </div>
          <div className="live-slide" style={{
              top: '-150px',
              display: 'block'
            }}>
            <div className="image-container image-format-fill" style={{
                width: '100%',
                height: '100%'
              }}>
              <div className="frame">
                <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(' + this.props.image1 + ')',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: 0
                  }}/>
              </div>
            </div>
          </div>
          <div className="live-slide" style={{
              top: 150,
              display: 'block'
            }}>
            <div className="image-container image-format-fill" style={{
                width: '100%',
                height: '100%'
              }}>
              <div className="frame">
                <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(' + this.props.image2 + ')',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: 0
                  }}/>
              </div>
            </div>
          </div>
          <div className="live-slide" style={{
              top: '-150px',
              display: 'block'
            }}>
            <div className="image-container image-format-fill" style={{
                width: '100%',
                height: '100%'
              }}>
              <div className="frame">
                <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(' + this.props.image3 + ')',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: 0
                  }}/>
              </div>
            </div>
          </div>
          <div className="live-slide" style={{
              top: '-133.333px',
              display: 'block'
            }}>
            <div className="image-container image-format-fill" style={{
                width: '100%',
                height: '100%'
              }}>
              <div className="frame">
                <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(' + this.props.image4 + ')',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: 0
                  }}/>
              </div>
            </div>
          </div>
        </div>
        <div className="tile-label">{this.props.title}</div>
      </div>
    );
  }
}
