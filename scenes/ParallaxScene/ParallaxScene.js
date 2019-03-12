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
				<div class="rellax react"><img class="react" src="/assets/assetreact.png" /></div>
				<div class="rellax mongodb"><img class="mongodb" src="/assets/mongoDB.png" /></div>
				<img class="guyprogramming" src="/assets/guyprogramming.png" />
			</section>
		);
	}
}