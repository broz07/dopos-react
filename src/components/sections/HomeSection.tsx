// "use client"
import { Button } from '@mui/material';
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';

const HomeSection = () => {
	const { t } = useTranslation();
	return (
		<div
			// className="h-[38rem] scrollama-step select-none bg-white"
			className="relative h-screen w-screen scrollama-step bg-white"
			data-step="home"
		>
			<div className="absolute top-0 w-full h-full bg-white opacity-30" />
			<video
				src="/assets/video.mp4"
				autoPlay
				loop
				muted
				controls={false}
				playsInline
				className="w-full h-full object-cover z-[-1]"
			/>
			<div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-dopos-black">
				<h1 className="text-7xl font-bold text-center uppercase">
					{t('home.slogan')}
				</h1>
				<p className="text-3xl font-bold text-center text-dopos-blue">
					{t('home.company')}
					<Button
						variant="contained"
						onClick={() => {
							changeLanguage('cs');
						}}
					>
						cs
					</Button>
					<Button
						variant="contained"
						onClick={() => {
							changeLanguage('en');
						}}
					>
						en
					</Button>
					<Button
						variant="contained"
						onClick={() => {
							changeLanguage('de');
						}}
					>
						de
					</Button>
				</p>
			</div>
		</div>
	);
};

export default HomeSection;
