// import React from "react";
// import PropTypes from "prop-types";

// // since google always requires the marker to have somesort of defined position
// let marker = new google.maps.Marker({
//     position: somePosition,
//     map: map
// })

// class Marker extends React.Component {

    
//     componentDidUpdate(prevProps) {
//         // component updated
//         if ((this.props.map !== prevProps.map) || (this.props.position !== prevProps.position)) {
//             // The relevant props have changed
//             this.renderMarker();
//         }
//     }

//     renderMarker() {
//         // ...
//         // let{
//         //     map, google, position, mapCenter
//         // } = this.props;
        
//     }





//     // render funciton - returns null since there is not a need to interact with reactDOM
//     render(){
//         return null;
//     }

// }

// // defining the proptypes for the markerlo
// Marker.propTypes = {
//     position: PropTypes.object,
//     map: PropTypes.object
// }


// export default Marker;