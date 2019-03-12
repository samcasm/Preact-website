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
						<div>A box</div>
						<div>A box</div>
					</div>
					<div>
						<div>A box</div>
						<div>A box</div>
					</div>	
				</div>
			</section>
		);
	}
}