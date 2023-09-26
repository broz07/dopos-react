import './globals.css';
import { Barlow_Condensed } from 'next/font/google';

const barlow = Barlow_Condensed({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
	title: 'DOPOS HK s.r.o.',
	// todo keywords, description, author, robots, viewport, og, twitter
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
