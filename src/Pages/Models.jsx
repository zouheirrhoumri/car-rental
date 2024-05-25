import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import CarImg1 from "../images/cars-big/clio5.png";
import CarImg2 from "../images/cars-big/dacia1.jpg";
import CarImg3 from "../images/cars-big/opel1.jpg";
import CarImg4 from "../images/cars-big/clio.jpg";
import CarImg5 from "../images/cars-big/logan.jpeg";
import CarImg6 from "../images/cars-big/2008.jpg";
import CarImg7 from "../images/cars-big/ford.png";
import CarImg8 from "../images/cars-big/micra.png";
import CarImg9 from "../images/cars-big/opel1.jpg";
import { Link } from "react-router-dom";

function Models() {
  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">
          <div className="models-div">
            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg1} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Clio 5</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>300 DH</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; renault clio 
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box" >
              <div className="models-div__box__img">
                <img src={CarImg2} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Dacia stepway</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>300 DH</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; VW
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg3} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Opel Corsa </p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>300 DH</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Camry
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg4} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Clio 4</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>250 DH</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; ModernLine
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg7} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Ford Fietsa</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>250 DH</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; ModernLine
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg8} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Nissan Micra</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>300 DH</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; ModernLine
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg9} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>citroën c3</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>250 DH</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; ModernLine
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg5} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Dacia Logan </p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>220 DH</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Benz GLK
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg6} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Peugeot 208 </p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>350 DH</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; CC
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; automatic
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>+212 661-292787</h3>
              </span>
            </div>
          </div>
        </div>
      
        
        <Footer />
      </section>
    </>
  );
}

export default Models;
