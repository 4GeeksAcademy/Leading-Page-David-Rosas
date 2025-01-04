import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./navBar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (<div>

		<NavBar></NavBar>

		<Jumbotron></Jumbotron>

		<div className="d-flex ">
			<Cards></Cards>
			<Cards></Cards>
			<Cards></Cards>
			<Cards></Cards>
		</div>
		<div>
			<Footer></Footer>
		</div>	

		</div>
	);
};

export default Home;
