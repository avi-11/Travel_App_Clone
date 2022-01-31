import "./App.css";
import logo from "./img/logo.png";
import decore from "./img/Decore.png";
import image from "./img/Image.png";
import dec from "./img/dec.png";
import play from "./img/play.png";
import img1 from "./img/img1.png";
import card from "./img/card.png";
import dest1 from "./img/dest1.png";
import cardDecore from "./img/cardDecore.png";
import steps1 from "./img/steps1.png";
import stepsBig from "./img/stepsBig.png";
import subsDecor1 from "./img/subsDecor1.png";
import subsDecor2 from "./img/subsDecor2.png";
import subsDecor3 from "./img/subsDecor3.png";
import facebook from "./img/facebook.png";
import insta from "./img/insta.png";
import play1 from "./img/play1.png";
import play2 from "./img/play2.png";
import card2 from "./img/card2.png";
import card3 from "./img/card3.png";
import card4 from "./img/card4.png";
import dest2 from "./img/dest2.jpg";
import dest3 from "./img/dest3.png";
import steps2 from "./img/steps2.png";
import steps3 from "./img/steps3.png";

function App() {
  return (
    <div className="App">
      <img className="decore" src={decore} alt="s" />

      <nav className="navbar">
        <div className="logoDiv">
          <img className="logo" src={logo} alt="img" />
        </div>
        <div className="goto_links">
          <p className="links">Destinations</p>
          <p className="links">Hotels</p>
          <p className="links">Flights</p>
          <p className="links">Bookings</p>
          <p className="links">Login</p>
          <p className="links sign">Sign up</p>

          <select className="select_languages links">
            <option className="select_options links">EN</option>
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
            <div className="cat">
              <div className="category1">
                <img className="categoryImage" src={img1} alt="f" />
                <p className="categoryTitle">Calculated Weather</p>
                <p className="categoryText">
                  Built Wicket longer admire do barton vanity itself do in it.
                </p>
              </div>
              <div className="cardDec">
                <img className="card" src={card} alt="d" />
              </div>
            </div>

            <div className="cat1">
              <div className="category1">
                <img className="categoryImage" src={card4} alt="f" />
                <p className="categoryTitle">Best Flights</p>
                <p className="categoryText">
                  Built Wicket longer admire do barton vanity itself do in it.
                </p>
              </div>
              <div className="cardDec1">
                <img className="card" src={card} alt="d" />
              </div>
            </div>
          </div>
          <div className="category2">
            <div className="cat2">
              <div className="category1">
                <img className="categoryImage" src={card3} alt="f" />
                <p className="categoryTitle">Local Events</p>
                <p className="categoryText">
                  Built Wicket longer admire do barton vanity itself do in it.
                </p>
              </div>
              <div className="cardDec2">
                <img className="card" src={card} alt="d" />
              </div>
            </div>
            <div className="cat3">
              <div className="category1">
                <img className="categoryImage" src={card2} alt="f" />
                <p className="categoryTitle">Customization</p>
                <p className="categoryText">
                  Built Wicket longer admire do barton vanity itself do in it.
                </p>
              </div>
              <div className="cardDec3">
                <img className="card" src={card} alt="d" />
              </div>
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
            <div className="Destination1 left">
              <img className="destImg" src={dest1} alt="d" />
              <div className="cardContent">
                <div className="content1">
                  <p>Rome,Italy </p>
                  <p>$5.42K</p>
                </div>
                <div className="content2">
                  <i class="fas fa-location-arrow location"></i>
                  <p>10 days trip</p>
                </div>
              </div>
            </div>
            <div className="Destination1">
              <img className="destImg" src={dest2} alt="d" />
              <div className="cardContent">
                <div className="content1">
                  <p>London, UK</p>
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
            <div className="Destination1 right">
              <img className="destImg" src={dest3} alt="d" />
              <div className="cardContent">
                <div className="content1">
                  <p>Full Europe </p>
                  <p>$5.42K</p>
                </div>
                <div className="content2">
                  <i class="fas fa-location-arrow location"></i>
                  <p>28 days trip</p>
                </div>
                <img className="cardDecore" src={cardDecore} alt="d" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="steps">
        <div className="stepsText">
          <p className="text1">Easy and Fast</p>
          <p className="text2">Book Your Next Trip In 3 Easy Steps</p>
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
              <img className="Simage" src={steps2} alt="d" />
            </div>
            <div className="stepsTextInfo">
              <p className="infoTitle">Make Payment</p>
              <p className="info">
                lorem dwjcbi wicbn kwefbc ocbi ocbnwe oiebc cwuibc iwbcc wbckbi.
              </p>
            </div>
          </div>
          <div className="stepsTextBar">
            <div className="stepsTextImage">
              <img className="Simage" src={steps3} alt="d" />
            </div>
            <div className="stepsTextInfo">
              <p className="infoTitle">Reach Airport on selected Date</p>
              <p className="info">
                lorem dwjcbi wicbn kwefbc ocbi ocbnwe oiebc cwuibc iwbcc wbckbi.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img className="stepsImg" src={stepsBig} alt="f" />
        </div>
      </section>
      <section className="subsBox">
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
      <footer className="footer">
        <div>
          <p className="logoName">Jadoo.</p>
          <p className="logoText">
            Book your trip in minutes, get your full control for longer.
          </p>
        </div>
        <div className="footertext">
          <div>
            <p className="boldFooter">Company</p>
            <p className="normalFooter">About</p>
            <p className="normalFooter">Careers</p>
            <p className="normalFooter">Mobile</p>
          </div>
          <div>
            <p className="boldFooter">Contact</p>
            <p className="normalFooter">Help/FAQ</p>
            <p className="normalFooter">Press</p>
            <p className="normalFooter">Affiliates</p>
          </div>
          <div>
            <p className="boldFooter">More</p>
            <p className="normalFooter">Airlinefess</p>
            <p className="normalFooter">Airline</p>
            <p className="normalFooter">Low fair tips</p>
          </div>
        </div>
        <div>
          <div>
            <img src={facebook} alt="f" />
            <img src={insta} alt="e/" />
            <img src={facebook} alt="f" />
          </div>
          <div>
            <p>Discover our app</p>
          </div>
          <div>
            <img src={play1} alt="d" />
            <img src={play2} alt="d" />
          </div>
        </div>
      </footer>
      <p className="reserved">All Rights Reserved @jadoo.co </p>
    </div>
  );
}

export default App;
