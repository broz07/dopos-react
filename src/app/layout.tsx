import './globals.css';
import { Barlow_Condensed } from 'next/font/google';
import { Metadata } from 'next';

const barlow = Barlow_Condensed({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'DOPOS HK s.r.o.',
	applicationName: 'DOPOS HK s.r.o.',
	description: 'Návrh a realizace provětrávaných fasád',
	authors: [
		{ name: 'Daniel Brož', url: 'https://www.linkedin.com/in/broz-daniel' },
	],
	viewport: 'width=device-width, initial-scale=1.0, shrink-to-fit=no',
	creator: 'Daniel Brož',
	keywords: [
		'Provětrané fasády',
		'Požární ochrana staveb',
		'Pískování kovových konstrukcí',
		'Akustika',
		'DOPOSHK',
	],
	alternates: {
		canonical: 'https://doposhk.cz',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="cs" className={`scroll-smooth box-content`}>
			<body className={`${barlow.className}`}>{children}</body>
		</html>
	);
}
