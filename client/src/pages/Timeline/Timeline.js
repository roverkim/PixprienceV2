import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Carousel} from "react-materialize"
import Pixupload from "../../components/Upload/Pixuploader"
import UploadModal from "../../components/UploadModal/UploadModal"
import API from "../../utils/API.js"
import TimelineImage from  "../../components/TimelineImage"
import Auth from "../../modules/Auth";
import NavLogin from "../../components/NavBar";
import axios from "axios";

import './Timeline.css';

class Timeline extends Component {

  constructor() {
    super();

    this.state = {
      community_images: [],
      timeline_images: [],
      secretData: '',
      carousel: false,
      asyncImages: null,
      asyncCarousel:null
    }
    this.fetchCommunityImages = this.fetchCommunityImages.bind(this);
    this.fetchTimelineImages = this.fetchTimelineImages.bind(this);
    this.getBrowserLocation = this.getBrowserLocation.bind(this);
  } // End of Constructor

  componentWillMount() {
    this.fetchCommunityImages();
    this.fetchTimelineImages();
    this.getBrowserLocation();
  }

  /////////////////////////////////////////////// /* Authentication */ //////////////////////////////////////////////////////////

  componentDidMount() {
  const xhr = new XMLHttpRequest();
  xhr.open('get', '/api/timeline');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  // set the authorization HTTP header
  xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      this.setState({
        secretData: xhr.response.message
      });
    }
  });
  xhr.send();

  // console.log(window.localStorage.getItem('userEmail')); // Code to Get userEmail so that you can query the backed by email ID
}

/////////////////////////////////////////////// /* Geolocation */ //////////////////////////////////////////////////////////

getBrowserLocation(){
  if (navigator.geolocation) {
    console.log('Geolocation is supported!');

    let geoSuccess = function(position) {
     let startPos = position;
     console.log("Browser Lat is :" + startPos.coords.latitude);
     console.log("Browser Long is : " + startPos.coords.longitude);
     localStorage.setItem('browserLat', startPos.coords.latitude);
     localStorage.setItem('browserLong', startPos.coords.longitude);
   };

   let geoError = function(error) {
     console.log('Error occurred. Error code: ' + error.code);
      // error.code can be:
      //   0: unknown error
      //   1: permission denied
      //   2: position unavailable (error response from location provider)
      //   3: timed out
    };

    let geoOptions = {
       timeout: 10 * 10000
    }

    navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);
  }
  else {
    console.log('Geolocation is not supported for this Browser/OS.');
  }
}


/////////////////////////////////////////////// /* Fetching Images */ //////////////////////////////////////////////////////////

  fetchCommunityImages() { // Function to Fetch Community Images

    let fetchedimages = [];

    for (let key in API.imageData) { // Get Images from API Ajax Call and Store into Variable fetchedImages
      fetchedimages.push(API.imageData[key]);
    }

    this.setState(prevState => ({
      community_images: [...prevState.community_images].concat(fetchedimages)
    }))
  }

  fetchTimelineImages() { // Function to Fetch Timeline Images


    let clientEmail = localStorage.getItem('userEmail');
    axios.post('/test/images', {params: { email: clientEmail }})
    // axios.get('/test/images')
        .then( response => {
          // console.log(response)
          this.setState({
            timeline_images: response.data
          });

          this.setState({
              asyncImages: this.state.timeline_images.map(base64_image => {return {'image': base64_image.image, 'title' : base64_image.title, 'timelineDate' : base64_image.timelineDate}}) // Replace AysncImages Null with an Array of Images taken from
           }, ()=> this.state.asyncImages.length >= 1?
           this.setState({ asyncCarousel: this.state.asyncImages.map(data => <TimelineImage image={data.image} title={data.title} dateAdded={data.timelineDate}/>)}): this.setState({asyncCarousel: true}));
          // () =>
          //(<TimelineImage image={data.image} title={data.title} date={data.date}/>
          //
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  /////////////////////////////////////////////// /* Render */ //////////////////////////////////////////////////////////

  render() {
    return (

    <div>
      <NavLogin active={this.props.active}/>
      <div className="section no-pad-bot" id="index-banner">
        <div className="container" style={{"text-align": "center"}}>
          <br/><br/>
          <h1 className="center blue-grey-text">Welcome to your timeline</h1>
          <br/><br/>
          {this.state.asyncCarousel ? this.state.asyncImages.length >= 1? <Carousel>{this.state.asyncCarousel}</Carousel> : <div style={{color: "white"}}> <h2>Please Upload an Image to get Started </h2> <br/><img src="https://media.giphy.com/media/l1KVcrdl7rJpFnY2s/source.gif"/> </div> : (
            <div class="preloader-wrapper big active" style={{background: "none"}}>
              <div class="spinner-layer spinner-blue">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>

              <div class="spinner-layer spinner-red">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>

              <div class="spinner-layer spinner-yellow">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>

              <div class="spinner-layer spinner-green">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
    );
  }
}

export default Timeline;
