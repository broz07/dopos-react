'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import { usePageContext } from '@dopos/contexts/PageContext';

interface Props {
	// currentPage: string;
	// setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<Props> = () => {
	const [scrolled, setScrolled] = useState(false);
	const { currentPage, setCurrentPage } = usePageContext();

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 0;
			if (isScrolled !== scrolled) {
				setScrolled(isScrolled);
			}
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrolled]);

	return (
		<header
			className={`fixed left-0 right-0 top-0 z-50 ${
				scrolled
					? 'bg-white text-gray-900 h-16'
					: 'bg-transparent text-gray-900 h-20'
			} transition-all duration-300 ease-in-out select-none`}
		>
			<div className="px-8 flex items-center justify-between h-full">
				<div className="flex items-center desktop:w-32 laptop:w-32 tablet:w-32 w-20">
					<Image
						src="/assets/logo2.svg"
						alt="Dopos Logo"
						width={1920}
						height={1080}
						className="h-full w-full"
					/>
					<h1 className="text-2xl font-bold hidden">DOPOS HK s.r.o.</h1>
				</div>
				<Menu currentPage={currentPage} setCurrentPage={setCurrentPage} />
			</div>
		</header>
	);
};

export default Header;
