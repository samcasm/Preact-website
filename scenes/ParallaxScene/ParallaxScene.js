import React, { Component } from "react";
import './parallaxScene';

function BurgerIcon({ open, ...props }) {
	return (
		<div className={open ? "burger-menu open" : "burger-menu"} {...props}>
			<div className="bar1" key="b1" />
			<div className="bar2" key="b2" />
			<div className="bar3" key="b3" />
		</div>
	);
}

function Menu({ onclick }) {
	return (
		<div className="menu">
			<ul>
				<li onClick={onclick.bind(this, 0)}>Home</li>
				<li onClick={onclick.bind(this, 1)}>My Projects</li>
				<li onClick={onclick.bind(this, 2)}>About me</li>
			</ul>
		</div>
	);
}

class TabComponent extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<li>
				<a
					className={this.props.activeClass ? 'active' : null}
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
			activeClass: [true, false, false],
			menuIsOpen: false
		};
		this.changeActiveClass = this.changeActiveClass.bind(this);
		this.onTabClick = this.onTabClick.bind(this);
		this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this);
		this.navSelection = this.navSelection.bind(this);
	}

	changeActiveClass(id, ...rest) {
		let currentState = [false, false, false];
		currentState[id] = true;
		this.setState({ activeClass: currentState })
	}

	onTabClick(id) {
		this.props.scrollComponentIntoView(id)
	}

	toggleBurgerMenu() {
		this.setState({ menuIsOpen: !this.state.menuIsOpen })
	}

	navSelection(id) {
		this.onTabClick(id)
		this.toggleBurgerMenu()
	}

	componentDidMount() {
		this.props.updateState(this.parallaxScene, "parallaxScene")

		document.addEventListener('scroll', () => {
			console.log(window.scrollY)
			if (window.scrollY < 100) {
				this.changeActiveClass(0)
			} else if (window.scrollY > 540 && window.scrollY < 1000) {
				this.changeActiveClass(1)
			} else if (window.scrollY > 1200) {
				this.changeActiveClass(2)
			}

		});
	}

	render() {
		return (
			<section class="parallax-scene" ref={el => this.parallaxScene = el}>
				<div id="navbar">
					<div class="initials">Samir k.</div>
					<BurgerIcon open={this.state.menuIsOpen} onClick={this.toggleBurgerMenu} />
					<ul class="navbar-navs">
						{this.state.tabs.map((tab, i) => <TabComponent id={i} text={tab} onclick={this.onTabClick} activeClass={this.state.activeClass[i]} />)}
					</ul>
					
				</div>
				{this.state.menuIsOpen ? <Menu onclick={this.navSelection}/> : null}
				<div class="description"><p>A New York based software engineer who spends most of his time ideating and building software solutions that solve real world problems </p></div>
			</section>
		);
	}
}