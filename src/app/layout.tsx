import './globals.css';
import { Barlow_Condensed } from 'next/font/google';
import { Metadata } from 'next';
import { I18nextProvider } from 'react-i18next';
import i18n from '@dopos/utils/i18n';

const barlow = Barlow_Condensed({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'DOPOS HK s.r.o.',
	applicationName: 'DOPOS HK s.r.o. - Návrh a realizace provětrávaných fasád',
	description:
		'Optimalizujte svoji budovu s moderními provětranými fasádami. Nabízíme profesionální návrh a kvalitní realizaci s důrazem na energetickou účinnost. Získejte stylovou fasádu, která vám pomůže snížit náklady na vytápění a zvýší komfort ve vaší budově. Kontaktujte nás pro nejlepší řešení!',
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
