import ContactCol from './ContactCol';

const Footer = () => {
	return (
		<footer className={`desktop:h-auto py-4 bg-gray-900 text-white`}>
			<div className={`flex flex-row justify-between px-20 content-center`}>
				<ContactCol
					image="/assets/icons/location-dot-solid.svg"
					alt="location"
					title="Najděte nás"
					text="Bratři Štefanů 973/63a, 500 03 Hradec Kráové 3"
				/>
				<ContactCol
					image="/assets/icons/phone-solid.svg"
					alt="location"
					title="Zavolejte nám"
					text="+420 720 689 596"
				/>
				<ContactCol
					image="/assets/icons/envelope-solid.svg"
					alt="location"
					title="Napište nám"
					text="straka@doposhk.cz"
				/>
			</div>
		</footer>
	);
};

export default Footer;
