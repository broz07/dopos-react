import { Parallax } from 'react-parallax';

const ParallaxSection = () => {
	return (
		<Parallax
			bgImage="/assets/img11.jpg"
			blur={{ min: 0, max: 6 }}
			strength={500}
			lazy
		>
			<div className="flex flex-col desktop:h-96 laptop:h-96 h-52 justify-center items-center gap-2 w-full text-dopos-black stroke-white stroke-">
				<h2 className="desktop:text-6xl laptop:text-6xl tablet:text-5xl font-bold text-center text-3xl">
					Jsme jediní...
				</h2>
				<p className="desktop:text-3xl laptop:text-3xl tablet:text-2xl font-bold text-center text-base">
					kdo v ČR vlastní certifikát pro aplikaci monolitických akustických
					podhledů Rockfon® Mono Acoustic
				</p>
			</div>
		</Parallax>
	);
};

export default ParallaxSection;
