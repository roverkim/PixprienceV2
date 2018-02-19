import React, {Component, Fragment} from 'react';

export default class Slideleftrightcontainer extends Component {
  render() {
    return (
      <Fragment>
      <div className="tile fg-white" data-role="tile" data-effect="slideUp">
        <div className="tile-content">
          <div className="live-slide" style={{
              top: '15.3889px'
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
              top: '-134.611px',
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
      </Fragment>

    );
  }
};
