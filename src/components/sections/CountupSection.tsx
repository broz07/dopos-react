import { Parallax } from 'react-parallax';
import Count from '../ui/Count';
import { useTranslation } from 'react-i18next';

const CountupSection = () => {
	const { t } = useTranslation();
	const countUpClass =
		'flex flex-col justify-center items-center bg-white bg-opacity-80 rounded-xl shadow-xl p-8 w-96';

	return (
		<div
			className="min-h-[12rem] h-auto w-full flex flex-col justify-center items-center scrollama-step"
			data-step="countup"
		>
			<Parallax
				className="min-h-[12rem] h-auto w-full flex flex-col justify-center items-center"
				bgImage="/assets/img7.webp"
				blur={{ min: 0, max: 6 }}
				strength={500}
				contentClassName="flex desktop:flex-row laptop:flex-row flex-col w-full h-full justify-center items-center gap-8 text-dopos-black p-8"
			>
				<Count
					text={t('countup.first.text')}
					end={2007}
					separator=""
					className={countUpClass}
				/>
				<Count
					text={t('countup.second.text')}
					end={100}
					separator=","
					prefix={t('countup.second.prefix')}
					className={countUpClass}
				/>
				<Count
					text={t('countup.third.text')}
					end={30}
					className={countUpClass}
				/>
			</Parallax>
		</div>
	);
};

export default CountupSection;
