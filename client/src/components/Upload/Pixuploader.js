import React from 'react';
//import ImageUploader from 'react-images-upload';
import FileBase64 from 'react-file-base64';
import axios from "axios";
// import ImageUploader from 'react-images-upload';
import Toggle from 'react-toggle';
import "react-toggle/style.css"
import StarRatings from 'react-star-ratings';


class Pixupload extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            img: [],
            notes: "",
            location: "",
            rating: 2,
            //checkbox: true,
            title: ""
        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChangeNotes = this.handleInputChangeNotes.bind(this);
        this.handleInputChangeTitle = this.handleInputChangeTitle.bind(this);
        this.handleInputChangeLocation = this.handleInputChangeLocation.bind(this);
        //this.handleClick = this.handleClick.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.changeRating = this.changeRating.bind(this);
    }
    
    //FUNCTION FOR WHAT HAPPENS WHEN SUBMIT BUTTON IS CLICKED AKA COLLECTING AND SENDING FILE
    handleSubmit(event) {
        event.preventDefault();

        var data = {
            base64: this.state.img[0].base64,
            title: this.state.title,
            location: this.state.location,
            rating: this.state.rating,
            //checkbox: this.state.checkbox,
            notes: this.state.notes
        }



{/* }  handleClick() {
           this.setState(prevState => ({
             isToggleOn: !prevState.isToggleOn
           }));
         } */}

        axios.post('/test/upload', data)
            .then(function(response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleInputChangeNotes(e) {
        console.log('handle inpout chance notes@@');
        this.setState({notes: e.target.value})
    }
    handleInputChangeTitle(e) {
        console.log('handle inpout chance notes@@');
        this.setState({title: e.target.value})
    }
    handleInputChangeLocation(e) {
        console.log('handle inpout change location');
        this.setState({location: e.target.value})
    }
    // handleInputChangeCheckbox(e) {
    //     console.log('handle input change checkbox');
    //     this.setState({checkbox: ?????})
    //

    handleFileUpload(picture) {
        this.setState({
            img: this.state.img.concat(picture),
        });
    }

    changeRating(newRating) {
      console.log('handle star click');
      this.setState({
        rating: newRating
      });
    }

//CREATION OF THE FORM UI
    render() {
        console.log(this.state);
        return (
            <div>

    <FileBase64
        multiple={ true }
        onDone={ this.handleFileUpload.bind(this)}
    />
    <br />
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
            onChange={this.handleInputChangeNotes} />
         </label>
         <br />
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


       <StarRatings
         rating={this.state.rating}
         starRatedColor="magenta"
         onChange={this.changeRating}
         numberOfStars={6}
       />
          </label>


<br />

<br />
          <label>
          Share?:
           <Toggle
            checked={this.state.Toggle}
            name='burritoIsReady'
            value='yes'
            onChange={this.handleToggleChange}/>
            </label>
              <br />
              <br />
        <button>
        SUBMIT UR PIC :)
        </button>
    </div>
    );
}
}

export default Pixupload
