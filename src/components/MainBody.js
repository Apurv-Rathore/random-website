import React, { Component ,setState} from "react";
import Randomlink from "../Link";
import WeirdAnimatedGifs from "../icons/WeirdAnimatedGifs.gif"
class MainBody extends React.Component {
    constructor(props){
        super(props);
        this.state={
            Links:[],
            url:"www.google.com"
        }
        
    //     this.handleClick.bind(this);
    // let Links = Randomlink();
    // this.setState({Links})
    // this.LINKK = Links;
    }
  
//   componentDidMount() {
//     let Links = Randomlink();
//     this.setState({Links})
//     this.LINKK = Links;
//   }
  handleClick = () => {
    let Links = Randomlink();
    let index = Math.floor(Math.random() * Links.length) ;
    window.open(Links[index])
  }
  
  render() {
    return (
      <div
        className="container"
        style={{ marginTop: "38vh", fontFamily: "Kirang Haerang,cursive"}}
      >
        <div className="text-container" >
          <span style={{ fontSize: "40px",color: "#black" }}> Click to Go On </span>
          <span style={{ color: "red",fontSize: "60px" }}>Random</span>
          <br />
          <br />
          <br />
          <br />
          <span style={{ paddingTop: 10, color: "#" }}>
            {" "}
            <span style={{ fontSize: "60px" }}> USELESS </span>
            <br />
            <br />
            <br />
            <br />
            <span style={{ color: "red",fontSize: "80px" }}>Website</span>
          </span>
          <br />
          <br />
          <br />
          <br />
          <button
            onClick={this.handleClick}
            className="glow-on-hover"
            style={{ marginLeft: "-10px" }}
          >
            CLICK HERE{" "}
          </button>
        </div>
        
      </div>
      
    );
  }
}

export default MainBody;
