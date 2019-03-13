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
				<div class="rellax js"><img src="/assets/assetJS.png" /></div>
				<div class="rellax node"><img src="/assets/assetnodeJS.png" /></div>
				<div class="rellax react"><img src="/assets/assetreact.png" /></div>
				<div class="rellax mongodb"><img src="/assets/mongoDB.png" /></div>
				<div class="rellax swift"><img src="/assets/swift.png" /></div>
				<div class="rellax python"><img src="/assets/python.png" /></div>
				<div class="rellax ubuntu"><img src="/assets/ubuntu.png" /></div>
				<div class="rellax p5"><img src="/assets/p5.png" /></div>
				<img class="guyprogramming" src="/assets/guyprogramming.png" />
			</section>
		);
	}
}