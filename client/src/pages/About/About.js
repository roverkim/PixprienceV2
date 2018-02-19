import React, {Component, Fragment} from 'react';
import {Col, Row, Carousel} from 'react-materialize';
import Team from '../../components/Team/Team.js';
import teamMember from "./teamMember.json";
import "./AboutPage.css"
import Nav from "../../components/NavBar";

class About extends React.Component {

  //state to be able to map the teamMember props
  state = {
    teamMember
  };



  render() {
    return (
    <Fragment>
      <Nav/>
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
