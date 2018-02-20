import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";


class Map extends React.Component{

    constructor(props){
        super(props);
        const {lat, lng} = this.props.initialCenter;
        this.state={
            currentLocation:{
                lat:lat,
                lng:lng
            }  
        }
    }



    componentDidUpdate(prevProps, prevState){
        if(prevProps.google !== this.props.google){
            this.loadMap();
        }
    }
    
    loadMap(){
        if(this.props && this.props.google){
            const {google} = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            let {initialCenter, zoom} = this.props;
            const {lat, lng} = this.state.currentLocation;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            })
            this.map = new maps.Map(node, mapConfig);
        }
    }
//
    render(){
        return(
            <div ref="map" style={style}>
                Loading Map...
            </div>
        )
    }
}

export default Map;

const style = {
    width: '100vw',
    height: '100vh'
}
Map.propTypes = {
    google: PropTypes.object,
    zoom: PropTypes.number,
    initialCenter: PropTypes.object
}
Map.defaultProps={
    zoom: 14,
    //Chicago is default center
    initialCenter:{
        lat:41.881832,
        lng:-87.623177
    }
}
