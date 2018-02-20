import React, {Component, Fragment} from 'react';
import {Col, Row, Carousel} from 'react-materialize';
import Team from '../../components/Team/Team.js';
import teamMember from "./teamMember.json";
import "./AboutPage.css"
import Nav from "../../components/NavBar";
import Particles from 'react-particles-js';

class About extends React.Component {

  state = {
    teamMember //state to be able to map the teamMember props
  };

  // componentDidMount(){
  //   particlesJS.load('particles-js', 'particles.json', function(){
  //     console.log('particles.json loaded...');
  //   });
  // }

  render() {
    return (
      <Fragment>
        <Nav/>
        <Particles style={{position:"absolute", height: "100vh !important"}}
           params={{
            "particles" : {
              "number": {
                "value": 450
              },
              "color": {
                "value": "#fff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 2,
                  "color": "#ccc"
                },
                "image": {
                  "src": "http://www.iconsdb.com/icons/preview/white/contacts-xxl.png"
                }
              },
              "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 1
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 30
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 120,
                "color": "#fff",
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 5,
                "random": true,
                "direction": "none",
                "straight": false
              }
            },
            "interactivity" : {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                }
              },
              "modes": {
                "repulse": {
                  "distance": 100,
                  "duration": 0.5
                },
                "bubble": {
                  "distance": 100,
                  "size": 10
                }
              }
            }
          }}/>
        <div className="content">
          <section id="about-page">
            <div className="container" style={containerBackground}>
              <Row>
                <Col s={12} className="center-align">
                  {/* Motto and About */}
                  <h3 class="section-heading">Our Motto</h3>
                  <h6 class="section-subheading">Pixprience is your life. your real life. Uncurated. Unfiltered. Unfollowed.</h6>
                  <h3 class="section-heading">About</h3>
                  <h6 class="section-subheading">Pixperience was inspired to bring you your experiences in their purest form. Use pixprience and rediscover You.</h6>
                  {/* Team Members Carousel */}
                  <h3 class="section-heading">Meet the Team</h3>
                  <h6 class="section-subheading">The behind your Pixperience experience</h6>
                </Col>
              </Row>
              <Carousel className="carousel" id="teamCarousel">
                {this.state.teamMember.map(teamMember => (<Team id={teamMember.id} name={teamMember.name} image={teamMember.image} role={teamMember.role}/>))}
              </Carousel>
            </div>
          </section>
        </div>

    </Fragment>);
  }
}

const containerBackground = {
  backgroundColor: "white"
}

export default About;
