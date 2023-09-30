import { useTranslation } from 'react-i18next';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { changeLanguage } from 'i18next';

const HomeSection = () => {
	const { t } = useTranslation();
	return (
		<div
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
				</p>
				<div
					className='absolute bottom-20 flex flex-row justify-center items-center gap-x-6 text-3xl'
				>
					<span 
						className="fi fi-cz cursor-pointer" 
						onClick={()=>{changeLanguage('cz')}}
					/>
					<span
						className="fi fi-gb cursor-pointer"
						onClick={()=>{changeLanguage('en')}}
					/>
					<span 
						className="fi fi-de cursor-pointer" 
						onClick={()=>{changeLanguage('de')}}
					/>
				</div>
			</div>
		</div>
	);
};

export default HomeSection;
