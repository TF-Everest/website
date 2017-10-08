import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import '../styles/index.scss'

import Logo from "../images/tf-everest.png"

const Header = () => (
  <div className={`header-container`}>
      <div className="navbar">
          <ul className="left navbar-links">
              <li className="navbar-link">
                  <Link to="/our-unit">
                      About Us
                  </Link>
              </li>
              <li className="navbar-link">
                  <Link to="/careers">
                      Careers
                  </Link>
              </li>
          </ul>
          <div className="icon-container">
              <Link to="/">
                  <img className="unit-logo" src={Logo} />
              </Link>
          </div>
          <ul className="left navbar-links">
              <li className="navbar-link">
                  <a href="https://goliath.tf-everest.com">
                      Personnel Area
                  </a>
              </li>
              <li className="navbar-link">
                  <a href="https://forum.tf-everest.com">
                      Forums
                  </a>
              </li>
          </ul>
      </div>
  </div>
)

const Footer = () => (
    <div className={`footer-container`}>
        <div className="footer">
            <div className="content-row fixed-width-container">
                <div className="half-row">
                    <h1 className="footer-subtitle">Task Force Everest</h1>
                    <p className="footer-text">
                        TF Everest is a gaming group that plays within ARMA III. We are not affiliated with any real world group or entities.
                        <br />
                    </p>
                    <p className="footer-text">
                        This website is not affiliated or authorized by Bohemia Interactive a.s. Bohemia Interactive, ARMA, DAYZ and all associated logos and designs are trademarks or registered trademarks of Bohemia Interactive
                    </p>
                </div>
                <div className="half-row" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img className="footer-unit-logo" src={Logo} />
                </div>
            </div>
        </div>
    </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Header />
    <div>
      {children()}
    </div>
    <Footer/>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
