import { Parallax } from 'react-parallax';

const ParallaxSection = () => {
	return (
		<Parallax
			className="h-96 flex flex-col justify-center items-center"
			style={{ backgroundColot: 'rbga(0,0,0,0.1)' }}
			bgImage="/assets/img7.webp"
			blur={{ min: 0, max: 6 }}
			strength={500}
		>
			<div className="flex flex-col justify-center items-center gap-2 text-dopos-black">
				<h2 className="text-6xl font-bold">Jsme jediní...</h2>
				<p className="text-3xl font-bold">
					kdo v ČR vlastní certifikát pro aplikaci monolitických akustických
					podhledů Rockfon® Mono Acoustic
				</p>
			</div>
		</Parallax>
	);
};

export default ParallaxSection;
