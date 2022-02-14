import React from 'react';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import NavBar from './components/NavBar';
import CarouselSection from './components/CarouselSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import './fontawesome'

function App() {
	return (
		<div className="font-roboto mx-auto">
			<NavBar />
			<Hero />
			<InfoSection />
			<AboutSection />
			<CarouselSection />
			<Footer />
		</div>
	);
}

export default App;
