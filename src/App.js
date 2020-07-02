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
				<div className="right-side col-8">
					<div className="col-12 row about">
						<h3>About Me</h3>
					</div>
					<div className="col-12 row education">
						<h3>Education</h3>
						<Education />
					</div>
					<div className="col-12 row projects">
						<h3>Projects</h3>
						<Project />
					</div>
					<div className="col-12 row interest">
						<h3>Interests</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
