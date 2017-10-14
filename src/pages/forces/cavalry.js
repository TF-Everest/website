import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import CavalryHeader from "../../images/cavalry-desert.jpeg"
import PaladinImage from "../../images/paladin.jpg"
import BradleyImage from "../../images/bradley.png"

const CavalryPage = () => (
	<div>
		<Helmet
			title={`Task Force Everest - Cavalry Regiment "Mustang"`}
		/>
		<div className="hero-image">
			<img src={CavalryHeader} />
		</div>
		<div className="content-row fixed-width-container">
			<div className="half-row grey-block" style={{ height: 400 }}>
				<h1 className="homepage-hero-title">&#x201c;Mustang&#x201d;</h1>
				<h2 className="homepage-hero-subtitle">23rd NATO Cavalry Regiment</h2>
				<p className="homepage-hero-body">
					Based around a US Army Armoured Brigade Combat Team the 23rd NATO Cavalry Regiment provides fire support and ground logistics capabilities to the Task Force.
					<br /><br />Working in unison with Infantry forces they are specialists in Mounted Warfare and Combat Engineering.
				</p>
			</div>
			<div className="half-row blue-block" style={{ height: 200, marginTop: 200 }}>
				<h2 className="homepage-hero-subtitle bold">Commander</h2>
				<h2 className="homepage-hero-subtitle">2LT Jordens, C.</h2>

			</div>
		</div>
		<div className="content-row fixed-width-container" style={{ zIndex: 2, position: 'relative' }}>
			<div className="full-row light-grey-block homepage-button-banner">
				<div className="half-row">
					<h2 className="homepage-hero-subtitle">Interested in joining?</h2>
					<p className="homepage-hero-body">
						We are currently recruiting for several cavalry roles including Drivers, Gunners and Vehicle commanders.
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
					<h2 className="homepage-hero-title">Our Vehicles</h2>
				</div>
			</div>
		</div>
		<div className="content-row fixed-width-container" style={{marginBottom: 50, display: 'flex'}}>
			<div href="#"  className="half-row light-grey-block" style={{ flex: 1 }}>
				<h2 className="homepage-hero-subtitle">M2A3 Bradley</h2>
				<img className="equipment-image" src={BradleyImage} />
				<p className="homepage-hero-body">
					The Bradley is an Infantry Fighting Vehicle used by the US Army. The A3 variant is the latest in the Bradley series and features a much improved
					fire control system in addition to the BUSK (Bradley Urban Survival Kit) which fits reactive armour plating to the vehicle in order to improve it's
					survivability against explosives and anti armour munitions.
				</p>
			</div>
			<div href="#" className="half-row grey-block" style={{ flex: 1 }}>
				<h2 className="homepage-hero-subtitle">M109A6 Paladin</h2>
				<img className="equipment-image" src={PaladinImage} />
				<p className="homepage-hero-body">
					The M109A6 Paladin is a 120mm self-propelled howitzer capable of rapid fire and maneouver. The A6 variant
					represents years of continous improvement by the US military including increased survivability and improved fire control for the primary weapon.
				</p>
			</div>
		</div>
	</div>
)

export default CavalryPage
