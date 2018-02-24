/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////
import React from "react";
import FileBase64 from "react-file-base64";
import axios from "axios";
// import ImageUploader from 'react-images-upload';
import Toggle from 'react-toggle';
import moment from "moment"

/////////////////////////////////////////////// /* Autocomplete */ //////////////////////////////////////////////
import PlacesAutocomplete from 'react-places-autocomplete';
import {geocodeByAddress, geocodeByPlaceId, getLatLng} from 'react-places-autocomplete';

import "react-toggle/style.css";
import "./Pixuploader.css";

class Pixupload extends React.Component {
  constructor(props) {
    super(props);
    this.clientEmail = localStorage.getItem("userEmail");

    this.state = {
      img: [],
      notes: "",
      title: "",
      userEmail: this.clientEmail,
      imagePreviewUrl: null,
      toggle: true,
      address: "Northwestern University",
      submitLoading: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChangeNotes = this.handleInputChangeNotes.bind(this);
    this.handleInputChangeTitle = this.handleInputChangeTitle.bind(this);
    this.handleInputChangeLocation = this.handleInputChangeLocation.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleToggleChange = this.handleToggleChange.bind(this);
  } // End of Constructor

  //FUNCTION FOR WHAT HAPPENS WHEN SUBMIT BUTTON IS CLICKED AKA COLLECTING AND SENDING FILE
  handleSubmit(event) {
    event.preventDefault();

    this.setState({submitLoading: true});

    geocodeByAddress(this.state.address).then(results => getLatLng(results[0])).then(latLng => {
      console.log('Image Lat and Long Are', JSON.stringify(latLng)); // Retrieve Address and Convert into Lat and Long

      var data = { // Payload
        base64: this.state.img[0].base64,
        title: this.state.title,
        notes: this.state.notes,
        lat: latLng.lat,
        lng: latLng.lng,
        share: this.state.toggle,
        userEmail: this.clientEmail,
        timelineDate: moment(Date.now()).format("MMM Do YYYY")
      }
      console.log("Date", moment(Date.now()).format("MMM Do YYYY"))
      console.log("Date (2)", data.dateAdded);
      axios.post("/test/upload", data).then(function(response) {
        console.log(response);
        window.location.reload();
      }).catch(function(error) {
        console.log(error);
      });
    });
  }; // End of handleSubmit

  handleLocationChange(address) {
    this.setState({
      address
    }, console.log("Address is " + address))
  }

  handleInputChangeNotes(e) {
    console.log("handle input chance notes@@");
    this.setState({notes: e.target.value})
  }

  handleInputChangeTitle(e) {
    console.log("handle input chance title");
    this.setState({title: e.target.value})
  }

  handleInputChangeLocation(e) {
    console.log('handle inpout change location');
    this.setState({location: e.target.value})
  }

  handleFileUpload(picture) {
    console.log("fileupload" + JSON.stringify(this.state.img.concat(picture)[0].base64));
    this.setState({
      img: this.state.img.concat(picture), imagePreviewUrl: this.state.img.concat(picture)[0].base64
    });
  }

  handleToggleChange() {
    if (this.state.toggle == true) {
      this.setState({toggle: false})
      console.log("Toggle is " + this.state.toggle);
    } else {
      this.setState({toggle: true})
      console.log("Toggle is " + this.state.toggle);
    }
  }; // End of Toggle Change

  //CREATION OF THE FORM UI
  render() {

    const inputProps = {
      value: this.state.address,
      onChange: this.handleLocationChange
    }

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={this.state.imagePreviewUrl}/>);
    }

    // console.log(this.state);
    return (<div id="uploadImagesModal">

      <div style={{
          "margin-bottom" : "20px"
        }}>
        <label for="share" style={{
            "font-size" : "2.5rem",
            "margin-right" : "20px"
          }}>Share</label>
        <Toggle checked={this.state.toggle} id="share" style={{
            "margin-left" : "40px"
          }} name='toggle' value='yes' onChange={this.handleToggleChange}/>
      </div>
      <br style={{
          margin: "20px"
        }}/>

      <FileBase64 multiple={true} onDone={this.handleFileUpload.bind(this)} style={{
          margin: "20px"
        }}/>
      <br style={{
          margin: "10px"
        }}/>
      <div style={{height: "50%", "margin-top": "15px"}}>
        <img className="responsive-img" src={imagePreviewUrl}/>
      </div>

      <br style={{
          "margin-bottom" : "40px"
        }}/>

      <div className="input-field">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref={input => {
            this.textInput = input;
            // console.log(input);;
          }} onChange={this.handleInputChangeTitle}/>
      </div>

      <br/>

      <div className="input-field">
        <label for="notes">Notes</label>
        <input id="notes" name="notes" type="text" ref={input => {
            this.textInput = input;;
          }} onChange={this.handleInputChangeNotes}/>
      </div>
      <div className="input-field">
        <label for="location" style={{
            "margin-bottom" : "50px"
          }}>Location</label>
        <PlacesAutocomplete id="location" inputProps={inputProps} type="text"/>
      </div>

      <br/> {
        this.state.submitLoading
          ? (<div class="preloader-wrapper big active" style={{
              background: "none"
            }}>
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

            <div class="spinner-layer spinner-red ">
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
          </div>)
          : <button className="btn" onClick={this.handleSubmit}>
              SUBMIT
            </button>
      }
    </div>);
  }
}

export default Pixupload
