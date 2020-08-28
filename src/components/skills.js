import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaNodeJs, FaReact, FaNode } from 'react-icons/fa';
import { IoLogoPython, IoLogoAngular } from 'react-icons/io';
import { GrMysql } from 'react-icons/gr';
import { AiOutlineAmazon } from 'react-icons/ai';
import { DiMongodb, DiJavascript1, DiRedis, DiPostgresql, DiFirebase } from 'react-icons/di';
function Skills() {
	return (
		<React.Fragment>
			<div className="col-12">
				<div className="container row skill-parent">
					<h5 className="col-12"> Coding Languages .... </h5>
					<ul className="col-12">
						<li>
							{' '}
							<FaNodeJs /> Node JS
						</li>
						<li>Type Script</li>
						<li>
							{' '}
							<IoLogoPython /> Python
						</li>
					</ul>
				</div>
			</div>
			<div className="col-12">
				<div className="container row skill-parent">
					<h5 className="col-12">Front End .... </h5>
					<ul className="col-12">
						<li>
							{' '}
							<AiFillHtml5 /> Html / <FaCss3Alt /> css / <DiJavascript1 /> JS
						</li>
						<li>
							{' '}
							<FaReact /> React
						</li>
						<li>
							{' '}
							<IoLogoAngular /> Angular
						</li>
					</ul>
				</div>
			</div>
			<div className="col-12">
				<div className="container row skill-parent">
					<h5 className="col-12">Back End ....</h5>
					<ul className="col-12">
						<li> Express </li>
						<li> Flask </li>
					</ul>
				</div>
			</div>
			<div className="col-12">
				<div className="container row skill-parent">
					<h5 className="col-12"> Database .... </h5>
					<ul className="col-12">
						<li>
							{' '}
							<DiMongodb /> MongoDB{' '}
						</li>
						<li>
							{' '}
							<DiPostgresql /> Postgres{' '}
						</li>
						<li>
							{' '}
							<DiRedis /> redis{' '}
						</li>
					</ul>
				</div>
			</div>
			<div className="col-12">
				<div className="container row skill-parent">
					<h5 className="col-12">Serverless ....</h5>
					<ul className="col-12">
						<li>
							{' '}
							<DiFirebase /> Cloud Functions{' '}
						</li>
						<li>
							{' '}
							<AiOutlineAmazon /> Lambda Functions{' '}
						</li>
					</ul>
				</div>
			</div>
			<div className="col-12">
				<div className="container row skill-parent">
					<h5 className="col-12">API ....</h5>
					<ul className="col-12">
						<li> Rest - ( Express Js ) </li>
						<li> Graphql - ( Apollo ) </li>
					</ul>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Skills;
