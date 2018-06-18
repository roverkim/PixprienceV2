import React, { Component } from 'react';
import { Carousel } from 'react-materialize';
import axios from 'axios';
import TimelineImage from '../common/TimelineImage/TimelineImage';
import NavBar from '../common/NavBar/NavBar';
import Canvas from '../common/TimelineCanvas/TimelineCanvas';
import './Timeline.css';

export default class Timeline extends Component {

  constructor() {
    super();
    this.state = {
      community_images: [],
      timeline_images: [],
      asyncImages: null,
      asyncCarousel: null,
      resize: false
    }
    this.fetchTimelineImages = this.fetchTimelineImages.bind(this);
    this.getBrowserLocation = this.getBrowserLocation.bind(this);
  } // End of Constructor

  componentWillMount() {
    this.fetchTimelineImages();
    this.getBrowserLocation();
  }

  getBrowserLocation() {
    
    if (navigator.geolocation) {
      console.log('Geolocation is supported!');

      let geoSuccess = function(position) {
        let startPos = position;
        localStorage.setItem('browserLat', startPos.coords.latitude);
        localStorage.setItem('browserLong', startPos.coords.longitude);
      };

      let geoError = function(error) {
        console.log('Error occurred. Error code: ' + error.code);
      }
    
      let geoOptions = {
        timeout : 10 * 10000
      }

      navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);
    } else {
      console.log('Geolocation is not supported for this Browser/OS.');
    }
  }

  /////////////////////////////////////////////// /* Fetching Images */ //////////////////////////////////////////////////////

  fetchTimelineImages() { // Function to Fetch Timeline Images

    let clientEmail = localStorage.getItem('userEmail');
    axios.post('/test/images', {
      params: {
        email: clientEmail
      }
    }).then((response) => {
      this.setState({ timeline_images: response.data });
    
      this.setState({
        asyncImages: this.state.timeline_images.map((base64Image) => {
          return {
            image: base64Image.image,
            title: base64Image.title,
            timelineDate: base64Image.timelineDate
          };
        })
      }, () => {
        this.state.asyncImages.length >= 1 ? this.setState(
          {
            asyncCarousel: this.state.asyncImages.map(data => <TimelineImage image={data.image} title={data.title} dateAdded={data.timelineDate} />)
          }
        ) : this.setState({ asyncCarousel: true });
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  /////////////////////////////////////////////// /* Render */ //////////////////////////////////////////////////////

  render() {
    window.addEventListener('resize', () => {
      this.state.resize ? this.setState({ resize: false }) : this.setState({ resize: true });
    });
    return (
      <div id="timelinepage">
        <NavBar active={this.props.active} />
        { this.state.resize ? <Canvas /> : (<div> <Canvas /> </div>) }
        <div className="section no-pad-bot" id="index-banner">
          <div className="container">
            <div className="row" style={{ 'justify-content': 'center', 'align-items': 'center' }}>
              <h1 className="center timeline_header">
                Welcome to your timeline
              </h1>
            </div>
            <br />
            <br />
            { this.state.asyncCarousel ?
              ( this.state.asyncImages.length >= 1 ?
                <Carousel>{ this.state.asyncCarousel }</Carousel>
                  : <div style={{color: "white"}}>
                      <h2>Please Upload an Image to get Started
                      </h2>
                      <br/>
                      <img src="https://media.giphy.com/media/l1KVcrdl7rJpFnY2s/source.gif"/>
                    </div>
              ):
              (
                <div class="preloader-wrapper big active" style={{
                  background: "none",
                  "margin-top" : "20px"
                }}>
                <div class="spinner-layer spinner-blue">
                  <div class="circle-clipper left">
                    <div class="circle"></div>
                  </div>
                  <div class="gap-patch">
                    <div class="circle"></div>
                  </div>
                  <div class="circle-clipper right">
                    <div class="circle"></div>
                  </div>
                </div>

                <div class="spinner-layer spinner-red">
                  <div class="circle-clipper left">
                    <div class="circle"></div>
                  </div>
                  <div class="gap-patch">
                    <div class="circle"></div>
                  </div>
                  <div class="circle-clipper right">
                    <div class="circle"></div>
                  </div>
                </div>

                <div class="spinner-layer spinner-yellow">
                  <div class="circle-clipper left">
                    <div class="circle"></div>
                  </div>
                  <div class="gap-patch">
                    <div class="circle"></div>
                  </div>
                  <div class="circle-clipper right">
                    <div class="circle"></div>
                  </div>
                </div>

                <div class="spinner-layer spinner-green">
                  <div class="circle-clipper left">
                    <div class="circle"></div>
                  </div>
                  <div class="gap-patch">
                    <div class="circle"></div>
                  </div>
                  <div class="circle-clipper right">
                    <div class="circle"></div>
                  </div>
                </div>
              </div>
              )
             }
          </div>
        </div>
      </div>
    );
  }
}
