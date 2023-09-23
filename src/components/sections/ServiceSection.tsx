import { Parallax } from 'react-parallax';
import AnchorTag from '../ui/AnchorTag';

const ServiceSection = () => {
	return (
		<section
			className={`grow relative bg-blue-600 scrollama-step`}
			data-step="sluzby"
			style={{ height: 'calc(100vh - 4rem)' }}
		>
			<AnchorTag section="sluzby" />
			<Parallax
				className="h-full flex flex-col justify-center items-center text-white"
				bgImage="/assets/img7.webp"
			>
				Služby
			</Parallax>
		</section>
	);
};

export default ServiceSection;
