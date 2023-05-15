import LitWit from "./images/LitWit.jpg";
import LW from "./images/LifeSoLit.jpg";
import LWH from "./images/LW_BW.jpg";
import VUL from "./images/Vulgar.jpg";
import "./Components.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <>
      <SideMenu />
      <HeaderImg ArtistName="Lit Wit" />

      <h2 className="albums">Albums</h2>
      <div className="wrapper">
        <Card
          img={LitWit}
          title="Feels"
          description="Lit Wit - 2021"
          button="Play Album"
        />
        <Card
          img={LW}
          title="Life So Lit"
          description="Lit Wit - 2019"
          button="Play Album"
        />
        <Card
          img={VUL}
          title="Vulgar"
          description="Lit Wit - 2019"
          button="Play Album"
        />
      </div>
      <div className="videos">
        <h2 className="videosHead"> Videos </h2>

        <div className="vidSec">
          <iframe
          className="YTvid"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/cZ7YMDXOcdo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <iframe
          className="YTvid"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rfB0UCw4Ckc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default App;

interface CardProps {
  img: string;
  title: string;
  description: string;
  button: string;
}

function Card(props: CardProps) {
  return (
    <div className="card" style={{ width: "18rem;" }}>
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-description">{props.description}</p>
        <button
          type="button"
          className="btn btn-outline-success btn-lg"
          data-bs-toggle="button"
        >
          {props.button}
        </button>
      </div>
    </div>
  );
}

function SideMenu() {
  return (
    <>
      <nav className="navbar sticky-top bg-body-tertiary">
        <div className="container-fluid">
          <div className="d-flex justify-content-center align-items-center">
            <a className="navbar-brand" href="#">
              <div className="HeadBtnLocation">
                <img
                  className="logo"
                  src="https://www.jamfeed.com/images/JamFeed-Logo--Text-on-Side--MEDIUM---black--green-799x163-1-p-500.png"
                  alt="Logo"
                />
              </div>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-top"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Library
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Music
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Videos
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

interface HeaderImgProps {
  ArtistName: string;
}
function HeaderImg(props: HeaderImgProps) {
  return (
    <>
      <div className="TopImgContainer">
        <img src={LWH} alt="Header Image" />
        <h2 className="ArtistName">{props.ArtistName}</h2>
      </div>
    </>
  );
}
