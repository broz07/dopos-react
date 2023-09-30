import { useTranslation } from 'react-i18next';
import AnchorTag from '../ui/AnchorTag';
import ServiceCard from '../ui/ServiceCard';

const ServiceSection = () => {
	const { t } = useTranslation();

	return (
		<section
			className={`grow relative flex flex-col justify-center items-center w-full bg-gray-100 scrollama-step h-auto min-h-[56rem]`}
			data-step="sluzby"
		>
			<AnchorTag section="sluzby" />
			<div
				className={`flex flex-col justify-start items-center w-full h-auto min-h-[56rem] p-10`}
			>
				<div
					className={`flex flex-col justify-center items-center w-full px-8 text-dopos-black max-w-4xl mb-10`}
				>
					<h2 className={`text-5xl font-bold text-center mb-4`}>
						{t('services.title')}
					</h2>
					<p className={`text-2xl text-center text-gray-500`}>
						{t('services.subtitle')}
						<a href="#kontakt" className={`text-dopos-blue`}>
							{t('services.anchor')}
						</a>
					</p>
				</div>
				<div className="grid desktop:grid-rows-1 desktop:grid-cols-4 desktop:gap-x-16 laptop:grid-rows-1 laptop:grid-cols-4 laptop:gap-x-8 tablet:grid tablet:grid-cols-2 tablet:auto-rows-auto tablet:gap-4 tablet:px-4 grid-cols-1 auto-rows-auto gap-4 w-full h-full text-dopos-black">
					<ServiceCard
						image="/assets/img1.jpg"
						title={t('services.facades.title')}
						description={t('services.facades.text')}
					/>
					<ServiceCard
						image="/assets/img2.jpg"
						title={t('services.acoustics.title')}
						description={t('services.acoustics.text')}
					/>
					<ServiceCard
						image="/assets/img3.jpeg"
						title={t('services.protection.title')}
						description={t('services.protection.text')}
					/>
					<ServiceCard
						image="/assets/img4.webp"
						title={t('services.sandblasting.title')}
						description={t('services.sandblasting.text')}
					/>
				</div>
			</div>
		</section>
	);
};

export default ServiceSection;
