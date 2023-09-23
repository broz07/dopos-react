'use client';

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
	return (
		<Carousel
			autoPlay
			interval={3000}
			animationHandler={'fade'}
			transitionTime={1000}
			showArrows={false}
			showStatus={false}
			infiniteLoop
			showIndicators={false}
			showThumbs={false}
		>
			<div>
				<Image
					src="/assets/img1.jpg"
					alt="Image 1"
					width={1000}
					height={500}
					className="object-fill"
				/>
			</div>
			<div>
				<Image
					src="/assets/img3.jpeg"
					alt="Image 1"
					width={1000}
					height={500}
					className="object-fill"
				/>
			</div>
			<div>
				<Image
					src="/assets/img7.webp"
					alt="Image 1"
					width={1000}
					height={500}
					className="object-fill"
				/>
			</div>
			<div>
				<Image
					src="/assets/img8.jpg"
					alt="Image 1"
					width={1000}
					height={500}
					className="object-fill"
				/>
			</div>
			<div>
				<Image
					src="/assets/img2.jpg"
					alt="Image 1"
					width={1000}
					height={500}
					className="object-fill"
				/>
			</div>
		</Carousel>
	);
};

export default ImageCarousel;
