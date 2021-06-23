import logo from "./logo.svg";
import "./App.css";
import gmail from "./icons/gmail.png"
import MainBody from "./components/MainBody";
function App() {
  return (
    <div className="App">
      <MainBody />
      <footer className="footer" style={{position:'absolute',top:"45vh",width:'100vw',alignContent:'center'}}>
        
        <span>
        
        <a href="mailto:developerapurv@gmail.com" style={{marginLeft:"-100px"}}><img src={gmail} style={{height:"30px",width:"40px"}} alt="gfs" /></a>
        </span>
      </footer>
    </div>
  );
}
export default App;
