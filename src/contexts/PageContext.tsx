'use client';

import React, { createContext, useState, useContext } from 'react';

interface PageContextType {
	currentPage: string;
	setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
	animationPlayed: boolean;
	setAnimationPlayed: React.Dispatch<React.SetStateAction<boolean>>;
	animationTriggered: boolean;
	setAnimationTriggered: React.Dispatch<React.SetStateAction<boolean>>;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

export function usePageContext() {
	const context = useContext(PageContext);
	if (context === undefined) {
		throw new Error('usePageContext must be used within a PageProvider');
	}
	return context;
}

export function PageContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [currentPage, setCurrentPage] = useState('home');
	const [animationPlayed, setAnimationPlayed] = useState(false);
	const [animationTriggered, setAnimationTriggered] = useState(false);

	const value: PageContextType = {
		currentPage,
		setCurrentPage,
		animationPlayed,
		setAnimationPlayed,
		animationTriggered,
		setAnimationTriggered,
	};

	return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}
