/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import MapContainer from '../../components/TimelineMap/MapContainer';
import Nav from '../../components/NavBar';


/////////////////////////////////////////////// /* Main */ //////////////////////////////////////////////////

export default class MapPage extends Component {

  constructor() {
    super();

    this.state = {
    }

  } // End of Constructor

  render(){
    return(
      <div>
        <Nav/>
        <MapContainer />
      </div>
    );
  }
}; // End of MapPage Export
