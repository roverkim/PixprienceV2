import React from "react";
import {GoogleApiWrapper} from "google-maps-react";
import Map from "./Map";

class MapContainer extends React.Component{

    render(){
        // if(!this.props.loaded){
        //     return <div>Loading</div>
        // }
        return(
            <div>
                <Map google={this.props.google} />
            </div>
        )
    }
}
// export the container within the GoogleApiWrapper
export default GoogleApiWrapper({
    apiKey: "AIzaSyAJQ__z06-Y3H9TYepxUNOicjA-CEwGJsw",
    libraries: ['places']
})(MapContainer)