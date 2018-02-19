import React from "react";
import FileBase64 from "react-file-base64";
import axios from "axios";
// import ImageUploader from 'react-images-upload';
import Toggle from 'react-toggle';
import "react-toggle/style.css"

class Pixupload extends React.Component {
    constructor(props) {
        super(props);
        this.clientEmail = localStorage.getItem("userEmail");
        console.log(this.clientEmail);

        this.state={
            img: [],
            notes: "",
            title: "",
            location: "",
            userEmail: this.clientEmail,
            imagePreviewUrl: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChangeNotes = this.handleInputChangeNotes.bind(this);
        this.handleInputChangeTitle = this.handleInputChangeTitle.bind(this);
        this.handleInputChangeLocation = this.handleInputChangeLocation.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
        //this.handleToggleChange=this.handleToggleChange.bind(this);
    }
    //FUNCTION FOR WHAT HAPPENS WHEN SUBMIT BUTTON IS CLICKED AKA COLLECTING AND SENDING FILE
    handleSubmit(event) {
        event.preventDefault();

        var data = {
            base64: this.state.img[0].base64,
            title: this.state.title,
            notes: this.state.notes,
            location: this.state.location,
            //toggle: this.state.toggle,
            userEmail: this.clientEmail
        }

        axios.post("/test/upload", data)
            .then(function(response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
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
            img: this.state.img.concat(picture),
            imagePreviewUrl: this.state.img.concat(picture)[0].base64
        });
    }

//CREATION OF THE FORM UI
    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={this.state.imagePreviewUrl} />);
        }

        console.log(this.state);
        return (
            <div>
                <FileBase64
                    multiple={ true }
                    onDone={ this.handleFileUpload.bind(this)}
                />
                <br />

                <img src={imagePreviewUrl} />

                <label>
                    Title:
                    <input
                        name="title"
                        type="text"
                        ref={input => {
                            this.textInput = input;
                            console.log(input);
                            ;
                        }}
                        onChange={this.handleInputChangeTitle} />
                </label>
                <br />
                <label>
                    Notes:
                    <input
                        name="notes"
                        type="text"
                        ref={input => {
                            this.textInput = input;
                            ;
                        }}
                        onChange={this.handleInputChangeNotes}
                    />
                <label>
                    Location:
                      <input
                          name="location"
                          type="text"
                          ref={input => {
                              this.textInput = input;
                          ;
                      }}
                     onChange={this.handleInputChangeLocation} />
                   </label>

                  <br />
                  <label>
                      Share Photo?:
                       <Toggle
                        checked={this.state.Toggle}
                        name='toggle'
                        value='yes'
                        onChange={this.handleToggleChange}/>
                  </label>
                          <br />
                          <br />
                </label>
                <button>
                    SUBMIT UR PIC :)
                </button>
            </div>
        );
    }
}


export default Pixupload
