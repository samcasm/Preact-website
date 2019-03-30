import React, { Component } from "react";
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
				this.onTabClick = this.onTabClick.bind(this);
	}

	changeActiveClass(id, ...rest){
		let currentState = [false, false, false];
		currentState[id] = true;
		this.setState({activeClass: currentState})
	}

	onTabClick(id){
		this.props.scrollComponentIntoView(id)
	}

	componentDidMount(){
		this.props.updateState(this.parallaxScene, "parallaxScene")

		document.addEventListener('scroll', () => {
				console.log(window.scrollY)
				if(window.scrollY < 100){
					this.changeActiveClass(0)
				}else if(window.scrollY > 540 && window.scrollY < 1000){
					this.changeActiveClass(1)
				}else if(window.scrollY > 1200){
					this.changeActiveClass(2)
				}
      
    });
	}
	
	render() {
		return (
			<section class="parallax-scene" ref={el => this.parallaxScene = el}>
				<div id="navbar">
					<div class="initials">Samir k.</div>
					<ul>
						{this.state.tabs.map((tab, i)=> <TabComponent id={i} text={tab} onclick={this.onTabClick} activeClass={this.state.activeClass[i]}/>)}
					</ul>
				</div>
				<div class="description"><p>A New York based software engineer with two years of industry experience</p></div>
			</section>
		);
	}
}