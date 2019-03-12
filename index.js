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
	}

	componentDidMount() {
		AOS.init({
			duration: 1000
		});
	}

	render() {
		return (
			<div id="root">
				<ParallaxScene />
				<Projects />
				<AboutMe />
			</div>
		)
	}
}

