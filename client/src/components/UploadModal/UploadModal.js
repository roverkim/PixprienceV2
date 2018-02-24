import React from "react";
import {Modal, Col, Row, Button} from "react-materialize";
import Pixuploader from "../Upload/Pixuploader"
import axios from "axios";

class UploadModal extends React.Component {

  render() {
    return (
    //Modal to upload
    <Modal id="imageUploadModal" trigger={<Button style = {{height: "100%" }} id ="uploadBtn" href ="#imageUploadModal">
      <i className="fa fa-picture-o fa-x2" aria-hidden="true"></i>
    </Button>}>
      <div className="container" style={{margin: "5px"}}>
        <Pixuploader/>
      </div>
    </Modal>);

  }
}

export default UploadModal
