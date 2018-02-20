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

class Timeline extends Component {

  constructor() {
    super();

    this.state = {
      community_images: [],
      timeline_images: [],
      secretData: '',
      carousel: false,
      asyncImages: null
    }
    this.fetchCommunityImages = this.fetchCommunityImages.bind(this);
    this.fetchTimelineImages = this.fetchTimelineImages.bind(this);
  } // End of Constructor

  componentWillMount() {
    this.fetchCommunityImages();
    this.fetchTimelineImages();
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

                asyncImages: this.state.timeline_images.map(base64_image => {return {'image': base64_image.image, 'title' : base64_image.title, 'dateAdded' : base64_image.dateAdded}}) // Replace AysncImages Null with an Array of Images taken from
          }, ()=>this.setState({ asyncCarousel: this.state.asyncImages.map(data => <TimelineImage image={data.image} title={data.title} dateAdded={data.dateAdded}/>)})); 
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
        <div className="container">
          <br/><br/>
          <h1 className="header center blue-grey-text">Welcome to your timeline</h1>

        </div>
      </div>
      {/* Condition for Rendering Async Carousel Images  */}
     {/* {this.state.asyncCarousel ? (<Carousel>{this.state.asyncCarousel.forEach(element => {
       return{element};
     })}</Carousel>) : (<div> Carousel is Loading </div>)} */}
    {/* {this.state.asyncImages ? this.setState({ asyncCarousel: this.state.asyncImages.map(data => <TimelineImage image={data.image} title={data.title} dateAdded={data.dateAdded}/>)}) : console.log("you suck")} */}
    {this.state.asyncCarousel ? <Carousel>{this.state.asyncCarousel}</Carousel> : console.log("WE ONLY MARGINALLY SUCK")}

    </div>
    );
  }
}

export default Timeline;
