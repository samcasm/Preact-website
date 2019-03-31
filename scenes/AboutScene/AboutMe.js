import { Component } from "preact";
import './aboutMe';

export default class ParallaxScene extends Component {
	componentDidMount(){
		this.props.updateState(this.aboutmeScene, "aboutmeScene")
	}

	render() {
		return (
			<section class="aboutMe" ref={el => this.aboutmeScene = el}>
				<div class="header">
					<div class="context" >
						<p>This website was built in Preact JS, because why not. Every element on this website is telling of my interests and pursuits until now, where any newly acquired skill is added on.</p>
					</div>
					<img  src="https://s3.us-east-2.amazonaws.com/samcasmbucket/profile-pic.jpeg" alt="profile-pic" />
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