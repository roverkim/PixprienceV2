import React from "react";



export default class TimelineImage extends React.Component{



    render(){
        return(
             <div className="center-align">
                 <a class="carousel-item" href="#"> <img className="responsive-img materialboxed" src={this.props.image} alt={this.props.title}/>
                     <h4>{this.props.title}</h4>
                     <h6 className="text-muted">{this.props.dateAdded}</h6>
                 </a>
             </div>
        );
    }

}

// export default TimelineImage;
