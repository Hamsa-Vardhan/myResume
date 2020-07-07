import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
function Project() {
	return (
		<div className="container parent-project">
			<ul className="row">
				<li className="col-5">
					Personalized chat{' '}
					<a href="https://hava-chat.netlify.app" target="_blank">
						<FiExternalLink style={{ marginLeft: '1rem' }} size={'1.2rem'} />
					</a>{' '}
				</li>
				<li className="col-5">
					Url Shortener{' '}
					<a href="https://github.com/Hamsa-Vardhan/urlshortener-frontend" target="_blank">
						<FiExternalLink style={{ marginLeft: '1rem' }} size={'1.2rem'} />
					</a>{' '}
				</li>
				<li className="col-5">
					Covid19 Visualizer{' '}
					<a href="https://covid19-visualizer-hamsavardhan.netlify.app/" target="_blank">
						<FiExternalLink style={{ marginLeft: '1rem' }} size={'1.2rem'} />
					</a>{' '}
				</li>
				<li className="col-5">
					Razorpay Checkout{' '}
					<a href="https://razorpay-checkout-hamsavardhan.netlify.app/" target="_blank">
						<FiExternalLink style={{ marginLeft: '1rem' }} size={'1.2rem'} />
					</a>{' '}
				</li>
				<li className="col-5">
					Github Replica{' '}
					<a href="https://hava-github-replica.netlify.app/" target="_blank">
						<FiExternalLink style={{ marginLeft: '1rem' }} size={'1.2rem'} />
					</a>{' '}
				</li>
				<li className="col-5">
					Newyork Times{' '}
					<a href="https://hamsavardhan-nytimes-content.netlify.app/" target="_blank">
						<FiExternalLink style={{ marginLeft: '1rem' }} size={'1.2rem'} />
					</a>{' '}
				</li>
				<li className="col-5">
					Web Cricket{' '}
					<a href="https://hamsavardhan-cric-isfun.netlify.app/" target="_blank">
						<FiExternalLink style={{ marginLeft: '1rem' }} size={'1.2rem'} />
					</a>{' '}
				</li>
				<li className="col-5">
					tic tac toe{' '}
					<a href="https://hava-tictactoe.netlify.app/" target="_blank">
						<FiExternalLink style={{ marginLeft: '1rem' }} size={'1.2rem'} />
					</a>{' '}
				</li>
				<li className="col-5">
					Scheduler{' '}
					<a href="https://hamsavardhan-allcountries-weather.netlify.app/" target="_blank">
						<FiExternalLink style={{ marginLeft: '1rem' }} size={'1.2rem'} />
					</a>{' '}
				</li>
				<li className="col-5">
					Pricing Cards{' '}
					<a href="https://hava-pricing-cards.netlify.app/" target="_blank">
						<FiExternalLink style={{ marginLeft: '1rem' }} size={'1.2rem'} />
					</a>{' '}
				</li>
				<li className="col-11">
					lodashlite (npm package){' '}
					<a href="https://www.npmjs.com/package/lodashlite" target="_blank">
						<FiExternalLink style={{ marginLeft: '1rem' }} size={'1.2rem'} />
					</a>{' '}
				</li>
			</ul>
		</div>
	);
}

export default Project;
