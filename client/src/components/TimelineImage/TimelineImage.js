import React from "react";



export default class TimelineImage extends React.Component{



    render(){
        return(
             <div className="center-align">
                 <a class="carousel-item" href="#"> <img className="responsive-img materialboxed" src={this.props.image} alt={this.props.title}/>
                     <h6>{this.props.title}</h6>
                     <p className="text-muted">{this.props.dateAdded}</p>
                 </a>
             </div>
        );
    }

}

// export default TimelineImage;
