'use client';
import Header from '@dopos/components/ui/Header';
// import ImageCarousel from '@dopos/components/ImageCarousel';
import { useEffect } from 'react';
import AboutSection from '@dopos/components/sections/AboutSection';
import ServiceSection from '@dopos/components/sections/ServiceSection';
import PortfolioSelection from '@dopos/components/sections/PortfolioSelection';
import ContactSection from '@dopos/components/sections/ContactSection';
import scrollama from 'scrollama';
import Footer from '../ui/Footer';
import { usePageContext } from '@dopos/contexts/PageContext';
import MobileMenu from '../ui/MobileMenu';
import HomeSection from '../sections/HomeSection';
import { Parallax } from 'react-parallax';
import ParallaxSection from '../sections/ParallaxSection';
import CountupSection from '../sections/CountupSection';
import PartnerSection from '../sections/PartnerSection';
import { I18nextProvider } from 'react-i18next';
import i18n from '@dopos/utils/i18n';

const PageLayout: React.FC = () => {
	const { setCurrentPage, setAnimationPlayed, setAnimationTriggered } =
		usePageContext();

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
				offset: 0.9, // Trigger the step
			})
			.onStepEnter((response: any) => {
				// Handle step enter event
				const { element } = response;
				const step = element.getAttribute('data-step');

				if (step !== 'countup') {
					setCurrentPage(step);
				} else {
					setAnimationTriggered(true);
				}
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
	}, [setAnimationPlayed, setAnimationTriggered, setCurrentPage]);

	return (
		<I18nextProvider i18n={i18n}>
			<Header />
			<main className="sticky top-0 left-0 right-0 h-auto flex-col">
				<HomeSection />
				<ServiceSection />
				<ParallaxSection />
				<AboutSection />
				<CountupSection />
				<PortfolioSelection />
				<PartnerSection />
				<ContactSection />
			</main>
			<Footer />
			<MobileMenu />
		</I18nextProvider>
	);
};

export default PageLayout;
