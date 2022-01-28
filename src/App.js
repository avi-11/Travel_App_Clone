import "./App.css";
import logo from "./logo.png";
import decore from "./Decore.png";

function App() {
  return (
    <div className="App">
      <img className="decore" src={decore} alt="s" />

      <nav className="navbar">
        <img className="logo" src={logo} alt="img" />
        <div className="goto_links">
          <p className="links">Destinations</p>
          <p className="links">Hotels</p>
          <p className="links">Flights</p>
          <p className="links">Bookings</p>
          <p className="links">Login</p>
          <p className="links">Sign up</p>

          <select className="select_languages links">
            <option className="select_options">EN</option>
            <option className="select_options">HN</option>
          </select>
        </div>
      </nav>
    </div>
  );
}

export default App;
