import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaNodeJs, FaReact, FaNode } from 'react-icons/fa';
import { IoLogoPython, IoLogoAngular } from 'react-icons/io';
import { GrMysql } from 'react-icons/gr';
import { DiMongodb } from 'react-icons/di';
function Skills() {
	return (
		<React.Fragment>
			<div className="col-12">
				<p className="container row">
					<span>
						<AiFillHtml5 />
						<FaCss3Alt />HTML/CSS
					</span>
				</p>
				<p className="container row">
					<span className="col-10">
						<span style={{ right: '10%' }} />
					</span>{' '}
					90%
				</p>
			</div>
			<div className="col-12">
				<p className="container row">
					<span>
						<FaNodeJs /> JAVASCRIPT
					</span>
				</p>
				<p className="container row">
					<span className="col-10">
						<span />
					</span>{' '}
					75%
				</p>
			</div>
			<div className="col-12">
				<p className="container row">
					<span>
						<IoLogoPython /> PYTHON{' '}
					</span>
				</p>
				<p className="container row">
					<span className="col-10">
						<span style={{ right: '35%' }} />
					</span>{' '}
					65%
				</p>
			</div>
			<div className="col-12">
				<p className="container row">
					<span>
						<IoLogoAngular /> ANGULAR
					</span>
				</p>
				<p className="container row">
					<span className="col-10">
						<span style={{ right: '20%' }} />
					</span>{' '}
					80%
				</p>
			</div>
			<div className="col-12">
				<p className="container row">
					<span>
						<FaReact /> REACT
					</span>
				</p>
				<p className="container row">
					<span className="col-10">
						<span style={{ right: '20%' }} />
					</span>{' '}
					80%
				</p>
			</div>
			<div className="col-12">
				<p className="container row">
					<span>
						<GrMysql /> MYSQL
					</span>
				</p>
				<p className="container row">
					<span className="col-10">
						<span />
					</span>{' '}
					75%
				</p>
			</div>
			<div className="col-12">
				<p className="container row">
					<span>
						<DiMongodb /> MONGODB
					</span>
				</p>
				<p className="container row">
					<span className="col-10">
						<span style={{ right: '15%' }} />
					</span>{' '}
					85%
				</p>
			</div>
			<div className="col-12">
				<p className="container row">
					<span>
						<FaNode /> NODEJS(EXPRESS)
					</span>
				</p>
				<p className="container row">
					<span className="col-10">
						<span style={{ right: '10%' }} />
					</span>{' '}
					90%
				</p>
			</div>
			<div className="col-12">
				<p className="container row">
					<span>FLASK</span>
				</p>
				<p className="container row">
					<span className="col-10">
						<span style={{ right: '35%' }} />
					</span>{' '}
					65%
				</p>
			</div>
		</React.Fragment>
	);
}

export default Skills;
