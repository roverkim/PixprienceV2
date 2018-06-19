import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

export default class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        lat: localStorage.getItem("picturelastlat"),
        lng: localStorage.getItem("picturelastlong")
      }
    }
  }

  // componentDidMount, which will house data for using geolocation
  componentDidMount() {
    // Set Map Location to Broswer Location
    if (localStorage.getItem('browserLat') !== null && localStorage.getItem('browserLong') !== null) {

      let browserLat = parseFloat(localStorage.getItem('browserLat'));
      let browserLong = parseFloat(localStorage.getItem('browserLong'));

      isNaN(browserLat) && isNaN(browserLong)?
        this.setState({
            currentLocation: {
              lat: localStorage.getItem("picturelastlat"),
              lng: localStorage.getItem("picturelastlong")
            }
        }) :
        this.setState({
            currentLocation: {
              lat: browserLat,
              lng: browserLong
            }
        });


    } else {
      this.setState({
        currentLocation: {
          lat: localStorage.getItem("picturelastlat"),
          lng: localStorage.getItem("picturelastlong")
        }
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.loadMap(); // loadMap function
    if (prevState.currentLocation !== this.state.currentLocation) { //
      this.recenterMap(); // function to recenter the map to the current browser location
    }
  }

  // function to recenter the map
  recenterMap() {

    const map = this.map;
    const curr = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
      let center = new maps.LatLng(curr.lat, curr.lng)
      map.panTo(center)
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      const { google } = this.props;
      const { maps } = google;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const { zoom } = this.props;
      const { lat, lng } = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center,
        zoom
      })
      this.map = new maps.Map(node, mapConfig);

      this.props.imageData.map((data) => {
        
        const marker = new google.maps.Marker({
          position: {
            lat: parseFloat(data.lat),
            lng: parseFloat(data.lng)
          },
          map: this.map,
          title: data.title

        });

        const infowindow = new google.maps.InfoWindow({
          content: `
                <div className="container" style="height: auto; width: auto !important; margin: 15px; text-align: center;">
                  <img src=${data.image} style="height:200px; width:200px" class="responsive marker-image" id=${data.title}>
                  <h5>Title: ${data.title}</h5>
                  <h5>Date: ${data.timelineDate}</h5>
                  <h5>Notes: ${data.notes}</h5>
                </div>
        `
        });
        // eventlistener - when the marker is clicked, open the infowindow
        marker.addListener('click', () => {
          infowindow.open(this.map, marker);
        });

      })

    }
  }
  //
  render() {
    return (<div ref="map" style={style}>
      Loading Map...
    </div>)
  }
}


const style = {
  width: '100vw',
  height: '100vh'
}
Map.propTypes = {
  google: PropTypes.object,
  zoom: PropTypes.number,
  initialCenter: PropTypes.object,
  useBrowserLocation: PropTypes.bool // a boolean for using browser location or not
}
Map.defaultProps = {
  zoom: 14,
  //Chicago is default center
  //testing new york as center
  initialCenter: {
    lat: 41.881832,
    lng: -87.623177
  },
  useBrowserLocation: false
}
