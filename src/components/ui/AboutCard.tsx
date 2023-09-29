import Image from 'next/image';

interface Props {
	image: string;
	title: string;
	description: string;
	className?: string;
}

const AboutCard: React.FC<Props> = ({
	image,
	title,
	description,
	className,
}) => {
	return (
		<div
			className={`${
				className ||
				'flex flex-col items-center justify-start w-full h-auto bg-white rounded-xl shadow-xl'
			}`}
		>
			<div className="w-full h-3/5 p-8 flex justify-center items-center rounded-t-xl max-h-72 mb-4">
				<Image
					src={image}
					alt={title}
					className="w-full h-full object-contain"
					width={200}
					height={200}
				/>
			</div>

			<div className="flex flex-col justify-center items-center w-full  p-4">
				<h3 className="text-2xl font-bold text-center">{title}</h3>
				<p className="text-lg text-center">{description}</p>
			</div>
		</div>
	);
};

export default AboutCard;
