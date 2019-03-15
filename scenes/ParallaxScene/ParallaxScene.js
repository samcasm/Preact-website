import { Component } from "preact";
import './parallaxScene';
import Rellax from 'rellax';

export default class ParallaxScene extends Component {
	componentDidMount(){
		let rellax = new Rellax('.rellax')
	}
	render() {
		return (
			<section class="parallax-scene">
				<div class="description"><p>A New York based software engineer with two years of industry experience</p></div>
				<div class="rellax js" data-rellax-speed="3"><img src="/assets/assetJS.png" /></div>
				<div class="rellax node" data-rellax-speed="3"><img src="/assets/assetnodeJS.png" /></div>
				<div class="rellax react" data-rellax-speed="3"><img src="/assets/assetreact.png" /></div>
				<div class="rellax mongodb" data-rellax-speed="3"><img src="/assets/mongoDB.png" /></div>
				<div class="rellax swift" data-rellax-speed="3"><img src="/assets/swift.png" /></div>
				<div class="rellax python" data-rellax-speed="3"><img src="/assets/python.png" /></div>
				<div class="rellax ubuntu" data-rellax-speed="3"><img src="/assets/ubuntu.png" /></div>
				<div class="rellax p5" data-rellax-speed="3"><img src="/assets/p5.png" /></div>
				<img class="guyprogramming" src="/assets/guyprogramming.png" />
			</section>
		);
	}
}