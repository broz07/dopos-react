import AnchorTag from '../ui/AnchorTag';
import AboutCard from '../ui/AboutCard';
import { useTranslation } from 'react-i18next';
const AboutSection = () => {
	const { t } = useTranslation();

	return (
		<section
			className={`grow relative h-auto bg-gray-100 scrollama-step p-6 w-full flex flex-row justify-center items-start min-h-[56rem]`}
			data-step="o-nas"
		>
			<AnchorTag section="o-nas" />
			<div className="w-full h-full min-h-[56rem] flex flex-col justify-start items-center py-8 desktop:px-16 laptop:px-16 tablet:px-16 px-8">
				<div className="w-full h-1/6 flex justify-center items-center max-w-4xl mb-12 max-h-32">
					<h2 className="uppercase grid text-5xl font-bold text-center">
						<small className="text-lg font-semibold text-dopos-blue mb-0">
							{t('about.title.small')}
						</small>
						{t('about.title.big')}
					</h2>
				</div>
				<div className="w-full min-h-[42rem] grid laptop:grid desktop:grid-rows-5 desktop:grid-col-3 desktop:gap-16 laptop:grid-rows-5 laptop:grid-col-3 laptop:gap-16 grid-col-1 auto-rows-auto gap-8">
					<AboutCard
						image="/assets/reviews.svg"
						title={t('about.first.title')}
						description={t('about.first.text')}
						className="desktop:row-start-1 desktop:row-span-4 laptop:row-start-1 laptop:row-span-4 flex flex-col items-center justify-start w-full h-full bg-white rounded-xl shadow-xl"
					/>
					<AboutCard
						image="/assets/certificate.svg"
						title={t('about.second.title')}
						description={t('about.second.text')}
						className="desktop:row-start-2 desktop:row-span-4 laptop:row-start-2 laptop:row-span-4 flex flex-col items-center justify-start w-full h-full bg-white rounded-xl shadow-xl"
					/>
					<AboutCard
						image="/assets/security.svg"
						title={t('about.third.title')}
						description={t('about.third.text')}
						className="desktop:row-start-1 desktop:row-span-4 laptop:row-start-1 laptop:row-span-4 flex flex-col items-center justify-start w-full h-full bg-white rounded-xl shadow-xl"
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
