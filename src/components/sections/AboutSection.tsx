import AnchorTag from '../ui/AnchorTag';
import AboutCard from '../ui/AboutCard';
const AboutSection = () => {
	return (
		<section
			className={`grow relative h-auto bg-gray-100 scrollama-step p-6 w-full flex flex-row justify-center items-start min-h-[56rem]`}
			data-step="o-nas"
			// style={{ height: 'calc(100vh - 4rem)' }}
		>
			<AnchorTag section="o-nas" />
			<div className="w-full h-full min-h-[56rem] flex flex-col justify-start items-center py-8 desktop:px-16 laptop:px-16 tablet:px-16 px-8">
				<div className="w-full h-1/6 flex justify-center items-center max-w-4xl mb-12 max-h-32">
					<h2 className="uppercase grid text-5xl font-bold text-center">
						<small className="text-lg font-semibold text-dopos-blue mb-0">
							Přečtěte si
						</small>
						{`Pár informací o nás`}
					</h2>
				</div>
				<div className="w-full min-h-[42rem] grid laptop:grid desktop:grid-rows-5 desktop:grid-col-3 desktop:gap-16 laptop:grid-rows-5 laptop:grid-col-3 laptop:gap-16 grid-col-1 auto-rows-auto gap-8">
					<AboutCard
						image="/assets/reviews.svg"
						title="Vaše spokojenost je naším cílem!"
						description="Našim cílem je kontinuální poskytování kvalitních služeb zákazníkům, včetně komplexního servisu."
						className="desktop:row-start-1 desktop:row-span-4 laptop:row-start-1 laptop:row-span-4 flex flex-col items-center justify-start w-full h-full bg-white rounded-xl shadow-xl"
					/>
					<AboutCard
						image="/assets/certificate.svg"
						title="Od projektové dokumentace po bezproblémovou kolaudaci"
						description="Na základě projektové dokumentace nebo podrobné prohlídky stavby jsme schopni navrhnout ekonomicky optimální řešení protipožárních konstrukcí. Na konkrétní zadání zpracujeme zdarma cenovou nabídku. Součástí našich služeb je také konzultace s projektantem požárně bezpečnostního řešení včetně odsouhlasení navrženého postupu s dotyčnou stavební prevencí Hasičského záchranného sboru. Garantujeme bezproblémovou kolaudaci v oblasti našich dodávek."
						className="desktop:row-start-2 desktop:row-span-4 laptop:row-start-2 laptop:row-span-4 flex flex-col items-center justify-start w-full h-full bg-white rounded-xl shadow-xl"
					/>
					<AboutCard
						image="/assets/security.svg"
						title="Kontrola požárně bezpečnostních zařízení podle platných předpisů"
						description="Pro stávající zkolaudované objekty v provozu zajišťujeme kontrolu požárně bezpečnostních zařízení podle vyhlášky Ministerstva vnitra č. 246 z 21.6.2001."
						className="desktop:row-start-1 desktop:row-span-4 laptop:row-start-1 laptop:row-span-4 flex flex-col items-center justify-start w-full h-full bg-white rounded-xl shadow-xl"
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
