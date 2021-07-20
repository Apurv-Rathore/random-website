import logo from "./logo.svg";
import "./App.css";
import gmail from "./icons/gmail.png";
import MainBody from "./components/MainBody";
import WeirdAnimatedGifs from "./icons/WeirdAnimatedGifs.gif"
function App() {
  return (
    <div className="App" >
      <div className="back" >
        {/* <video src="WeirdAnimatedGifs" type="gif"></video> */}
        {/* <img src={WeirdAnimatedGifs} alt="fuck" /> */}
        <MainBody />
        {/* <footer
          className="footer"
          style={{
            position: "absolute",
            top: "45vh",
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
         */}
      </div>
    </div>
  );
}
export default App;
