/* Import */
import React, {Component} from 'react';
import FileBase64 from 'react-file-base64';
import axios from 'axios';
// import ImageUploader from 'react-images-upload';
import Toggle from 'react-toggle';
import moment from 'moment';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import './Pixuploader.nested.css';
import './ReactToggle.css';

class Pixupload extends Component {
  constructor(props) {
    super(props);
    this.clientEmail = localStorage.getItem("userEmail");

    this.state = {
      img: [],
      notes: '',
      title: '',
      userEmail: this.clientEmail,
      imagePreviewUrl: null,
      toggle: true,
      address: "",
      submitLoading: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChangeNotes = this.handleInputChangeNotes.bind(this);
    this.handleInputChangeTitle = this.handleInputChangeTitle.bind(this);
    this.handleInputChangeLocation = this.handleInputChangeLocation.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleToggleChange = this.handleToggleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  } // End of Constructor

  handleChange = (address) => {
    this.setState({ address })
  }

  handleSelect = (address) => {
    this.setState({ address : address });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }
  handleSubmit(event) {
    event.preventDefault();
    
    if(this.state.address.length < 1){
      this.setState({address: "Address Required!"});
      return;
    }

    this.setState({submitLoading: true});

    geocodeByAddress(this.state.address).then(results => getLatLng(results[0])).then(latLng => {
      
      localStorage.setItem("picturelastlat", latLng.lat);
      localStorage.setItem("picturelastlong", latLng.lng );
    
      var data = { // Payload
        base64: this.state.img[0].base64,
        title: this.state.title,
        notes: this.state.notes,
        lat: latLng.lat || 1.352083,
        lng: latLng.lng || 103.819836,
        share: this.state.toggle,
        userEmail: this.clientEmail,
        timelineDate: moment(Date.now()).format("MMM Do YYYY")
      }

      axios.post("/test/upload", data).then(function(response) {
        window.location.reload();
      }).catch(function(error) {
        console.log(error);
      });
    });
  }; // End of handleSubmit

  handleLocationChange(address) {
    this.setState({
      address
    });
  }

  handleInputChangeNotes(e) {
    this.setState({notes: e.target.value})
  }

  handleInputChangeTitle(e) {
    this.setState({title: e.target.value})
  }

  handleInputChangeLocation(e) {
    this.setState({location: e.target.value})
  }

  handleFileUpload(picture) {
    this.setState({
      img: this.state.img.concat(picture), imagePreviewUrl: this.state.img.concat(picture)[0].base64
    });
  }

  handleToggleChange() {
    if (this.state.toggle === true) {
      this.setState({toggle: false})
    } else {
      this.setState({toggle: true})
    }
  }; // End of Toggle Change

  render() {

    const inputProps = {
      value: this.state.address,
      onChange: this.handleLocationChange
    }

    const { imagePreviewUrl } = this.state;
    

    return (
      <div id="uploadImagesModal">
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
        <div style={{
            height: "50%",
            "margin-top" : "15px"
          }}>
          <img className="responsive-img" src={imagePreviewUrl}/>
        </div>

        <br style={{
            "margin-bottom" : "40px"
          }}/>

        <div className="input-field">
          <label for="title">Title</label>
          <input id="title" name="title" type="text" ref={input => {
              this.textInput = input;
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
          <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input'
              })}
            />
            <div className="autocomplete-dropdown-container">
              {suggestions.map(suggestion => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div {...getSuggestionItemProps(suggestion, { className, style })}>
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
        </div>

        <br/>
        {
          this.state.submitLoading ?
            (
              <div class="preloader-wrapper big active" style={{
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
              </div>
          )
            :
          <button className="btn" onClick={this.handleSubmit}>
            SUBMIT
          </button>
        }
      </div>
    );
  }
}

export default Pixupload
