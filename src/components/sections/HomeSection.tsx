import Image from 'next/image';

const HomeSection = () => {
	return (
		<div
			// className="h-[38rem] scrollama-step select-none bg-white"
			className="h-screen scrollama-step select-none bg-white"
			data-step="home"
		>
			{/* <ImageCarousel /> */}
			{/* <Image
				src="/assets/img3.jpeg"
				alt="Sample Image"
				width={1920}
				height={1080}
				className="w-full h-full object-cover opacity-80"
			/> */}
            <video 
                src="/assets/video.mp4" 
                autoPlay
                loop
                muted
				className="w-full h-full z-0 object-cover opacity-70"
            />
		</div>
	);
};

export default HomeSection;
