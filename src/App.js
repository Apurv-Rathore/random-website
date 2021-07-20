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
          <span
            style={{ fontFamily: "Kirang Haerang,cursive", fontSize: "25px" }}
          >
            To advertise, Mail me
          </span>
          <br />
          {/* <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br /><br /> */}
          <span>
            <a href="mailto:developerapurv@gmail.com">
              <img
                src={gmail}
                style={{ height: "40px", width: "50px" }}
                alt="gfs"
              />
            </a>
          </span>
        </div>
        <div style={{backgroundColor:"black",position:"absolute",top:"-180px",height:"20px",width:"100vw"}}>
        </div>
        <div style={{backgroundColor:"black",position:"absolute",top:"-180px",height:"100vh",width:"10px"}}>
        </div>
        <footer
          style={{
            position: "absolute",
            backgroundColor: "rgb(0, 194, 253)",
            top: "72vh",
            width: "100vw",
          }}
        >
          <span
            style={{ fontFamily: "Kirang Haerang,cursive", fontSize: "17px" }}
          >
            Made with <span style={{ color: "red" }}>♥</span> in India
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
