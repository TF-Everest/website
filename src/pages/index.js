import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import BreachImage from "../images/breach-stack-team.png"
import AirTrafficImage from "../images/aviation-ground-controller.png"
import AirAssaultLanding from "../images/air-assault-landing.png"

// <a className="homepage-hero-button" href="ts3server://ts.1st-rrf.com?nickname=Looking%20for%20a%20Recruiter&channel=Recruiter%27s%20Lounge" _target="blank">Talk to a Recruiter on Teamspeak</a>

const IndexPage = () => (
    <div>
        <Helmet
            title="Task Force Everest - Professionally executed ARMA III MILSIM in the EU timezone"
        />
        <div className="hero-image">
            <img src={BreachImage} />
        </div>
        <div className="content-row fixed-width-container">
            <div className="half-row grey-block" style={{ height: 400 }}>
                <h1 className="homepage-hero-title">TF Everest</h1>
                <h2 className="homepage-hero-subtitle">An ARMA III MILSIM unit dedicated to tactical excellence</h2>
                <p className="homepage-hero-body">
                    Task Force Everest was founded in September 2017 by experienced leadership from other ARMA groups that
                    wanted to create a realistic and professional unit that practices authentic tactics in the EU timezone.
                </p>
            </div>
            <div className="half-row blue-block" style={{ height: 200, marginTop: 200 }}>
                <h2 className="homepage-hero-subtitle">Enlist Today</h2>
                <Link className="homepage-hero-button" to="/careers">View our enlistment options</Link>
            </div>
        </div>
        <div className="content-row fixed-width-container" style={{ zIndex: 2, position: 'relative' }}>
            <div className="full-row light-grey-block homepage-button-banner">
                <div className="half-row">
                    <h2 className="homepage-hero-subtitle">A Unique approach to Military Simulation</h2>
                    <p className="homepage-hero-body">
                        TF Everest combines strong in-game tactical simulation with a structured Chain of Command and Rank system.
                    </p>
                </div>
                <div className="half-row">
                    <Link className="homepage-hero-button" to="/our-unit">Learn more about our Unit</Link>
                </div>
            </div>
        </div>
        <div className="hero-image" style={{ marginTop: -100, marginBottom: -100, zIndex: 1, position: 'relative' }}>
            <img src={AirAssaultLanding} />
        </div>
        <div className="content-row fixed-width-container" style={{ zIndex: 2, position: 'relative' }}>
            <div className="full-row light-grey-block homepage-button-banner">
                <div className="three-quarter-row">
                    <h2 className="homepage-hero-title">Our Force</h2>
                    <p className="homepage-hero-body">
                        We bring together Air, Land and Infantry elements to create an authentic combined arms experience.
                    </p>
                </div>
            </div>
        </div>
        <div className="content-row fixed-width-container">
            <Link to="/forces/infantry" className="half-row blue-block homepage-link-div" style={{  }}>
                <h2 className="homepage-hero-subtitle">1st NATO Infantry Regiment</h2>
                <p className="homepage-hero-body">
                    The 1st NATO Infantry Regiment is a fictional, NATO wide infantry regiment structured around a British light infantry platoon.
                    <br /><br />
                    Members of the 1st Infantry train on a wide variety of realistic infantry tactics inspired by both British and American military doctrine.
                </p>
            </Link>
            <Link to="/forces/fleet-air-arm" className="half-row grey-block homepage-link-div" style={{ }}>
                <h2 className="homepage-hero-subtitle">Royal Navy <br /> Fleet Air Arm</h2>
                <p className="homepage-hero-body">
                    The Royal Navy Fleet Air Arm is responsible for the operation and maintenance of Britain's maritime air presence.
                    <br /><br />
                    The members of our Fleet Air Arm detachment are tasked with providing both air mobility and fire support to the Task Force.
                </p>
            </Link>
        </div>
        <div className="content-row fixed-width-container" style={{ zIndex: 2, position: 'relative' }}>
            <Link to="/forces/cavalry" className="full-row light-grey-block homepage-link-div" style={{ paddingTop: 30, paddingBottom: 30 }}>
                <h2 className="homepage-hero-subtitle">23rd NATO Cavalry Regiment</h2>
                <p className="homepage-hero-body">
                    The 23rd NATO Cavalry Regiment is a fictional, NATO wide Light Armoured Vehicle regiment based around a US Bradley Brigade Combat Team.
                    <br /><br />
                    Members of the 23rd Cavalry provide Armoured vehicle crews to the task force who operate ground vehicles in support of the 1st Infantry.
                </p>
            </Link>
        </div>
        <div className="hero-image" style={{ marginTop: -100, marginBottom: 0, zIndex: 1, position: 'relative' }}>
            <img src={AirTrafficImage} />
        </div>
    </div>
)

export default IndexPage
