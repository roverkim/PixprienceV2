import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Nav from "../common/NavBar/NavBar";
import Canvas from "../common/ExplosionCanvas";

// Metro UI CSS
import '../../.././node_modules/metro-dist/css/metro.css';
import '../../.././node_modules/metro-dist/css/metro-colors.css';
import '../../.././node_modules/metro-dist/css/metro-icons.css';
import '../../.././node_modules/metro-dist/css/metro-responsive.css';
import '../../.././node_modules/metro-dist/css/metro-rtl.css';
import '../../.././node_modules/metro-dist/css/metro-schemes.css';

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
import './community.nested.css';


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
    const allLiveTiles = document.querySelectorAll('.live-slide');
    allLiveTiles.forEach((tile) => {
      tile.setAttribute('style', 'top: 0; right: 0; left: 0; bottom: 0');
    });
  }
  

  fetchCommunityImages() { // Function to Fetch Community Images
    let preloadImages = [];
    let fetchedImages = [];
    
    for (let i = 0; i <= 46; i++) {
      preloadImages.push({ image: `https://picsum.photos/200/300?image=${i}&blur`, title: 'Loading', notes: 'loading' });
    }
      
    this.setState(prevState => ({
      images: [...prevState].concat(preloadImages)
    }), () => {
      axios.get('/community/images').then((imagesObject) => {

        for (let i = 0; i <= 46; i++) {
          
          if (imagesObject.data[i] !== undefined) {
    
            fetchedImages.push({
              image: imagesObject.data[i].image,
              title: imagesObject.data[i].title,
              notes: imagesObject.data[i].notes
            })
          } else {

            fetchedImages.push({
              image: `https://picsum.photos/200/300?image=${i}`,
              title: 'Loading',
              notes: 'Loading'
            })
          }
        }
        this.setState({ images: fetchedImages });
      })
    });
        
        // imagesObject.data.map((eachImageObject) => {
        //   counter++;
        //   fetchedImages.push({
        //    image: eachImageObject.image || `https://picsum.photos/200/300?image=${counter}`,
        //    title: eachImageObject.title || 'Loading',
        //    notes: eachImageObject.notes || 'Loading'
        //  })
        // });
  }

  render() {

    return (
      <Fragment>
        <Canvas/>
        <div id="community_page">
          <Nav/>
          <div className="metro_wrapper">
            <div className="metro content container" >
              <div className="tile-container">
                {this.state.images.length > 0 ? (
                  <div className="tile_wrapper">
                    <Slideleftcontainer title={this.state.images[0].title} image={this.state.images[0].image} image1={this.state.images[1].image} />
                    <Slideupstatic title={this.state.images[3].title} slogan={this.state.images[3].notes} image={this.state.images[3].image}/>
                    <Slidedowncontainer title={this.state.images[4].title} image={this.state.images[4].image} image1={this.state.images[5].image}/>
                    <Sliderightstatic title={this.state.images[6].title} slogan={this.state.images[6].notes} image={this.state.images[6].image}/>
                    <Slideleftrightcontainer title={this.state.images[7].title} image={this.state.images[7].image} image1={this.state.images[8].image} />
                    <Slideleftstatic title={this.state.images[9].title} slogan={this.state.images[9].notes} image={this.state.images[9].image}/>
                    <Carouselcontainer title='Carousel' slidetitle={this.state.images[10].title} slidetitle1={this.state.images[11].title} slidetitle2={this.state.images[13].title} slogan={this.state.images[10].notes} slogan1={this.state.images[11].notes} image={this.state.images[10].image} image1={this.state.images[11].image} image2={this.state.images[16].image}/>

                    {/* Second Row */}

                    <Slidedownstatic title={this.state.images[12].title} slogan={this.state.images[12].notes} image={this.state.images[12].image}/>
                    <Slideupdowncontainer title={this.state.images[13].title} image={this.state.images[13].image} image1={this.state.images[14].image}/>
                    <Sliderightcontainer title={this.state.images[16].title}  image={this.state.images[16].image} image1={this.state.images[17].image}/>
                    <Imagecontainer title={this.state.images[18].title} label={this.state.images[18].notes} image={this.state.images[18].image}/>
                    <Slideupcontainer title={this.state.images[20].title} image={this.state.images[20].image} image1={this.state.images[24].image} />
                    <Slideupstatic title={this.state.images[21].title} slogan={this.state.images[21].notes} image={this.state.images[21].image}/>
                    <Slidedowncontainer title={this.state.images[44].title} image={this.state.images[44].image} image1={this.state.images[45].image} />

                    {/* Third Row */}
                    <Slideupstatic title={this.state.images[24].title} slogan={this.state.images[24].notes} image={this.state.images[24].image}/>
                    <Slideleftcontainer title={this.state.images[26].title} image={this.state.images[26].image} image1={this.state.images[27].image} />
                    <Sliderightstatic title={this.state.images[28].title} slogan={this.state.images[28].notes} image={this.state.images[28].image}/>
                    <Slidedowncontainer title={this.state.images[29].title} image={this.state.images[29].image} image1={this.state.images[30].image} />
                    <Slideleftstatic title={this.state.images[31].title} slogan={this.state.images[31].notes} image={this.state.images[31].image}/>
                    <Slideleftrightcontainer title={this.state.images[32].title} image={this.state.images[32].image} image1={this.state.images[33].image} />

                    {/* Forth Row */}
                    <Slidedownstatic title={this.state.images[34].title} slogan={this.state.images[34].notes} image={this.state.images[34].image}/>
                    <Slideupcontainer title={this.state.images[35].title} image={this.state.images[35].image} image1={this.state.images[36].image}/>
                    <Slideleftstatic title={this.state.images[37].title} slogan={this.state.images[37].notes} image={this.state.images[37].image}/>
                    <Slideupdowncontainer title={this.state.images[38].title}  image={this.state.images[38].image} image1={this.state.images[39].image} />
                    <Imagecontainer title={this.state.images[40].title} label={this.state.images[40].notes} image={this.state.images[40].image}/>
                    <Sliderightcontainer title={this.state.images[41].title} image={this.state.images[41].image} image1={this.state.images[42].image} />
                    <Sliderightstatic title={this.state.images[43].title} slogan={this.state.images[43].notes} image={this.state.images[43].image}/>
                    <Carouselcontainer title='Carousel' slidetitle={this.state.images[44].title} slidetitle1={this.state.images[44].title} slogan={this.state.images[22].notes} slogan1={this.state.images[23].notes} slogan2={this.state.images[31].notes} image={this.state.images[44].image} image1={this.state.images[45].image} image2={this.state.images[46].image}/>
                  </div>
                ) :
                 <div> Loading </div>}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
      ); // End of Return
  } // End of Render
} // End of Class
