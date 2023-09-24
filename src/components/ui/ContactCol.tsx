import Image from 'next/image';

interface Props {
	title: string;
	text: string;
	image: string;
	alt: string;
}

const ContactCol = ({ title, text, image, alt }: Props) => {
	return (
		<div className={`flex flex-row justify-start items-center content-center h-16 w-96 px-4`}>
			<div className={`flex flex-col justify-center content-center h-8 w-8`}>
				<Image className={`min-h-8 min-w-8`} src={image} alt={alt} width={40} height={40} />
			</div>
			<div
				className={`flex flex-col justify-center content-center ml-2 whitespace-nowrap`}
			>
				<h4 className={`text-xl font-semibold mb-0.5`}>{title}</h4>
				<span className={`text-gray-500 text-sm`}>{text}</span>
			</div>
		</div>
	);
};

export default ContactCol;
