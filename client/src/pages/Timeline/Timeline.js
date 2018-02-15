import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Carousel} from "react-materialize"
import Pixupload from "../../components/Upload/Pixuploader"
import UploadModal from "../../components/UploadModal/UploadModal"
import API from '../../utils/API.js'
import TimelineImage from  '../../components/TimelineImage'
import Auth from '../../modules/Auth';
import NavLogin from '../../components/NavBar';
import axios from "axios";

class Timeline extends Component {

  constructor() {
    super();

    this.state = {
      community_images: [],
      timeline_images: [],
      secretData: ''
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
    console.log("HEYYYYYY" + xhr.response)
    // if (xhr.status === 200) {
    //   this.setState({
    //     secretData: xhr.response.message
    //   });
    // }
  });
  xhr.send();

              console.log(window.localStorage.getItem('userEmail'));
}

/////////////////////////////////////////////// /* */ //////////////////////////////////////////////////////////

  fetchCommunityImages() { // Function to Fetch Community Images

    let fetchedimages = [];

    for (let key in API.imageData) { // Get Images from API Ajax Call and Store into Variable fetchedImages
      fetchedimages.push(API.imageData[key]);
    }

    this.setState(prevState => ({
      community_images: [...prevState.community_images].concat(fetchedimages)
    }), () => console.log(this.state))
  }

  fetchTimelineImages() { // Function to Fetch Timeline Images
    // console.log(`THIS: ${this}`)
    axios.get('/test/images')
        .then( response => {
          console.log(response)
          this.setState({
            timeline_images: response.data
          });

          console.log(this.state.timeline_images)

        })
        .catch(function (error) {
          console.log(error);
        });
  }

  render() {
    return (

      <div>
      <NavLogin/>
      <nav className="teal accent-4" role="navigation">
        {/* <Pixupload /> */}
        <UploadModal />
        <div className="nav-wrapper container">
          <ul id="nav-mobile" className="side-nav">
            <li>
              <a href="#">#3651</a>
            </li>
          </ul>
          <a href="#" data-activates="nav-mobile" className="button-collapse">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <br/><br/>
          <h1 className="header center blue-grey-text">Welcome to your timeline</h1>
          { this.state.timeline_images.map((base64_image) => <a className="carousel-item"> <img src={base64_image.image} style={{width: 304, height: 228}}  alt="Image" /> </a>)}
        </div>
      </div>

    <div className="carousel" id="imageCarousel">

    </div>

    </div>
    );
  }
}

export default Timeline;
