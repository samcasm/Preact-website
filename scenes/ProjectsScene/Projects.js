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
						<div data-aos="fade-left">
							<a target="_blank" href="https://github.com/samcasm/Eidetic-the-beginning"></a>
							<img src="/assets/cpath.png" />
							<div class="inner-box">Eidetic</div>
						</div>
						<div data-aos="fade-right">
							<a target="_blank" href="https://github.com/samcasm/gameOfLife"></a>
							<img src="/assets/gameOfLife.png" />
							<div class="inner-box">Game Of Life</div>
						</div>
					</div>
					<div>
						<div data-aos="fade-left">
							<a target="_blank" href="https://github.com/samcasm/moodset"></a>
							<img src="/assets/moodset.png" />
							<div class="inner-box">Moodset</div>
						</div>
						<div data-aos="fade-right">
							<a target="_blank" href="https://github.com/samcasm/CriticalPathMethod"></a>
							<img src="/assets/cpath.png" />
							<div class="inner-box">Critical Path</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}