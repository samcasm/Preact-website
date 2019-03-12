import { Component } from "preact";
import './aboutMe';

export default class ParallaxScene extends Component {

	render() {
		return (
			<section class="aboutMe">
				<div class="header">
					<div class="context" data-aos="fade-up">
						<h2>Here's a little about me</h2>
						<p>I've worked for two years as a web developer, built fully scalable applications with React and Node JS, maintained and optimized advanced MongoDB databases. My most recent project is an iOS application developed in Swift 4 and Python for server-side integration which is set to launch on the app store soon.</p>
						<p>This website was built in Preact JS, because why not. Every element on this website is telling of my interests and pursuits until now, where any newly acquired skill is added on.</p>
					</div>
					<img data-aos="fade-up" src="https://s3.us-east-2.amazonaws.com/samcasmbucket/profile-pic.jpeg" alt="profile-pic" />
				</div>
				<ul class="footer">
					<li><img src="https://s3.us-east-2.amazonaws.com/samcasmbucket/GitHub-Mark-Light-120px-plus.png" alt=""/><a target="_blank" href="https://github.com/samcasm">Github</a></li>
					<li><img src="https://s3.us-east-2.amazonaws.com/samcasmbucket/resume-icon.png" alt=""/><a href="">Resume</a></li>
					<li><img src="https://s3.us-east-2.amazonaws.com/samcasmbucket/email-icon.png" alt=""/><a target="_top" href="mailto:samir7kutty@gmail.com">Email Me</a></li>
				</ul>
			</section>
		);
	}
}