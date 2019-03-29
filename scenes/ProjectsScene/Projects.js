import { Component } from "preact";
import './projects';

export default class Projects extends Component {

	render() {
		return (
			<section class="projects">
				<div class="header">
					<p>My Personal Work</p>
				</div>
				<div class="project-images">
					<div>
						<div>
							<img src="/assets/cpath.png" />
							<div class="inner-box">Eidetic</div>
						</div>
						<div>
							<img src="/assets/gameOfLife.png" />
							<div class="inner-box">Game Of Life</div>
						</div>
					</div>
					<div>
						<div>
							<img src="/assets/moodset.png" />
							<div class="inner-box">Moodset</div>
						</div>
						<div>
							<img src="/assets/cpath.png" />
							<div class="inner-box">Critical Path</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}