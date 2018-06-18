import React, { Fragment } from 'react';
import { Col, Row, Carousel } from 'react-materialize';
import Particles from 'react-particles-js';
import Team from './Team';
import Nav from '../common/NavBar/NavBar';
import teamMember from './teamMember.json';
import './AboutPage.css';

class About extends React.Component {

  constructor() {
    super();
    this.state = {
      teamMember,
      reRender: false
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      if (this.state.reRender === false) {
        this.setState({reRender: true})
      } else {
        this.setState({reRender: false})
      }
    });
  }

  render() {

    const particle = (
      <Particles
        style={{
          position: 'absolute',
          height: '100vh !important'
        }}
        params={{
          particles: {
            number: {
              value: 150
            },
            color: {
              value: '#fff'
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 2,
                color: '#ccc'
              },
              image: {
                src: 'http://www.iconsdb.com/icons/preview/white/contacts-xxl.png'
              }
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: false,
                speed: 1
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 1
              }
            },
            line_linked: {
              enable: true,
              distance: 60,
              color: '#fff',
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              random: true,
              direction: 'none',
              straight: false
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse'
              },
              onclick: {
                enable: true,
                mode: 'push'
              }
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.5
              },
              bubble: {
                distance: 100,
                size: 10,
                push: {
                  particles_nb: 4
                }
              }
            }
          }
        }}
      />
    );

    return (
      <Fragment>
        { this.state.reRender ? particle : particle }

        <div id="about_wrapper" className="content">
          <Nav/>
          <section id="about-page">
            <div className="container">
              <Row>
                <Col s={12} className="center-align">
                  {/* Motto and About */}
                  <h6 className="section-subheading">
                    <span style={{ 'font-size': '3rem', color: 'yellow' }}>Pixperia </span>
                    <br/>
                    <span style={{ 'font-size': '1.5rem' }}> Rediscover Your Purest Expriences .</span>
                   </h6>
                </Col>
              </Row>

              <Carousel>
                { this.state.teamMember.map(teamMember =>
                   <Team key={teamMember.id}
                     id={teamMember.id}
                     name={teamMember.name}
                     image={teamMember.image}
                     role={teamMember.role}
                     github={teamMember.github}
                   />)
                 }
              </Carousel>
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}

export default About;
