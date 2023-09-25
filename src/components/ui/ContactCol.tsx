import Image from 'next/image';

interface Props {
	title: string;
	text: string;
	image: string;
	alt: string;
}

const ContactCol = ({ title, text, image, alt }: Props) => {
	return (
		<div
			className={`flex flex-row justify-start items-center content-center h-16 w-96 px-4`}
		>
			<div
				className={`flex flex-col justify-center content-center min-h-[2rem] min-w-[2rem] max-h-[2rem] max-w-[2rem]`}
			>
				<Image
					className={`min-h-[2rem] min-w-[2rem] max-h-[2rem] max-w-[2rem]`}
					src={image}
					alt={alt}
					width={30}
					height={30}
				/>
			</div>
			<div
				className={`flex flex-col justify-center content-center ml-3 whitespace-nowrap`}
			>
				<h4 className={`text-xl font-semibold mb-0.5`}>{title}</h4>
				<span className={`text-gray-500 text-sm`}>{text}</span>
			</div>
		</div>
	);
};

export default ContactCol;
