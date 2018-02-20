import React from "react";
import {GoogleApiWrapper} from "google-maps-react";
import Map from "./Map";
import axios from "axios";

class MapContainer extends React.Component {

  // constructor
  constructor() {
    super();
    this.state = {

      //this is an object that will hold null until all the data is properly received
      imageData: []
    }
    this.fetchTimelineImages = this.fetchTimelineImages.bind(this);
  }
  componentWillMount() {
    this.fetchTimelineImages();
  }

  // fetch the images and all the data from the backend
  fetchTimelineImages() { // Function to Fetch Timeline Images

    let clientEmail = localStorage.getItem('userEmail');
    axios.post('/test/images', {
      params: {
        email: clientEmail
      }
    })
    // axios.get('/test/images')
      .then(response => {
      // console.log(response)
      this.setState({imageData: response.data});

      //   this.setState({
      //     asyncImages: this.state.timeline_images.map(base64_image => base64_image.image)  Replace AysncImages Null with an Array of Images taken from
      //   })

      //    console.log(this.state.timeline_images)

      // take the images that come from the back end and then convert the location to lat/lng and then store the new object in new array

    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    // if(!this.props.loaded){
    //     return <div>Loading</div>
    // }
    return (<div>
      <Map google={this.props.google} imageData={this.state.imageData}/>
    </div>)
  }
}
// export the container within the GoogleApiWrapper
export default GoogleApiWrapper({apiKey: "AIzaSyAJQ__z06-Y3H9TYepxUNOicjA-CEwGJsw", libraries: ['places']})(MapContainer)
