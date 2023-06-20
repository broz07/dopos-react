import Image from 'next/image';

interface Props {
    title: string;
    text: string;
    image: string;
    alt: string;
}

const ContactCol = ({ title, text, image, alt }: Props) => {
    return (
        <div>
            <Image src={image} alt={alt} width={40} height={40}/>
            <h4>{title}</h4>
            <span>{text}</span>
        </div>
    );
}

export default ContactCol;
