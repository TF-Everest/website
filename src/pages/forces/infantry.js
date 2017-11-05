import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import InfantryHeader from "../../images/infantry-training.png"

const InfantryPage = () => (
	<div>
		<Helmet
			title={`Task Force Everest - Infantry Regiment "Warrior"`}
		/>
		<div className="hero-image">
			<img src={InfantryHeader} />
		</div>
		<div className="content-row fixed-width-container">
			<div className="half-row grey-block" style={{ height: 400 }}>
				<h1 className="homepage-hero-title">&#x201c;Warrior&#x201d;</h1>
				<h2 className="homepage-hero-subtitle">1st NATO Infantry Regiment</h2>
				<p className="homepage-hero-body">
					The 1st NATO Infantry Regiment is a fictional, multinational infantry force under the operational command of NATO.
					<br /><br />Fusing both American and British infantry tactics the 1st are experts in ground warfare.
				</p>
			</div>
			<div className="half-row blue-block" style={{ height: 200, marginTop: 200 }}>
				<h2 className="homepage-hero-subtitle bold">Commander</h2>
				<h2 className="homepage-hero-subtitle">CPT Striker, A.</h2>

			</div>
		</div>
		<div className="content-row fixed-width-container" style={{ zIndex: 2, position: 'relative' }}>
			<div className="full-row light-grey-block homepage-button-banner">
				<div className="half-row">
					<h2 className="homepage-hero-subtitle">Interested in joining?</h2>
					<p className="homepage-hero-body">
						We are currently recruiting for multiple infantry roles including Medics, Combat Life Savers and Autoriflemen.
					</p>
				</div>
				<div className="half-row">
					<Link className="homepage-hero-button" to="/careers">Enlist today</Link>
				</div>
			</div>
		</div>
		<div className="content-row fixed-width-container" style={{ zIndex: 2, position: 'relative', marginTop: 50 }}>
			<div className="full-row blue-block homepage-button-banner">
				<div className="three-quarter-row">
					<h2 className="homepage-hero-title">Our Structure</h2>
					<p className="homepage-hero-body">
						The 1st Infantry is modelled on a modified British Infantry Platoon where each Platoon has a Platoon HQ and three Sections.
						<br /><br />
						Each section is comprised of two teams of four men, lead by a Section Leader.
					</p>
				</div>
			</div>
		</div>
		<div className="content-row fixed-width-container" style={{ display: 'flex'}}>
			<div href="#"  className="half-row light-grey-block" style={{ flex: 1 }}>
				<h2 className="homepage-hero-subtitle">Team Leader</h2>
				<p className="homepage-hero-body">
					Team Leaders in the 1st Infantry are responsible for leading one of the two four man teams that make up each section.
					<br /><br />
					Each team leader is extensively trained in infantry battle drills, combat leadership and platoon level communication.
				</p>
			</div>
			<div href="#" className="half-row grey-block" style={{ flex: 1 }}>
				<h2 className="homepage-hero-subtitle">Combat Life Saver</h2>
				<p className="homepage-hero-body">
					Combat Life Savers are the first line of medical care in the 1st Infantry and serve as trained medical personnel within each team.
					<br /><br />
					Each CLS is trained to handle a wide variety of medical situations, keep their team combat effective and stabilise more severe casualties for transfer to further care.
				</p>
			</div>
		</div>
		<div className="content-row fixed-width-container" style={{marginBottom: 50, display: 'flex'}}>
			<div href="#"  className="half-row grey-block" style={{ flex: 1 }}>
				<h2 className="homepage-hero-subtitle">Autorifleman</h2>
				<p className="homepage-hero-body">
					Autoriflemen use Light and Heavy Machine Guns to provide teams with supression in support of maenouvers.
					<br /><br />
					Within a team Autoriflemen are required to have a strong understanding of their role in infantry battle drills and types of fire. Many Autoriflemen later become team leaders.
				</p>
			</div>
			<div href="#" className="half-row light-grey-block" style={{ flex: 1 }}>
				<h2 className="homepage-hero-subtitle">Grenadier</h2>
				<p className="homepage-hero-body">
					Grenadiers carry rifles equipped with underbarrel grenade launchers allowing them to employ ranged explosives to achieve fire superiority.
					<br /><br />
					In addition to providing ranged explosives the Grenadier also carries additional thrown devices including Fragmentation and Stun Grenades.
				</p>
			</div>
		</div>
		<div className="content-row fixed-width-container" style={{ zIndex: 2, marginBottom: 50, position: 'relative' }}>
			<div className="full-row light-grey-block homepage-button-banner">
				<div className="half-row">
					<h2 className="homepage-hero-subtitle">Looking to transfer?</h2>
					<p className="homepage-hero-body">
						We offer an accredited transfer program from other MILSIM groups that will allow you to cross certify equivalent training programs offered by Task Force Everest.
					</p>
				</div>
				<div className="half-row">
					<Link className="homepage-hero-button" to="/careers">Learn More</Link>
				</div>
			</div>
		</div>
	</div>
)

export default InfantryPage