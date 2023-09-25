'use client';
import Header from '@dopos/components/ui/Header';
// import ImageCarousel from '@dopos/components/ImageCarousel';
import { useEffect } from 'react';
import AboutSection from '@dopos/components/sections/AboutSection';
import ServiceSection from '@dopos/components/sections/ServiceSection';
import ReferenceSection from '@dopos/components/sections/ReferenceSection';
import ContactSection from '@dopos/components/sections/ContactSection';
import scrollama from 'scrollama';
import Footer from '../ui/Footer';
import { usePageContext } from '@dopos/contexts/PageContext';
import MobileMenu from '../ui/MobileMenu';
import HomeSection from '../sections/HomeSection';
import { Parallax } from 'react-parallax';
import ParallaxSection from '../sections/ParallaxSection';

const PageLayout: React.FC = () => {
	const { setCurrentPage, setAnimationPlayed } = usePageContext();

	useEffect(() => {
		// Initialize Scrollama
		const scroller = scrollama();

		const calculateOffset = () => {
			const windowHeight = window.innerHeight;
			const offset = (4 * windowHeight) / 100; // Convert 4rem to pixels
			return offset;
		};

		// Setup Scrollama
		scroller
			.setup({
				step: '.scrollama-step', // CSS class for the steps
				offset: 0.5, // Trigger the step
			})
			.onStepEnter((response: any) => {
				// Handle step enter event
				const { element } = response;
				const step = element.getAttribute('data-step');
				setCurrentPage(step);
				// console.log('Entered step:', element);
			})
			.onStepExit((response: any) => {
				// Handle step exit event
				// const { element } = response;
				// console.log('Exited step:', element);
			});

		// Bind Scrollama event listeners
		scroller.enable();

		// Clean up Scrollama on component unmount
		return () => {
			scroller.disable();
		};
	}, [setAnimationPlayed, setCurrentPage]);

	return (
		<>
			<Header />
			<main className="sticky top-0 left-0 right-0 h-auto flex-col">
				<HomeSection />
				<ServiceSection />
				<ParallaxSection />
				<AboutSection />
				<ReferenceSection />
				<ContactSection />
			</main>
			<Footer />
			<MobileMenu />
		</>
	);
};

export default PageLayout;
