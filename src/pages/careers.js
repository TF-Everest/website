import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import BriefingImage from "../images/briefing.png"

const OurUnitPage = () => (
	<div>
		<Helmet
			title="Task Force Everest - About Our Unit"
		/>
		<div className="hero-image">
			<img src={BriefingImage} />
		</div>
		<div className="content-row fixed-width-container" style={{ zIndex: 2, position: 'relative' }}>
			<div className="full-row light-grey-block homepage-button-banner">
				<div className="three-quarter-row">
					<h2 className="homepage-hero-title">Careers</h2>
					<p className="homepage-hero-body">
						Task Force Everest has comprehenesive training opportunities and diverse roles to ensure that all players, regardless of their background, can have an enjoyable MILSIM experience.
					</p>
				</div>
			</div>
		</div>
		<div className="content-row fixed-width-container" style={{ zIndex: 2, position: 'relative' }}>
            <div className="full-row blue-block homepage-button-banner">
                <div className="half-row">
                    <h2 className="homepage-hero-subtitle">Have questions?</h2>
                    <p className="homepage-hero-body">
                        Our recruitment team is happy to help address and questions or concerns you may have prior to your enlistment.
                    </p>
                </div>
                <div className="half-row">
                    <a className="homepage-hero-button" href="ts3server://ts.1st-rrf.com?nickname=Looking%20for%20a%20Recruiter&channel=Recruiter%27s%20Lounge" _target="blank">Talk to a Recruiter on Teamspeak</a>
                </div>
            </div>
        </div>
		<div className="content-row fixed-width-container" style={{ zIndex: 2, position: 'relative', marginTop: 50 }}>
			<div className="full-row grey-block homepage-button-banner">
				<div className="three-quarter-row">
					<h2 className="homepage-hero-title">New Players</h2>
					<p className="homepage-hero-body">
						Players that are new to the ARMA franchise are welcome in Task Force Everest. 
					</p>
					<p className="homepage-hero-body">
						We offer a comprehensive training program targetted at new players called the Introduction to ARMA that offers guidance on controls and mechanics of ARMA before you take BCT. 
						This helps new players keep up with even the most experienced ARMA players during training so they can get the most from their experience.
					</p>
					<p className="homepage-hero-body">
						We recommend new players start in our Infantry unit as Basic Infantry Roles so they can experience the basic aspects of MILSIM and ARMA in general.
					</p>
					<div className="full-row">
						<a className="homepage-hero-button" href="https://goliath.tf-everest.com/apply/application">Enlist</a>
					</div>
				</div>
			</div>
		</div>
		<div className="content-row fixed-width-container" style={{ zIndex: 2, position: 'relative', marginTop: 50 }}>
			<div className="full-row blue-block homepage-button-banner">
				<div className="three-quarter-row">
					<h2 className="homepage-hero-title">Experienced ARMA Players</h2>
					<p className="homepage-hero-body">
						Players that have experience with ARMA III or MILSIM already may wish to apply for more challenging or complex roles within either the Infantry or Cavarly elements of the Task Force.
					</p>
					<p className="homepage-hero-body">
						We offer an accredited transfer program which will allow you to test out of areas of our training pipeline where you have existing knowledge and proceed to more advanced functions in the group.
					</p>
					<p className="homepage-hero-body">
						Those with leadership experience may also be interested in applying to the Infantry Leadership program to kickstart their journey in the group as a combat leader.
					</p>
					<div className="half-row">
						<a className="homepage-hero-button" href="https://goliath.tf-everest.com/apply/application">Enlist</a>
					</div>
					<div className="half-row">
						<a className="homepage-hero-button" href="https://goliath.tf-everest.com/apply/application">Transfer</a>
					</div>
				</div>
			</div>
		</div>
		<div className="content-row fixed-width-container" style={{ marginTop: 50, marginBottom: 50}}>
			<div className="full-row light-grey-block homepage-button-banner">
				<div className="three-quarter-row">
					<h2 className="homepage-hero-title">Special Skills</h2>
					<p className="homepage-hero-body">
						Players with existing skills, either real or virtual, developed in particular areas of special requirement are eligible for fast tracked enlistment programs subject to testing and mutual acceptance.
					</p>
					<p className="homepage-hero-body">
						We are currently running Special Skill enlistment programs for Rotary Pilots, Vehicle Drivers and Infantry Squad Leaders.
					</p>
					<div className="full-row">
						<a className="homepage-hero-button" href="https://goliath.tf-everest.com/apply/application">Enlist</a>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default OurUnitPage
