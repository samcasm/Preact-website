import './style';
import { h, render, Component } from 'preact';
import ParallaxScene from './scenes/ParallaxScene/ParallaxScene';
import AboutMe from './scenes/AboutScene/AboutMe';
import Projects from './scenes/ProjectsScene/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			parallaxScene: null,
			projectsScene: null,
			aboutmeScene: null
		}
		this.updateState = this.updateState.bind(this);
		this.scrollComponentIntoView = this.scrollComponentIntoView.bind(this);
	}

	componentDidMount() {
		AOS.init({
			duration: 1000
		});
	}

	updateState(element, componentName) {
		let state = {...this.state}
		state[componentName] = element;
		this.setState(state);	
		console.log(this.state);	
	}

	scrollComponentIntoView(id){
		let state = {...this.state}
		let componentName = id == 0 ? "parallaxScene" : id == 1 ? "projectsScene" : "aboutmeScene" 
		this.state[componentName].scrollIntoView({behavior: 'smooth'})
	}

	render() {
		return (
			<div id="root">
				<ParallaxScene scrollComponentIntoView={this.scrollComponentIntoView} updateState={this.updateState}/>
				<Projects scrollComponentIntoView={this.scrollComponentIntoView} updateState={this.updateState}/>
				<AboutMe scrollComponentIntoView={this.scrollComponentIntoView} updateState={this.updateState}/>
			</div>
		)
	}
}

