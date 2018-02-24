import axios from "axios";

/////////////////////////////////////////////// /* AJAX Calls*/ //////////////////////////////////////////////////////////
export default {

  queryBackendGet: function(path, payload) {
    return axios.get(path, payload);
  },

  queryBackendPost: function(path, payload) {
    return axios.post(path, payload);
  },

  imageData: {
      image1 : "./img/01.jpg",
      image2 : "./img/02.jpg",
      image3 : "./img/03.jpg",
      image4 : "./img/04.jpg",
      image5 : "./img/05.jpg",
      image6 : "./img/06.jpg",
      image7 : "./img/07.jpg",
      image8 : "./img/08.jpg",
      image9 : "./img/09.jpg",
      image10 : "./img/10.jpg",
      image11 : "./img/11.jpg",
      image12 : "./img/12.jpg",
      image13 : "./img/13.jpg",
      image14 : "./img/14.jpg",
      image15 : "./img/15.jpg",
      image16 : "./img/16.jpg",
      image17 : "./img/17.jpg",
      image18 : "./img/18.jpg",
      image19 : "./img/19.jpg",
      image20 : "./img/20.jpg",
      image21 : "./img/21.jpg",
      image22 : "./img/22.jpg",
      image23 : "./img/23.jpg",
      image24 : "./img/24.jpg",
      image25 : "./img/25.jpg",
      image26 : "./img/26.jpg",
      image27 : "./img/27.jpg",
      image28 : "./img/28.jpg",
      image29 : "./img/29.jpg",
      image30 : "./img/30.jpg",
      image31 : "./img/01.jpg",
      image32 : "./img/02.jpg",
      image33 : "./img/03.jpg",
      image34 : "./img/04.jpg",
      image35 : "./img/05.jpg",
      image36 : "./img/06.jpg",
      image37 : "./img/07.jpg",
      image38 : "./img/08.jpg",
      image39 : "./img/09.jpg",
      image40 : "./img/10.jpg",
      image41 : "./img/11.jpg",
      image42 : "./img/12.jpg",
      image43 : "./img/13.jpg",
      image44 : "./img/14.jpg",
      image45 : "./img/15.jpg",
      image46 : "./img/16.jpg",
      image47 : "./img/17.jpg",
      image48 : "./img/18.jpg"
  } // End of Image Data

};
