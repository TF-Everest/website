import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import ForestImage from "../images/infantry-woodland.jpeg"

const OurUnitPage = () => (
	<div>
		<Helmet
			title="Task Force Everest - About Our Unit"
		/>
		<div className="hero-image">
			<img src={ForestImage} />
		</div>
		<div className="content-row fixed-width-container" style={{ zIndex: 2, position: 'relative' }}>
			<div className="full-row light-grey-block homepage-button-banner">
				<div className="three-quarter-row">
					<h2 className="homepage-hero-title">Our Unit</h2>
					<p className="homepage-hero-body">
						Task Force Everest is a professionally run Military Simulation unit that operates in the EU timezone.
					</p>
					<p className="homepage-hero-body">
						Founded in September 2017 TF Everest is designed to provide the experience and training of the large, US based MILSIM groups
						without requiring EU based members to stay up through the night.
					</p>
					<p className="homepage-hero-body">
						We are a group of dedicated, friendly and professional players who are striving to create the best place to experience Military Simulation
						on this side of the Atlantic.
					</p>
				</div>
			</div>
		</div>
		<div className="content-row fixed-width-container" style={{ zIndex: 2, position: 'relative', marginTop: 50 }}>
			<div className="full-row grey-block homepage-button-banner">
				<div className="three-quarter-row">
					<h2 className="homepage-hero-title">Our Play Times</h2>
					<p className="homepage-hero-body">
						All of our play times are designed to be comfortable for members living and working around most of the EU ( GMT ± 2 hours ) and move in line with daylight savings.
					</p>
					<p className="homepage-hero-body">
						<span className="bold">Official Operations: </span> <br />2000 GMT/BST - 2200 GMT/BST Saturday
						<br /><br />
						<span className="bold">Unit Training: </span> <br />2000 GMT/BST - 2200 GMT/BST Sunday
						<br /><br />
						<span className="bold">Basic Combat Training: </span> <br />2100 GMT/BST - 2230 GMT/BST Wednesday
						<br /><br />
						<span className="bold">Advanced Individual Training: </span> <br />2100 GMT/BST - 2230 GMT/BST Tuesday
					</p>
				</div>
			</div>
		</div>
		<div className="content-row fixed-width-container" style={{ zIndex: 2, position: 'relative', marginTop: 50 }}>
			<div className="full-row grey-block homepage-button-banner">
				<div className="three-quarter-row">
					<h2 className="homepage-hero-title">Our Environment</h2>
					<p className="homepage-hero-body">
						We believe that a great MILSIM unit requires a perfectly crafted environment both in and out of the game.
						To achieve this we dedicate ourselves to creating high quality processes and mission environments for our members.
					</p>
				</div>
			</div>
		</div>
		<div className="content-row fixed-width-container" style={{ display: 'flex'}}>
			<div href="#"  className="half-row blue-block" style={{ flex: 1 }}>
				<h2 className="homepage-hero-subtitle">In Game</h2>
				<p className="homepage-hero-body">
					We offer members three dedicated ARMA 3 servers which are available for use 24 hours a day.
					<br /><br />
					Each server runs our in-house modpack which is continuously tested to maintain stability and is easily installed via the Steam Workshop.
					<br /><br />
					We offer members comprehensive training that allows any level of player to take part in and enjoy the military simulation experience.
					<br /><br />
					All of our servers use the ACE Advanced Medical system which has been carefully tuned to provide a immersive gameplay experience with dedicated medical personnel.
					<br /><br />
					We use the Advanced Combat Radio Environment (ACRE2) to provide a realistic and detailed simulation of a combat radio environment.
					<br /><br />
					All of our game environments enforce realism standards including the removal of Crosshairs, Virtual Waypoints and Hostile Identity Glint.
				</p>
			</div>
			<div href="#" className="half-row light-grey-block" style={{ flex: 1 }}>
				<h2 className="homepage-hero-subtitle">Out of Game</h2>
				<p className="homepage-hero-body">
					We build and maintain custom software to manage the administration of the unit to ensure that every member's progress is tracked and rewarded.
					<br /><br />
					All of our training is backed by extensive written documentation allowing members to review concepts at their own pace.
					<br /><br />
					We maintain a meaningful rank system with protections against nepotism and unfair promotion. All members are processed equally to ensure a fair and consistent promotion cycle.
					<br /><br />
					Our group hosts a dedicated team of JAG (Judge Advocate General) members who work independently to the Chain of Command. Any member who feels they have been treated unfairly by the Chain of Command may refer the issue to the JAG and be given a chance to speak their case.
					<br /><br />
					We operate a freely accessible teamspeak allowing members to enjoy the social aspect of the group by playing other games or simply conversing in some of the dedicated channels provided.
				</p>
			</div>
		</div>
		<div className="content-row fixed-width-container" style={{ marginTop: 50, marginBottom: 50}}>
			<div className="full-row grey-block homepage-button-banner">
				<div className="half-row">
					<h2 className="homepage-hero-subtitle" style={{margin: 0}}>Join the Community</h2>
				</div>
				<div className="half-row">
					<Link className="homepage-hero-button" to="/careers">Enlist Today</Link>
				</div>
			</div>
		</div>
	</div>
)

export default OurUnitPage
