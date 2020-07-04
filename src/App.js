import React from 'react';
import './App.css';
import Skills from './components/skills';
import Education from './components/education';
import Project from './components/projects';
import ccd from './images/ccd-edited.jpg';
import { FiPhoneCall } from 'react-icons/fi';
import {
	FaUser,
	FaProjectDiagram,
	FaLaptopCode,
	FaFacebookSquare,
	FaLinkedin,
	FaInstagram,
	FaHome
} from 'react-icons/fa';
import { FcGraduationCap } from 'react-icons/fc';
import { AiFillLike } from 'react-icons/ai';
import { GiCricketBat, GiShuttlecock, GiMusicalNotes } from 'react-icons/gi';
import { IoIosMailOpen } from 'react-icons/io';

function App() {
	return (
		<div className="App container mt-3">
			<header className="row">
				<h1 className="col-12  text-center text-white">Hamsa Vardhan</h1>
				<h4 className="col-12  text-center text-white">Full Stack Developer</h4>
			</header>
			<div className="row parent">
				<div className="col-4 left-side">
					<img src={ccd} alt="ccd image" className="img-thumbnail" />
					<div className="col-12 row contact">
						<h4 className="col-12">contact</h4>
						<p className="col-12">
							<FiPhoneCall className="mr-2" /> 9182947798
						</p>
						<p className="col-12">
							<IoIosMailOpen className="mr-2" /> hamsavardhan99@gmail.com
						</p>
						<p className="col-12">
							<FaHome className="mr-2" /> Srikakulam AP code: 532127
						</p>
					</div>
					<div className="col-12 row skill">
						<h4 className="col-12">skill</h4>
						<Skills />
					</div>
					<div className="col-12 row follow">
						<h4 className="col-12">Follow me</h4>
						<p className="col-12">
							<span>
								<FaLinkedin className="mr-2" />linkedin.com/in/hamsavardhans-profile
							</span>
						</p>
						<p className="col-12">
							<span>
								<FaFacebookSquare className="mr-2" />facebook.com/profile.php?id=100010967741162
							</span>
						</p>
						<p className="col-12">
							<span>
								<FaInstagram className="mr-2" />instagram.com/hamsa_vardhan/
							</span>
						</p>
					</div>
				</div>
				<div className="right-side col-8 border-dark">
					<div className="col-12 row about">
						<span className="container-fluid row">
							{' '}
							<h3 className="col-5">
								<FaUser className="mr-2" size={'1.5rem'} />About Me
							</h3>{' '}
							<span className="col-7">
								<hr style={{ borderTop: '1.5px dotted black' }} />
							</span>{' '}
						</span>
					</div>
					<div className="col-12 row education">
						<span className="container-fluid row">
							{' '}
							<h3 className="col-5">
								<FcGraduationCap className="mr-2" size={'1.5rem'} />Education
							</h3>{' '}
							<span className="col-7">
								<hr style={{ borderTop: '1.5px dotted black' }} />
							</span>{' '}
						</span>
						<Education />
					</div>
					<div className="col-12 row projects">
						<span className="container-fluid row">
							{' '}
							<h3 className="col-5">
								<FaProjectDiagram className="mr-2" size={'1.5rem'} />Projects
							</h3>{' '}
							<span className="col-7">
								<hr style={{ borderTop: '1.5px dotted black' }} />
							</span>{' '}
						</span>
						<Project />
					</div>
					<div className="col-12 row interest">
						<span className="container-fluid row">
							{' '}
							<h3 className="col-5">
								<AiFillLike className="mr-2" size={'1.5rem'} />Interests
							</h3>{' '}
							<span className="col-7">
								<hr style={{ borderTop: '1.5px dotted black' }} />
							</span>{' '}
						</span>
						<ul className="row container" style={{ listStyleType: 'none' }}>
							<li className="col-3" style={{ fontSize: '1rem' }}>
								<GiCricketBat /> cricket
							</li>
							<li className="col-3" style={{ fontSize: '1rem' }}>
								<GiShuttlecock /> Badminton
							</li>
							<li className="col-3" style={{ fontSize: '1rem' }}>
								<FaLaptopCode /> coding
							</li>
							<li className="col-3" style={{ fontSize: '1rem' }}>
								<GiMusicalNotes /> music
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
