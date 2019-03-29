import { Component } from "react";
import './parallaxScene';

class TabComponent extends Component {
    constructor(props) {
		super(props);
    }
    render() {
        return (
            <li>
							<a 
									className={this.props.activeClass ? 'active': null} 
                	onClick={this.props.onclick.bind(this, this.props.id)} 
            	>{this.props.text}</a>
            </li>
        )
  }
}
export default class ParallaxScene extends Component {
	constructor(props) {
        super(props);
        this.state = {
			tabs: ["Home", "My Work", "About me"],
			activeClass : [true, false, false]
		};
		this.changeActiveClass = this.changeActiveClass.bind(this);
	}

	changeActiveClass(id){
		let currentState = [false, false, false];
		currentState[id] = true;
		this.setState({activeClass: currentState})
	}

	componentDidMount(){
		console.log(this.newelem);
	}
	
	render() {
		return (
			<section class="parallax-scene" >
				<div id="navbar">
					<div class="initials">Samir k.</div>
					<ul>
						{this.state.tabs.map((tab, i)=> <TabComponent id={i} text={tab} onclick={this.changeActiveClass} activeClass={this.state.activeClass[i]}/>)}
					</ul>
				</div>
				<div class="description"><p>A New York based software engineer with two years of industry experience</p></div>
			</section>
		);
	}
}