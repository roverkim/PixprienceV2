import React from "react";



export default class TimelineImage extends React.Component{



    render(){
        return(
            <img src={this.props.image} alt={this.props.title} />
        );
    }

}

// export default TimelineImage;
