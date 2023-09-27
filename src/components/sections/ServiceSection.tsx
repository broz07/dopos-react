// import { Parallax } from 'react-parallax';
import AnchorTag from '../ui/AnchorTag';
import ServiceCard from '../ui/ServiceCard';

const ServiceSection = () => {
	return (
		<section
			className={`grow relative flex flex-col justify-center items-center w-full bg-gray-100 scrollama-step h-auto`}
			data-step="sluzby"
			style={{ minHeight: 'calc(100vh - 4rem)' }}
		>
			<AnchorTag section="sluzby" />
			<div
				className={`flex flex-col justify-center items-center w-full h-auto p-10`}
				style={{ minHeight: 'calc(100vh - 4rem)' }}
			>
				<div
					className={`flex flex-col justify-center items-center w-full px-8 text-dopos-black max-w-4xl mb-8`}
				>
					<h2 className={`text-5xl font-bold text-center mb-4`}>
						Co pro vás můžeme udělat
					</h2>
					<p className={`text-2xl text-center text-gray-500`}>
						{`Našim cílem je kontinuální poskytování kvalitních služeb zákazníkům, včetně komplexního servisu. Na konkrétní zadání zpracujeme zdarma cenovou nabídku. `}
						<a href="" className={`text-dopos-blue`}>
							{/* TODO */}
							Napište nám!
						</a>
					</p>
				</div>
				<div className="grid desktop:grid-rows-1 desktop:grid-cols-4 desktop:gap-x-16 laptop:grid-rows-1 laptop:grid-cols-4 laptop:gap-x-8 tablet:grid tablet:grid-cols-2 tablet:auto-rows-auto tablet:gap-4 tablet:px-4 grid-cols-1 auto-rows-auto gap-4 w-full h-full text-dopos-black">
					<ServiceCard
						image="/assets/img1.jpg"
						title="Provětrávané fasády"
						description="Jsme certifikovanou firmou pro dodávku a montáž sádrokartonových, sádrovláknitých a akustických systémů. Využít je lze na montáž příček, obkladů stěn, montáž podhledů a opláštění podkroví nebo i k realizaci suchých lehkých podlah."
					/>
					<ServiceCard
						image="/assets/img2.jpg"
						title="Sádrokartony, akustika"
						description="Zaměřujeme se především na návrh a realizaci provětrávaných fasád. Tyto fasády se od kontaktních fasád liší svislou vzduchovou mezeru, kterou je odvětráván vzduch a tím je zajištěn odvod vlhkosti z izolace. Konkrétní typ tepelněizolačních desek se volí s ohledem na požadavky na tuhost a objemovou hmotnost materiálu."
					/>
					<ServiceCard
						image="/assets/img3.jpeg"
						title="Požární ochrana staveb"
						description="Nabízíme vám služby v oblasti pasivní požární ochrany staveb. Naše firma se zabývá návrhem, dodávkou a montáží speciálních protipožárních konstrukcí. Na základě projektové dokumentace stavby jsme schopni navrhnout ekonomicky optimální řešení protipožárních konstrukcí."
					/>
					<ServiceCard
						image="/assets/img4.webp"
						title="Pískování ocelových konstrukcí"
						description="Nově se zaměřujeme na pískování (tryskání) ocelových konstrukcí a následnému standardnímu, či protipožárnímu nátěru. Pískování je jednou z nejúčinějších metod odstraňování nečistot z porvrchů, např. starých nátěrů, či koroze pomocí tryskání tzv. abraziva."
					/>
				</div>
			</div>
		</section>
	);
};

export default ServiceSection;
