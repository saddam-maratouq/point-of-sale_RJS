import React from "react";

//css
import "./footer.css";

//logo
import logo from "../../assets/Images/food-logo.png";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-white ">
      <section className="d-flex justify-content-between p-4  footer-Content ">
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="d-flex  flex-column flex-md-row">
          <a href="" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </section>

      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* <h6 className="text-uppercase fw-bold">Eram</h6> */}
              <img src={logo} alt="logo" className="logo-footer img-fluid " />

              <p>
                Here you can get amazing and delicious food with incredible
                chefs
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Products</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#fff",
                  height: "2px",
                }}
              />
              <p>
                <a href="#!" className="text-white">
                  pizza
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  burger
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Arabian food
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  juice
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#fff",
                  height: "2px",
                }}
              />
              <p>
                <a href="#!" className="text-white">
                  Your Account
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Home
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  About us
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 list-info ">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#fff",
                  height: "2px",
                }}
              />
              <p>
                <i className="fas fa-home mr-3"></i> Adam Street, New York, NY
                535022
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> SqFood@gmail.com
              </p>
              <p>
                <i className="fas fa-phone "></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print "></i> + 01 294 233 00
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
