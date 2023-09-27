import Head from 'next/head';
import './globals.css';
import { Barlow_Condensed } from 'next/font/google';

const barlow = Barlow_Condensed({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
});

// add shrink to fit = no 

export const metadata = {
	title: 'DOPOS HK s.r.o.',
	// add shrink to fit = no


};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="cs" className={`scroll-smooth box-content`}>
			<Head><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /></Head>
			<body className={`${barlow.className}`}>{children}</body>
		</html>
	);
}
