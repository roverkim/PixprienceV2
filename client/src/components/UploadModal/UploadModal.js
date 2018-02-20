import React from "react";
import {Modal, Col, Row, Button} from "react-materialize";
import Pixuploader from "../Upload/Pixuploader"
import axios from "axios";

class UploadModal extends React.Component{

    // constructor(){
    //     super();
    //     this.state={
    //         imagePreview:"http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder.png"
    //     };

    //     this.setImagePreview = this.setImagePreview.bind(this);
    // }


    //for handling image preview when an image is uploaded for submit
    // setImagePreview(imageFile){
    //     console.log("hiiiiiiiiiiiiiiiiiiiiii")

    //     axios.post("/previewImage", imageFile).then(image =>{
    //         this.setState({
    //             imagePreview: image
    //         }, console.log(image))
    //     });

    // }


    render(){
        return(
            //Modal to upload
            <Modal id="imageUploadModal" trigger={<Button style={{height: "100%" }} id="uploadBtn" href="#imageUploadModal"><i className="material-icons file_upload">file_upload</i></Button>}>
                <div className="container">

                        {/* Row for image preview */}
                        {/* <Row>
                            <Col s={3}></Col>
                            <Col s={6} className="center-align" style={imgPreviewWidth}>
                                <img id="image-preview" src={this.state.imagePreview} alt=""/>
                            </Col>
                            <Col s={3}></Col>
                        </Row>
                        row for file input button
                        <Row>
                            <Col s={12} className="center-align">
                                <Pixuploader  setImagePreview = {this.setImagePreview} />
                            </Col>
                        </Row> */}

                        <Pixuploader />

                        {/* <Row>
                            <Col s={12} className="center-align">
                                {/* Form to input title */}
                                {/* <div className="input-field left-align">
                                    <i className="material-icons prefix">Title</i>
                                    <input id="imageUploadTitle" type="text" required />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12} className="center-align">
                                {/* Form to input title */}
                                {/* <div className="input-field left-align">
                                    <i className="material-icons prefix">Notes</i>
                                    <input id="imageUploadTitle" type="text" required />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12}>
                            </Col>
                        </Row>*/}
                </div>
            </Modal>
        );

    }
}

// const imgPreviewWidth={
//     witdh:"100%"
// }

// const displayInput={
//     display:"none"
// }



export default UploadModal
