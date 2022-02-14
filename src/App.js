import React from 'react';
import Hero from './components/Hero';
import InfoIcons from './components/InfoIcons';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import WhySnubes from './components/WhySnubes';
import Footer from './components/Footer';

function App() {
	return (
		<div className="font-roboto mx-auto">
			<NavBar />
			<Hero />
			<InfoIcons />
			<WhySnubes />
			<Carousel />
			<Footer />
		</div>
	);
}

export default App;
