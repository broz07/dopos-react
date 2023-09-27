'use client';

import { Button } from '@mui/material';
import Image from 'next/image';
import EastIcon from '@mui/icons-material/East';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SwipeableViews from 'react-swipeable-views';

interface Props {
	images: string | string[];
	title: string;
	description: string;
}

const PortfolioItem: React.FC<Props> = ({ images, title, description }) => {
	const [index, setIndex] = useState(0);

	if (typeof images === 'string') images = [images];

	return (
		<div className="relative w-full h-full flex desktop:flex-row laptop:flex-row flex-col justify-start items-center">
			<div className="relative desktop:w-1/2 laptop:w-1/2 desktop:h-full laptop:h-full w-full h-1/2">
				<Button
					// className="absolute top-1/2 left-3 z-10 min-w-0 min-h-0 w-12 h-12 bg-white text-dopos-black hover:bg-white"
					variant="contained"
					size="small"
					color="inherit"
					sx={{
						position: 'absolute !important',
						top: '50% !important',
						left: '0.75rem !important',
						zIndex: 10,
						minWidth: '0px !important',
						minHeight: '0px !important',
						width: '3rem !important',
						height: '3rem !important',
						backgroundColor: 'white !important',
						color: 'rgb(27,25,24)',
						':hover': {
							backgroundColor: 'white !important',
						},
					}}
					onClick={() => {
						if (index === 0) return;
						setIndex((prev) => prev - 1);
					}}
				>
					<ArrowBackIcon />
				</Button>
				<Button
					// className="absolute top-1/2 right-3 z-10 min-w-0 min-h-0 w-12 h-12 text-dopos-black bg-white hover:bg-white"
					variant="contained"
					size="small"
					color="inherit"
					sx={{
						position: 'absolute !important',
						top: '50% !important',
						right: '0.75rem !important',
						zIndex: 10,
						minWidth: '0px !important',
						minHeight: '0px !important',
						width: '3rem !important',
						height: '3rem !important',
						backgroundColor: 'white !important',
						color: 'rgb(27,25,24)',
						':hover': {
							backgroundColor: 'white !important',
						},
					}}
					onClick={() => {
						if (index === images.length - 1) return;
						setIndex((prev) => prev + 1);
					}}
				>
					<ArrowForwardIcon />
				</Button>
				<SwipeableViews
					className="w-full h-full"
					enableMouseEvents
					index={index}
					onChangeIndex={(index) => setIndex(index)}
					containerStyle={{ height: '100%' }}
				>
					{images.map((image, i) => (
						<Image
							src={image}
							alt={title}
							width={1920}
							height={1080}
							className="w-full h-full"
							draggable="false"
							style={{ objectFit: 'cover' }}
							key={i}
						/>
					))}
				</SwipeableViews>
			</div>
			<div className="relative desktop:w-1/2 laptop:w-1/2 desktop:h-full laptop:h-full w-full h-1/2 desktop:pl-6 laptop:pl-6 p-2 flex flex-col justify-center items-start">
				<h3 className="uppercase font-bold text-3xl desktop:mb-7 laptop:mb-7 mb-2">{title}</h3>
				<p className="text-lg text-gray-500 mb-0">{description}</p>
				<Button
					// className="mt-6 normal-case bg-dopos-blue hover:bg-dopos-blue text-white font-semibold py-2 px-4 rounded text-base"
					sx={{
						marginTop: '1.5rem',
						textTransform: 'none',
						backgroundColor: 'rgb(0,158,224)',
						color: 'white',
						fontWeight: 600,
						padding: '0.5rem 1rem 0.5rem 1rem',
						borderRadius: '0.25rem',
						fontSize: '1rem',
						lineHeight: '1.5rem',
						'&:hover': {
							backgroundColor: 'rgb(0,158,224)',
						},
					}}
					variant="contained"
					href="#kontakt"
					endIcon={<EastIcon />}
				>
					Chci podobný projekt!
				</Button>
			</div>
		</div>
	);
};

export default PortfolioItem;
