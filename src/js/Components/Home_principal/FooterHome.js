import React from "react";

export default function FooterHome() {
  return (
    <div>
      <footer id="footer" className="footer-1">
        <div className="main-footer widgets-dark typo-light">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget subscribe no-box">
                  <h5 className="widget-title">
                    LA TIENDA<span></span>
                  </h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry..</p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Quick Links<span></span>
                  </h5>
                  <ul className="thumbnail-widget">
                    <li>
                      <div className="thumb-content">
                        <a href="#.">Get Started</a>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <a href="#.">Top Leaders</a>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <a href="#.">Success Stories</a>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <a href="#.">Event/Tickets</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Trabaja con nosotros<span></span>
                  </h5>
                  <p>Accede a nuestra red de tiendas e incrementa tus ganancias</p>
                  <a className="btn" href="#." target="_blank">
                    Registrate Ahora!
                  </a>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Nuestras Redes<span></span>
                  </h5>

                  <p>
                    <a href="mailto:info@domain.com" title="glorythemes">
                      info@domain.com
                    </a>
                  </p>
                  <ul className="social-footer2">
                    <li className="">
                      <a
                        title="youtube"
                        target="_blank"
                        href="https://www.youtube.com/"
                      >
                        
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        title="Facebook"
                      >
                       
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        title="Twitter"
                      >
                      </a>
                    </li>
                    <li className="">
                      <a
                        title="instagram"
                        target="_blank"
                        href="https://www.instagram.com/"
                      >
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>Copyright La Tienda © 2020. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
