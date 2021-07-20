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
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}
  return (
    <div className="App">
      <div className="back">
        {/* <video src="WeirdAnimatedGifs" type="gif"></video> */}
        {/* <img src={WeirdAnimatedGifs} alt="fuck" /> */}
        <MainBody />
        <footer
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
        </footer>
      </div>
    </div>
  );
}
export default App;
