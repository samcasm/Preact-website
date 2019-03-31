import { Component } from "preact";
import './projects';

export default class Projects extends Component {
	
	componentDidMount(){
		this.props.updateState(this.projectsScene, "projectsScene")
	}

	redirectTo(url, e){
		e.stopPropagation()
		window.open(url, '_blank')
	}

	render() {
		return (
			<section class="projects" ref={el=>this.projectsScene = el}>
				<div class="header">
					<p>My Personal Work</p>
				</div>
				<div class="project-images">
					<div>
						<div data-aos="fade-left" id="Eidetic">
							<a target="_blank" href="https://github.com/samcasm/Eidetic-the-beginning"></a>
							<img src="/assets/eidetic.jpeg" />
							<div class="inner-box"><p>Eidetic</p></div>
						</div>
						<div data-aos="fade-right">
							<a target="_blank" href="https://github.com/samcasm/gameOfLife"></a>
							<img src="/assets/gameOfLife.png" />
							<div class="inner-box"><p>Game Of Life</p></div>
						</div>
					</div>
					<div>
						<div data-aos="fade-left">
							<a target="_blank" href="https://github.com/samcasm/moodset"></a>
							<img src="/assets/moodset.png" />
							<div class="inner-box"><p>Moodset</p></div>
						</div>
						<div data-aos="fade-right">
							<a target="_blank" href="https://github.com/samcasm/CriticalPathMethod"></a>
							<img src="/assets/cpath.png" />
							<div class="inner-box"><p>Critical Path</p></div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}