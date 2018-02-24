import React from "react";



export default class TimelineImage extends React.Component{



    render(){
        return(
             <div className="center-align">
                 <a class="carousel-item" href="#"> <img className="responsive-img materialboxed" src={this.props.image} alt={this.props.title}/>
                     <h6 style={{color: "white", "font-family" : "'Didact Gothic', sans-serif"}}>{this.props.title}</h6>
                     <p style={{"font-family" : "'Didact Gothic', sans-serif"}} className="text-muted">{this.props.dateAdded}</p>
                 </a>
             </div>
        );
    }

}

// export default TimelineImage;
