'use client';
import Header from '@dopos/components/ui/Header';
// import ImageCarousel from '@dopos/components/ImageCarousel';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import AboutSection from '@dopos/components/sections/AboutSection';
import ServiceSection from '@dopos/components/sections/ServiceSection';
import ReferenceSection from '@dopos/components/sections/ReferenceSection';
import ContactSection from '@dopos/components/sections/ContactSection';
import scrollama from 'scrollama';
import Footer from '../ui/Footer';
import {
	PageContextProvider,
	usePageContext,
} from '@dopos/contexts/PageContext';

const PageLayout: React.FC = () => {
	const { currentPage, setCurrentPage, setAnimationPlayed } = usePageContext();

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
		// <div className="absolute top-0 left-0 right-0 bottom-0 min-h-screen flex flex-col page">
		<>
			<Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
			<main className="sticky top-0 left-0 right-0 h-auto flex-col">
				<div
					className="h-[38rem] scrollama-step select-none bg-white"
					data-step="home"
				>
					{/* <ImageCarousel /> */}
					<Image
						src="/assets/img3.jpeg"
						alt="Sample Image"
						width={1920}
						height={1080}
						className="w-full h-full object-cover opacity-80"
					/>
				</div>
				<AboutSection />
				<ServiceSection />
				<ReferenceSection />
				<ContactSection />
			</main>
			<Footer />
			{/* </div> */}
		</>
	);
};

export default PageLayout;
