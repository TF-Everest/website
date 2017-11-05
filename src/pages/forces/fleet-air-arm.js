import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import FleetAirHeader from "../../images/ah64-fleet-air-arm.png"

const FleetAirPage = () => (
	<div>
		<Helmet
			title={`Task Force Everest - Fleet Air Arm "Angel, Condor & Pegasus"`}
		/>
		<div className="hero-image">
			<img src={FleetAirHeader} />
		</div>
		<div className="content-row fixed-width-container" style={{marginTop: -150 }}>
			<div className="half-row grey-block" style={{ height: 450 }}>
				<h1 className="homepage-hero-title">&#x201c;Condor&#x201d;<br />&<br />&#x201c;Pegasus&#x201d;</h1>
				<h2 className="homepage-hero-subtitle">RN Fleet Air Arm</h2>
				<p className="homepage-hero-body">
					Task Force Everest's rotary capability is provided by the Royal Navy Fleet Air Arm.
					<br /><br />Flying the AH-64D Apache, Merlin Mk3 and Wildcat they provide Transport, MEDEVAC and Rotary CAS to the Task Force.
				</p>
			</div>
			<div className="half-row blue-block" style={{ height: 200, marginTop: 250 }}>
				<h2 className="homepage-hero-subtitle bold">Commander</h2>
				<h2 className="homepage-hero-subtitle">2LT Jackal, R.</h2>

			</div>
		</div>
		<div className="content-row fixed-width-container" style={{ zIndex: 2, position: 'relative' }}>
			<div className="full-row light-grey-block homepage-button-banner">
				<div className="half-row">
					<h2 className="homepage-hero-subtitle">Interested in joining?</h2>
					<p className="homepage-hero-body">
						We are currently recruiting for Pilots, Co-Pilots and Air Traffic Controllers.
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
					<h2 className="homepage-hero-title">Our Aircraft</h2>
				</div>
			</div>
		</div>
		<div className="content-row fixed-width-container" style={{display: 'flex'}}>
			<div href="#" className="half-row light-grey-block" style={{ flex: 1 }}>
				<h2 className="homepage-hero-subtitle">AH1 Apache</h2>
				<p className="homepage-hero-body">
					The AH1 Apache is the British version of the AH-64D Apache Attack Helicopter developed by the United States.
					<br />
					Developed under license by Augusta Westland, a squadron of AH1 helicopters was transfered to Royal Navy Fleet Air Arm during Operation Unified Protector as a stop gap replacement for the removal of the Harrier II from service.
				</p>
			</div>
			<div href="#" className="half-row grey-block" style={{ flex: 1 }}>
				<h2 className="homepage-hero-subtitle">Merlin MK3</h2>
				<p className="homepage-hero-body">
					The Merlin Mk3 Transport Helicopter is a medium lift helicopter developed for the UK miltary by Augusta Westland.
					<br />
					The Mk3 Variant was brought into service by the Royal Navy Fleet Air Arm to aid light infantry forces such as the Marines with insertion and transport logisitcs missions.
				</p>
			</div>
		</div>
		<div className="content-row fixed-width-container" style={{ marginBottom: 50, display: 'flex' }}>
			<div href="#" className="full-row blue-block" style={{ flex: 1 }}>
				<h2 className="homepage-hero-subtitle">Wildcat</h2>
				<p className="homepage-hero-body">
					The AW159 Wildcat is a light weight transport and light assault aircraft designed for reconaissance and SAR mission profiles. 
					<br />
					The Wildcat was selected by Royal Navy Fleet Air Arm to replace the aging Lynx fleet. The Wildcat is currently undergoing further trails to assess its capabilities as a light assault aircraft.
				</p>
			</div>
		</div>

		<div className="content-row fixed-width-container" style={{ zIndex: 2, marginBottom: 50, position: 'relative' }}>
			<div className="full-row light-grey-block homepage-button-banner">
				<div className="half-row">
					<h2 className="homepage-hero-subtitle">Looking to transfer?</h2>
					<p className="homepage-hero-body">
						We offer an accredited transfer program from other MILSIM groups that will allow you to cross certify equivalent training programs in TFE.
					</p>
				</div>
				<div className="half-row">
					<Link className="homepage-hero-button" to="/careers">Transfer today</Link>
				</div>
			</div>
		</div>
	</div>
)

export default FleetAirPage
