/////////////////////////////////////////////// /* Imports */ ////////////////////////////////////////////////
import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

/////////////////////////////////////////////// /* Components */ ////////////////////////////////////////////////
import API from '../../utils/API.js'
import Nav from "../../components/NavBar";

/////////////////////////////////////////////// /* CSS */ ////////////////////////////////////////////////
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
/////////////////////////////////////////////// /* Main */ ////////////////////////////////////////////////

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

  componentDidMount() {
    // Little Canvas things
    var canvas = document.querySelector("#canvas"),
      ctx = canvas.getContext('2d');

    // Set Canvas to be window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Configuration, Play with these
    var config = {
      particleNumber: 800,
      maxParticleSize: 10,
      maxSpeed: 40,
      colorVariation: 50
    };

    // Colors
    var colorPalette = {
      bg: {
        r: 12,
        g: 9,
        b: 29
      },
      matter: [
        {
          r: 36,
          g: 18,
          b: 42
        }, { // darkPRPL
          r: 78,
          g: 36,
          b: 42
        }, { // rockDust
          r: 252,
          g: 178,
          b: 96
        }, { // solorFlare
          r: 253,
          g: 238,
          b: 152
        } // totesASun
      ]
    };

    // Some Variables hanging out
    var particles = [],
      centerX = canvas.width / 2,
      centerY = canvas.height / 2,
      drawBg,

      // Draws the background for the canvas, because space
      drawBg = function(ctx, color) {
        ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      };

    // Particle Constructor
    var Particle = function(x, y) {
      // X Coordinate
      this.x = x || Math.round(Math.random() * canvas.width);
      // Y Coordinate
      this.y = y || Math.round(Math.random() * canvas.height);
      // Radius of the space dust
      this.r = Math.ceil(Math.random() * config.maxParticleSize);
      // Color of the rock, given some randomness
      this.c = colorVariation(colorPalette.matter[Math.floor(Math.random() * colorPalette.matter.length)], true);
      // Speed of which the rock travels
      this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), .7);
      // Direction the Rock flies
      this.d = Math.round(Math.random() * 360);
    };

    // Provides some nice color variation
    // Accepts an rgba object
    // returns a modified rgba object or a rgba string if true is passed in for argument 2
    var colorVariation = function(color, returnString) {
      var r,
        g,
        b,
        a,
        variation;
      r = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation / 2)) + color.r);
      g = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation / 2)) + color.g);
      b = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation / 2)) + color.b);
      a = Math.random() + .5;
      if (returnString) {
        return "rgba(" + r + "," + g + "," + b + "," + a + ")";
      } else {
        return {r, g, b, a};
      }
    };

    // Used to find the rocks next point in space, accounting for speed and direction
    var updateParticleModel = function(p) {
      var a = 180 - (p.d + 90); // find the 3rd angle
      p.d > 0 && p.d < 180
        ? p.x += p.s * Math.sin(p.d) / Math.sin(p.s)
        : p.x -= p.s * Math.sin(p.d) / Math.sin(p.s);
      p.d > 90 && p.d < 270
        ? p.y += p.s * Math.sin(a) / Math.sin(p.s)
        : p.y -= p.s * Math.sin(a) / Math.sin(p.s);
      return p;
    };

    // Just the function that physically draws the particles
    // Physically? sure why not, physically.
    var drawParticle = function(x, y, r, c) {
      ctx.beginPath();
      ctx.fillStyle = c;
      ctx.arc(x, y, r, 0, 2 * Math.PI, false);
      ctx.fill();
      ctx.closePath();
    };

    // Remove particles that aren't on the canvas
    var cleanUpArray = function() {
      particles = particles.filter((p) => {
        return (p.x > -100 && p.y > -100);
      });
    };

    var initParticles = function(numParticles, x, y) {
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(x, y));
      }
      particles.forEach((p) => {
        drawParticle(p.x, p.y, p.r, p.c);
      });
    };

    // That thing
    window.requestAnimFrame = (function() {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    })();

    // Our Frame function
    var frame = function() {
      // Draw background first
      drawBg(ctx, colorPalette.bg);
      // Update Particle models to new position
      particles.map((p) => {
        return updateParticleModel(p);
      });
      // Draw em'
      particles.forEach((p) => {
        drawParticle(p.x, p.y, p.r, p.c);
      });
      // Play the same song? Ok!
      window.requestAnimFrame(frame);
    };

    // Click listener
    document.body.addEventListener("click", function(event) {
      var x = event.clientX,
        y = event.clientY;
      cleanUpArray();
      initParticles(config.particleNumber, x, y);
    });

    // First Frame
    frame();

    // First particle explosion
    initParticles(config.particleNumber);
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
      imagesObject.data.map(eachImageObject => fetchedImages.push(eachImageObject.image))

      console.log("Fetched Images are " + fetchedImages)
      this.setState(prevState => ({images: fetchedImages}), () => console.log(this.state))

    })

  }

  render() {
    //bg-darkCobal
    return (<Fragment>
      <Nav/>
      <canvas id="canvas" style={{position: "absolute"}}></canvas>
      <div className="metro content container" style={{
          position: "relative",
          left: "100px"
        }}>
        <div className="tile-container">

          {/* First Row */}
          <Slideleftcontainer title='Slide Left' image={this.state.images[1]} image1={this.state.images[2]} image2={this.state.images[3]} image3={this.state.images[4]} image4={this.state.images[5]}/>
          <Slideupstatic title="Static Slide Up" slogan="Test" image={this.state.images[6]}/>
          <Slidedowncontainer title='Slide Down' image={this.state.images[7]} image1={this.state.images[8]} image2={this.state.images[9]} image3={this.state.images[10]} image4={this.state.images[11]}/>
          <Sliderightstatic title="Static Slide Right" slogan="Test" image={this.state.images[12]}/>
          <Slideleftrightcontainer title='Slide Left Right' image={this.state.images[13]} image1={this.state.images[14]} image2={this.state.images[15]} image3={this.state.images[16]} image4={this.state.images[17]}/>
          <Slideleftstatic title="Static Slide Left" slogan="Test" image={this.state.images[18]}/>

          <Carouselcontainer title='Carousel' slidetitle="Main Text" slidetitle1="Second Main Text" slidetitle2="Third Main Text" slogan="First Text" slogan1="Second Text" slogan2="Third Test" image={this.state.images[19]} image1={this.state.images[20]} image2={this.state.images[21]}/> {/* Second Row */}
          <Slidedownstatic title="Static Slide Down" slogan="Test" image={this.state.images[22]}/>
          <Slideupdowncontainer title='Slide Up Down' image={this.state.images[23]} image1={this.state.images[24]} image2={this.state.images[25]} image3={this.state.images[26]} image4={this.state.images[27]}/>
          <Slideleftstatic title="Static Slide Left" slogan="Test" image={this.state.images[10]}/>
          <Sliderightcontainer title='Slide Right' image={this.state.images[28]} image1={this.state.images[29]} image2={this.state.images[0]} image3={this.state.images[1]} image4={this.state.images[2]}/>
          <Imagecontainer title="Image Container" label="container" image={this.state.images[10]}/>
          <Slideupcontainer title='Slide Up' image={this.state.images[3]} image1={this.state.images[4]} image2={this.state.images[5]} image3={this.state.images[6]} image4={this.state.images[7]}/>
          <Slideupstatic title="Static Slide Up" slogan="Test" image={this.state.images[8]}/> {/* Third Row */}
          <Carouselcontainer title='Carousel' slidetitle="Main Text" slidetitle1="Second Main Text" slidetitle2="Third Main Text" slogan="First Text" slogan1="Second Text" slogan2="Third Test" image={this.state.images[9]} image1={this.state.images[10]} image2={this.state.images[11]}/>
          <Slideupstatic title="Static Slide Up" slogan="Test" image={this.state.images[12]}/>
          <Slideleftcontainer title='Slide Left' image={this.state.images[13]} image1={this.state.images[14]} image2={this.state.images[15]} image3={this.state.images[16]} image4={this.state.images[17]}/>
          <Sliderightstatic title="Static Slide Right" slogan="Test" image={this.state.images[18]}/>
          <Slidedowncontainer title='Slide Down' image={this.state.images[19]} image1={this.state.images[20]} image2={this.state.images[21]} image3={this.state.images[22]} image4={this.state.images[23]}/>
          <Slideleftstatic title="Static Slide Left" slogan="Test" image={this.state.images[24]}/>
          <Slideleftrightcontainer title='Slide Left Right' image={this.state.images[25]} image1={this.state.images[26]} image2={this.state.images[27]} image3={this.state.images[28]} image4={this.state.images[29]}/> {/* Forth Row */}
          <Slidedownstatic title="Static Slide Down" slogan="Test" image={this.state.images[0]}/>
          <Slideupcontainer title='Slide Up' image={this.state.images[1]} image1={this.state.images[2]} image2={this.state.images[3]} image3={this.state.images[4]} image4={this.state.images[5]}/>
          <Slideleftstatic title="Static Slide Left" slogan="Test" image={this.state.images[6]}/>
          <Slideupdowncontainer title='Slide Up Down' image={this.state.images[7]} image1={this.state.images[8]} image2={this.state.images[9]} image3={this.state.images[10]} image4={this.state.images[11]}/>
          <Imagecontainer title="Image Container" label="container" image={this.state.images[12]}/>
          <Sliderightcontainer title='Slide Right' image={this.state.images[13]} image1={this.state.images[14]} image2={this.state.images[15]} image3={this.state.images[16]} image4={this.state.images[17]}/>
          <Sliderightstatic title="Static Slide Right" slogan="Test" image={this.state.images[18]}/>

        </div>
      </div>
    </Fragment>); // End of Return
  } // End of Render
} // End of Class
