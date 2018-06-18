import React from 'react';

import { Modal, Button } from 'react-materialize';
import Pixuploader from '../Upload';

export default function (props) {
  return (
    //  Modal to upload
    <Modal
      id="imageUploadModal"
      trigger={
        <Button
          style={{ height: '100%' }}
          id="uploadBtn"
          href="#imageUploadModal"
        >
          <i className="fa fa-picture-o fa-x2" aria-hidden="true" />
        </Button>
      }
    >
      <div
        className="container"
        style={{ margin: '5px', width: '100%' }}
      >
        <Pixuploader props={props} />
      </div>
    </Modal>
  );
}
