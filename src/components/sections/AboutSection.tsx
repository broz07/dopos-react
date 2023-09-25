import AnchorTag from '../ui/AnchorTag';
import Image from 'next/image';
import Count from '../ui/Count';
const AboutSection = () => {
	return (
		<section
			className={`grow relative bg-gray-100 text-dopos-black font-bold scrollama-step p-6 flex flex-col justify-start items-center`}
			data-step="o-nas"
			style={{ height: 'calc(100vh - 4rem)' }}
		>
			<AnchorTag section="o-nas" />
			<div className={`flex flex-row justify-start items-start w-full h-full`}>
				<div
					className={`flex flex-col justify-between items-center w-1/2 h-full gap-2 pt-16 pb-8 pr-6`}
				>
					<h2 className={`text-6xl w-full text-center text-dopos-blue`}>
						S námi se nespálíte!
					</h2>
					<div className={`text-justify text-lg w-full text-dopos-black`}>
						Našim cílem je kontinuální poskytování kvalitních služeb zákazníkům,
						včetně komplexního servisu. Na základě projektové dokumentace nebo
						podrobné prohlídky stavby jsme schopni navrhnout ekonomicky
						optimální řešení protipožárních konstrukcí. Na konkrétní zadání
						zpracujeme zdarma cenovou nabídku. Součástí našich služeb je také
						konzultace s projektantem požárně bezpečnostního řešení včetně
						odsouhlasení navrženého postupu s dotyčnou stavební prevencí
						Hasičského záchranného sboru. Garantujeme bezproblémovou kolaudaci v
						oblasti našich dodávek. Pro stávající zkolaudované objekty v provozu
						zajišťujeme kontrolu požárně bezpečnostních zařízení podle vyhlášky
						Ministerstva vnitra č. 246 z 21.6.2001.
					</div>
					<div
						className={`flex flex-row justify-between items-center w-full h-24 gap-4`}
					>
						<Count text="rok založení" end={2007} page="o-nas" separator=" " />
						<Count
							text="staveb"
							end={20}
							page="o-nas"
							separator=","
							prefix="Přes "
						/>
						<Count text="let zkušeností" end={30} page="o-nas" prefix="" />
					</div>
				</div>
				<div
					className={`flex flex-col justify-center items-center w-1/2 h-full rounded-lg bg-black`}
				>
					<Image
						alt="Provětraná fasáda"
						src="/assets/img6.jpg"
						width={1920}
						height={1080}
						className={`w-full h-full object-cover object-center rounded-lg opacity-70`}
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
