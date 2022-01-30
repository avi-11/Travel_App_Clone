import "./App.css";
import logo from "./logo.png";
import decore from "./Decore.png";
import image from "./Image.png";
import dec from "./dec.png";
import play from "./play.png";
import img1 from "./img1.png";
import card from "./card.png";
import dest1 from "./dest1.png";
import cardDecore from "./cardDecore.png";
import steps1 from "./steps1.png";
import stepsBig from "./stepsBig.png";
import subsDecor1 from "./subsDecor1.png";
import subsDecor2 from "./subsDecor2.png";
import subsDecor3 from "./subsDecor3.png";

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
      <section className="section1">
        <div className="section1_write">
          <p className="head1">BEST DESTINATIONS AROUND THE WORLD</p>
          <p className="head2">
            <img className="lineDec" src={dec} alt="d" />
            Travel, enjoy and live a new and full life
          </p>
          <p className="head3">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsman it engrossed listening. Park gate sell they
            west hard for the
          </p>
          <div className="decButtons">
            <button className="findButton">Find out more</button>
            <img className="playButton" src={play} alt="d" />
            <span className="play">play demo</span>
          </div>
        </div>
        <div className="decoreBig">
          <img className="image" src={image} alt="sd" />
        </div>
      </section>
      <section>
        <div className="services">
          <p className="category">CATEGORY</p>
          <p className="categoryPitch">We Offer Best Services</p>
        </div>
        <div className="category4">
          <div className="category2">
            <div className="category1">
              <img className="categoryImage" src={img1} alt="f" />
              <p className="categoryTitle">Calculated Weather</p>
              <p className="categoryText">
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
              <img className="card" src={card} alt="d" />
            </div>

            <div className="category1">
              <img className="categoryImage" src={img1} alt="f" />
              <p className="categoryTitle">Calculated Weather</p>
              <p className="categoryText">
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
              <img className="card" src={card} alt="d" />
            </div>
          </div>
          <div className="category2">
            <div className="category1">
              <img className="categoryImage" src={img1} alt="f" />
              <p className="categoryTitle">Calculated Weather</p>
              <p className="categoryText">
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
              <img className="card" src={card} alt="d" />
            </div>
            <div className="category1">
              <img className="categoryImage" src={img1} alt="f" />
              <p className="categoryTitle">Calculated Weather</p>
              <p className="categoryText">
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
              <img className="card" src={card} alt="d" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="services">
          <p className="category">Top Selling</p>
          <p className="categoryPitch">Top Destinations</p>
        </div>
        <div className="Destination3">
          <div className="Destination2">
            <div className="Destination1">
              <img className="destImg" src={dest1} alt="d" />
              <div className="cardContent">
                <div className="content1">
                  <p>Rome,Italy </p>
                  <p>$5.42K</p>
                </div>
                <div className="content2">
                  <i class="fas fa-location-arrow location"></i>
                  <p>12 days trip</p>
                </div>
              </div>
            </div>
            <div className="Destination1">
              <img className="destImg" src={dest1} alt="d" />
              <div className="cardContent">
                <div className="content1">
                  <p>Rome,Italy </p>
                  <p>$5.42K</p>
                </div>
                <div className="content2">
                  <i class="fas fa-location-arrow location"></i>
                  <p>12 days trip</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Destination2">
            <div className="Destination1">
              <img className="destImg" src={dest1} alt="d" />
              <div className="cardContent">
                <div className="content1">
                  <p>Rome,Italy </p>
                  <p>$5.42K</p>
                </div>
                <div className="content2">
                  <i class="fas fa-location-arrow location"></i>
                  <p>12 days trip</p>
                </div>
                <img className="cardDecore" src={cardDecore} alt="d" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="steps">
        <div className="stepsText">
          <p>Easy and Fast</p>
          <p>Book Your Next Trip In 3 Easy Steps</p>
          <div className="stepsTextBar">
            <div className="stepsTextImage">
              <img className="Simage" src={steps1} alt="d" />
            </div>
            <div className="stepsTextInfo">
              <p className="infoTitle">Choose destination</p>
              <p className="info">
                lorem dwjcbi wicbn kwefbc ocbi ocbnwe oiebc cwuibc iwbcc wbckbi.
              </p>
            </div>
          </div>
          <div className="stepsTextBar">
            <div className="stepsTextImage">
              <img className="Simage" src={steps1} alt="d" />
            </div>
            <div className="stepsTextInfo">
              <p className="infoTitle">Choose destination</p>
              <p className="info">
                lorem dwjcbi wicbn kwefbc ocbi ocbnwe oiebc cwuibc iwbcc wbckbi.
              </p>
            </div>
          </div>
          <div className="stepsTextBar">
            <div className="stepsTextImage">
              <img className="Simage" src={steps1} alt="d" />
            </div>
            <div className="stepsTextInfo">
              <p className="infoTitle">Choose destination</p>
              <p className="info">
                lorem dwjcbi wicbn kwefbc ocbi ocbnwe oiebc cwuibc iwbcc wbckbi.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={stepsBig} alt="f" />
        </div>
      </section>
      <section>
        <img className="subsDecor1" src={subsDecor1} alt="d" />
        <img className="subsDecor2" src={subsDecor2} alt="d" />
        <div className="subscribe">
          <p className="subscribeText">
            Subscribe to get information, latest news and other interesting
            facts about cobham
          </p>
          <div className="subscribeBar">
            <input className="mail" type="email" placeholder="Your email" />
            <button className="submit">Subscribe</button>
            <i class="far fa-envelope mailIcon"></i>
          </div>
        </div>
        <img className="subsDecor3" src={subsDecor3} alt="d" />
      </section>
    </div>
  );
}

export default App;
