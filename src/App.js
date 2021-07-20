import logo from "./logo.svg";
import "./App.css";
import gmail from "./icons/gmail.png";
import MainBody from "./components/MainBody";
import WeirdAnimatedGifs from "./icons/WeirdAnimatedGifs.gif";
function App() {
  var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "0px",
    width: "100%",
  };

  var phantom = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%",
  };
  return (
    <div className="App">
      <div className="back">
        {/* <video src="WeirdAnimatedGifs" type="gif"></video> */}
        {/* <img src={WeirdAnimatedGifs} alt="fuck" /> */}
        <MainBody />
        <div
          style={{
            alignContent: "center",
            marginTop: "80px",
          }}
        >
          <span style={{fontFamily: "Kirang Haerang,cursive", fontSize:"25px"}}>To advertise, Mail me</span>
          <br />
          {/* <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br /><br /> */}
          <span>
            <a
              href="mailto:developerapurv@gmail.com"
            >
              <img
                src={gmail}
                style={{ height: "40px", width: "50px" }}
                alt="gfs"
              />
            </a>
          </span>
        </div>
        <footer 
        style={{position:"absolute",backgroundColor:"rgb(0, 194, 253)",
        top:"73vh",width:"100vw"}}>
          {/* Made with <span style="color: #e25555;">&#9829;</span> in Switzerland */}
          {/* <span>
    Made with <i class="fa fa-heart pulse"></i> in <a href="https://www.google.de/maps/place/Augsburger+Puppenkiste/@48.360357,10.903245,17z/data=!3m1!4b1!4m2!3m1!1s0x479e98006610a511:0x73ac6b9f80c4048f" target="_blank">Auxburg</a>
</span> */}

<span style={{fontFamily: "Kirang Haerang,cursive"}}>
  
Made with <span style={{color:"red"}}>♥</span>  in India
</span>
        </footer>
        {/* <footer
          className="footer"
          style={{
            position: "absolute",
            top: "72vh",
            width: "100vw",
            alignContent: "center",
          }}
        >
          <span>
            <a
              href="mailto:developerapurv@gmail.com"
              style={{ marginLeft: "-100px" }}
            >
              <img
                src={gmail}
                style={{ height: "30px", width: "40px" }}
                alt="gfs"
              />
            </a>
          </span>
        </footer> */}
      </div>
    </div>
  );
}
export default App;
