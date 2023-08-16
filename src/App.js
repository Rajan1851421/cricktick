import React from 'react';
import Navbar from "./Components/Navbar";
import Router from './Components/Router';
import Footer from './Components/Footer';
import './Styles/App.css'
import Scorecard from './Components/Scorecard';
import Home from './Components/Home';
import {  useState, useEffect } from "react";

function App() {

	



	return (
		<>
			<React.Fragment>
				
				<Navbar />
				<Router />
				<Footer/>

			</React.Fragment></>

	);
}

export default App;
