import React from "react";
import "../css/Footer.css"
export function Footer() {
  return (
    <>
      {/* Footer */}
      
      <footer className="footer text-center text-lg-start bg-dark text-light mt-5">

        
        {/* Section: Links  */}
        <section>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />
                  Company name
                </h6>
                <p className="text-light">
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p className="text-light">
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p className="text-light">
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p className="text-light">
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p className="text-light">
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p className="text-light">
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p className="text-light">
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p className="text-light">
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p className="text-light">
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p className="text-light">
                  <i className="fas fa-home me-3" /> New York, NY 10012, US
                </p>
                <p className="text-light">
                  <i className="fas fa-envelope me-3" />
                  info@example.com
                </p>
                <p className="text-light">
                  <i className="fas fa-phone me-3" /> + 01 234 567 88
                </p>
                <p className="text-light">
                  <i className="fas fa-print me-3" /> + 01 234 567 89
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            ITI.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
}
