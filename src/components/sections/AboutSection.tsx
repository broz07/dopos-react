import AnchorTag from '../ui/AnchorTag';
import Image from 'next/image';
import Count from '../ui/Count';
const AboutSection = () => {
	return (
		<section
			className={`grow relative bg-gray-100 text-dopos-black font-bold scrollama-step p-6 flex flex-col justify-start items-center`}
			data-step="o-nas"
			style={{ height: 'calc(100vh - 4rem)' }}
		>
			<AnchorTag section="o-nas" />
			<div className={`flex flex-row justify-start items-start w-full h-full`}>

			</div>
		</section>
	);
};

export default AboutSection;
