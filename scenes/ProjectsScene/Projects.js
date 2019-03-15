import { Component } from "preact";
import './projects';

export default class Projects extends Component {

	render() {
		return (
			<section class="projects">
				<div class="header">
					<h2>Projects</h2>
					<p>My Personal Work</p>
				</div>
				<div class="project-images">
					<div>
						<div>
							<img src="/assets/cpath.png" />
							<div class="inner-box">CRITICAL PATH</div>
						</div>
						<div>
							<img src="/assets/gameOfLife.png" />
							<div class="inner-box">GAME OF LIFE</div>
						</div>
					</div>
					<div>
						<div>
							<img src="/assets/moodset.png" />
							<div class="inner-box">MOODSET</div>
						</div>
						<div>
							<img src="/assets/cpath.png" />
							<div class="inner-box">CRITICAL PATH</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}