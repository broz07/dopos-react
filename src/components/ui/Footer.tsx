import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const year = new Date().getFullYear();
	const { t } = useTranslation();

	return (
		<footer className={`desktop:h-auto py-4 bg-dopos-black text-white`}>
			<div
				className={`flex flex-row justify-center items-center text-center text-gray-400`}
			>
				<span className={`mr-2`}>{`© ${year} DOPOS HK s.r.o.`}</span>
				<span className={`ml-2`}>
					{t('footer.created_by')}
					<Link
						href="https://www.linkedin.com/in/broz-daniel"
						target="_blank"
						className="text-white hover:text-dopos-blue transition-all duration-300 ease-in-out"
					>
						Daniel Brož
					</Link>
				</span>
			</div>

			{/* <div
				className={`flex desktop:flex-row laptop:flex-row flex-col justify-between desktop:px-20 laptop:px-16 content-center`}
			>
				<ContactCol
					image="/assets/icons/location-dot-solid.svg"
					alt="location"
					title="Najděte nás"
					text="Bratři Štefanů 973/63a, 500 03 Hradec Kráové 3"
				/>
				<ContactCol
					image="/assets/icons/phone-solid.svg"
					alt="phone"
					title="Zavolejte nám"
					text="+420 720 689 596"
				/>
				<ContactCol
					image="/assets/icons/envelope-solid.svg"
					alt="email"
					title="Napište nám"
					text="straka@doposhk.cz"
				/>
			</div> */}
		</footer>
	);
};

export default Footer;
