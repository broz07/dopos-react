'use client';
import AnchorTag from '../ui/AnchorTag';
import CountUp from 'react-countup';
import Image from 'next/image';
import { usePageContext } from '@dopos/contexts/PageContext';
const AboutSection = () => {
	const { currentPage, animationPlayed, setAnimationPlayed } = usePageContext();

	return (
		<section
			className={`grow relative bg-gray-100 text-dopos-black font-bold scrollama-step p-6 flex flex-col justify-start items-center`}
			data-step="o-nas"
			style={{ height: 'calc(100vh - 4rem)' }}
		>
			<AnchorTag section="o-nas" />
			<div className={`flex flex-row justify-start items-start w-full h-full`}>
				<div
					className={`flex flex-col justify-center items-center w-1/2 h-full gap-4`}
				>
					<h2 className={`text-6xl w-full text-center`}>
						S námi se nespálíte!
					</h2>
					<div>
						<ul>
							<li>
								Našim cílem je kontinuální poskytování kvalitních služeb
								zákazníkům, včetně komplexního servisu.
							</li>
							<li>
								Na základě projektové dokumentace nebo podrobné prohlídky stavby
								jsme schopni navrhnout ekonomicky optimální řešení
								protipožárních konstrukcí.
							</li>
							<li>Na konkrétní zadání zpracujeme zdarma cenovou nabídku.</li>
							<li>
								Součástí našich služeb je také konzultace s projektantem požárně
								bezpečnostního řešení včetně odsouhlasení navrženého postupu s
								dotyčnou stavební prevencí Hasičského záchranného sboru.
							</li>
							<li>
								Garantujeme bezproblémovou kolaudaci v oblasti našich dodávek.
							</li>
							<li>
								Pro stávající zkolaudované objekty v provozu zajišťujeme
								kontrolu požárně bezpečnostních zařízení podle vyhlášky
								Ministerstva vnitra č. 246 z 21.6.2001.
							</li>
						</ul>
					</div>
					<div
						className={`flex flex-row justify-center items-center w-full h-24 gap-4`}
					>
						{currentPage === 'o-nas' && !animationPlayed && (
							<CountUp
								className={`text-grey-900 text-6xl h-full w-1/3`}
								end={2007}
								duration={3}
								separator=" "
								onEnd={() => setAnimationPlayed(true)}
							/>
						)}
						{currentPage === 'o-nas' && animationPlayed && <span>2007</span>}
						{currentPage !== 'o-nas' && animationPlayed && <span>2007</span>}
						{currentPage !== 'o-nas' && !animationPlayed && <span>0</span>}
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
