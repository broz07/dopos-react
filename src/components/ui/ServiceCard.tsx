import Image from 'next/image';

interface Props {
	image: string;
	title: string;
	description: string;
}

const ServiceCard: React.FC<Props> = ({ image, title, description }) => {
	return (
		<div className="flex flex-col items-center justify-start w-full h-full bg-white rounded-xl shadow-xl">
			<Image
				src={image}
				alt={title}
				className="w-full h-3/7 object-cover rounded-t-xl max-h-44 min-h-[11rem]"
				width={1920}
				height={1080}
			/>
			<div className="flex flex-col justify-center items-center w-full h-4/7 p-4">
				<h3 className="text-2xl font-bold text-center">{title}</h3>
				<p className="text-lg text-center">{description}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
