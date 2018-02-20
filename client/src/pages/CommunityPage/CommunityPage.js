/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////
import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';


/////////////////////////////////////////////// /* Components */ //////////////////////////////////////////////////
import API from '../../utils/API.js'
import Nav from "../../components/NavBar";

/////////////////////////////////////////////// /* CSS */ //////////////////////////////////////////////////
// Metro UI CSS
import '../../.././node_modules/metro-dist/css/metro.css';
import '../../.././node_modules/metro-dist/css/metro-colors.css';
import '../../.././node_modules/metro-dist/css/metro-icons.css';
import '../../.././node_modules/metro-dist/css/metro-responsive.css';
import '../../.././node_modules/metro-dist/css/metro-rtl.css';
import '../../.././node_modules/metro-dist/css/metro-schemes.css';
import './community.css';

import Slideleftcontainer from './Tiles/Slideleftcontainer';
import Sliderightcontainer from './Tiles/Sliderightcontainer';
import Slideleftrightcontainer from './Tiles/Slideleftrightcontainer';
import Slideupcontainer from './Tiles/Slideupcontainer';
import Slidedowncontainer from './Tiles/Slidedowncontainer';
import Slideupdowncontainer from './Tiles/Slideupdowncontainer';
import Imagecontainer from './Tiles/Imagecontainer';
import Carouselcontainer from './Tiles/Carouselcontainer';
import Slideupstatic from './Tiles/Slideupstatic';
import Slidedownstatic from './Tiles/Slidedownstatic';
import Slideleftstatic from './Tiles/Slideleftstatic';
import Sliderightstatic from './Tiles/Sliderightstatic';
// import Zoomoutstatic from './Tiles/Zoomoutstatic';
// import Zoominstatic from './Tiles/Zoominstatic';
/////////////////////////////////////////////// /* Main */ //////////////////////////////////////////////////

export default class CommunityPage extends Component {

  constructor() {
    super();

    this.state = {
      images: []
    }

  } // End of Constructor

  componentWillMount() {
    this.fetchCommunityImages();
  }

  fetchCommunityImages() { // Function to Fetch Community Images

    let preloadImages = [];
    let fetchedImages = [];

    for (let key in API.imageData) { // Get Images from API Ajax Call and Store into Variable fetchedImages
      preloadImages.push(API.imageData[key]);
    }

    console.log(preloadImages)

    this.setState(prevState => ({
      images: [...prevState].concat(preloadImages)
    }), () => console.log(this.state))

    API.queryBackendGet('/community/images').then(imagesObject => {

      console.log("Getting Images")
      imagesObject.data.map(eachImageObject =>
        fetchedImages.push(eachImageObject.image)
      )

      console.log("Fetched Images are " + fetchedImages)
      this.setState(prevState => ({
        images: fetchedImages
      }), () => console.log(this.state))

    })


  }

  render() {
    //bg-darkCobal
    return (<Fragment>
    <Nav/>
      <div className="metro content container" style={{position: "relative", left: "100px"}}>
        <div className="tile-container" >


          {/* First Row */}
          <Slideleftcontainer title='Slide Left' image={this.state.images[1]} image1={this.state.images[2]} image2={this.state.images[3]} image3={this.state.images[4]} image4={this.state.images[5]}/>
          <Slideupstatic title="Static Slide Up" slogan="Test" image = {this.state.images[6]}/>
          <Slidedowncontainer title='Slide Down' image={this.state.images[7]} image1={this.state.images[8]} image2={this.state.images[9]} image3={this.state.images[10]} image4={this.state.images[11]}/>
          <Sliderightstatic title="Static Slide Right" slogan="Test" image = {this.state.images[12]}/>
          <Slideleftrightcontainer title='Slide Left Right' image={this.state.images[13]} image1={this.state.images[14]} image2={this.state.images[15]} image3={this.state.images[16]} image4={this.state.images[17]} />
          <Slideleftstatic title="Static Slide Left" slogan="Test" image = {this.state.images[18]}/>


          <Carouselcontainer title='Carousel' slidetitle="Main Text" slidetitle1="Second Main Text" slidetitle2="Third Main Text"  slogan="First Slogan"
            slogan1="Second Slogan" slogan2="Third Slogan" image={this.state.images[19]} image1={this.state.images[20]} image2={this.state.images[21]}
          slogan="First Text" slogan1="Second Text" slogan2="Third Test"/>

          {/* Second Row */}
          <Slidedownstatic title="Static Slide Down" slogan="Test" image = {this.state.images[22]}/>
          <Slideupdowncontainer title='Slide Up Down' image={this.state.images[23]} image1={this.state.images[24]} image2={this.state.images[25]} image3={this.state.images[26]} image4={this.state.images[27]}/>
          <Slideleftstatic title="Static Slide Left" slogan="Test" image = {this.state.images[10]}/>
          <Sliderightcontainer title='Slide Right' image={this.state.images[28]} image1={this.state.images[29]} image2={this.state.images[0]} image3={this.state.images[1]} image4={this.state.images[2]}/>
          <Imagecontainer title="Image Container" label="container" image = {this.state.images[10]}/>
          <Slideupcontainer title='Slide Up' image={this.state.images[3]} image1={this.state.images[4]} image2={this.state.images[5]} image3={this.state.images[6]} image4={this.state.images[7]}/>
          <Slideupstatic title="Static Slide Up" slogan="Test" image = {this.state.images[8]}/>



          {/* Third Row  */}
          <Carouselcontainer title='Carousel' slidetitle="Main Text" slidetitle1="Second Main Text" slidetitle2="Third Main Text"  slogan="First Slogan"
            slogan1="Second Slogan" slogan2="Third Slogan" image={this.state.images[9]} image1={this.state.images[10]} image2={this.state.images[11]}
          slogan="First Text" slogan1="Second Text" slogan2="Third Test"/>
          <Slideupstatic title="Static Slide Up" slogan="Test" image = {this.state.images[12]}/>
          <Slideleftcontainer title='Slide Left' image={this.state.images[13]} image1={this.state.images[14]} image2={this.state.images[15]} image3={this.state.images[16]} image4={this.state.images[17]}/>
          <Sliderightstatic title="Static Slide Right" slogan="Test" image = {this.state.images[18]}/>
          <Slidedowncontainer title='Slide Down' image={this.state.images[19]} image1={this.state.images[20]} image2={this.state.images[21]} image3={this.state.images[22]} image4={this.state.images[23]}/>
          <Slideleftstatic title="Static Slide Left" slogan="Test" image = {this.state.images[24]}/>
          <Slideleftrightcontainer title='Slide Left Right' image={this.state.images[25]} image1={this.state.images[26]} image2={this.state.images[27]} image3={this.state.images[28]} image4={this.state.images[29]} />


          {/* Forth Row  */}
          <Slidedownstatic title="Static Slide Down" slogan="Test" image = {this.state.images[0]}/>
          <Slideupcontainer title='Slide Up' image={this.state.images[1]} image1={this.state.images[2]} image2={this.state.images[3]} image3={this.state.images[4]} image4={this.state.images[5]}/>
          <Slideleftstatic title="Static Slide Left" slogan="Test" image = {this.state.images[6]}/>
          <Slideupdowncontainer title='Slide Up Down' image={this.state.images[7]} image1={this.state.images[8]} image2={this.state.images[9]} image3={this.state.images[10]} image4={this.state.images[11]}/>
          <Imagecontainer title="Image Container" label="container" image = {this.state.images[12]}/>
          <Sliderightcontainer title='Slide Right' image={this.state.images[13]} image1={this.state.images[14]} image2={this.state.images[15]} image3={this.state.images[16]} image4={this.state.images[17]}/>
          <Sliderightstatic title="Static Slide Right" slogan="Test" image = {this.state.images[18]}/>



        </div>
      </div>
    </Fragment>); // End of Return
  } // End of Render
} // End of Class
