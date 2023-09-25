'use client';
import SwipeableViews from 'react-swipeable-views';
import AnchorTag from '../ui/AnchorTag';
import { Button } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React, { useState } from 'react';
import PortfolioItem from '../ui/PortfolioItem';

const PortfolioSelection = () => {
	const [index, setIndex] = useState(0);

	const brodImages = [0, 1, 2, 3, 4, 5].map(
		(item) => `/assets/brod/${item}.jpg`,
	);
	const harfaImages = [0, 1].map((item) => `/assets/harfa/${item}.jpg`);
	const heralecImages = [0, 1, 2, 3, 4, 5].map(
		(item) => `/assets/heralec/${item}.jpg`,
	);
	const stukenImages = [0, 1, 2].map((item) => `/assets/stuken/${item}.jpg`);

	return (
		<section
			className={`grow relative bg-gray-100 scrollama-step`}
			data-step="portfolio"
			style={{ height: 'calc(100vh - 4rem)' }}
		>
			<AnchorTag section="portfolio" />
			<div className="w-full h-full flex flex-col justify-start items-center py-8 px-16">
				<h2 className="uppercase h-1/6 grid text-5xl font-bold text-center mb-8">
					<small className="text-lg font-normal text-dopos-blue mb-0">
						Prohlédněte si naše
					</small>
					{`realizované projekty`}
				</h2>
				<div className="w-full h-4/6 max-w-[102rem] border border-gray-300 select-none">
					<SwipeableViews
						className="w-full h-full"
						enableMouseEvents
						index={index}
						onChangeIndex={(index) => setIndex(index)}
						containerStyle={{ height: '100%' }}
					>
						<PortfolioItem
							images={brodImages}
							title="SPŠŠ Havlíčkuv Brod"
							description="Přístavba haly - provedli jsme SDK systémy KNAUF DIAMANT, podhledy AMF THERMATEX a aku. obklady AMF HERADESIGN, také cca 300 m2 provětrávané fasády DEKMETAL."
						/>
						<PortfolioItem
							images={harfaImages}
							title="Harfa Park VI"
							description="Harfa Park VI je poslední etapou dosud největšího bytového projektu v Praze. Naše firma zde provedla zateplenou provětrávanou fasádu deskami CEMBRIT, cca 300 m2."
						/>
						<PortfolioItem
							images={stukenImages}
							title="Stueken Hradec Králové"
							description="Nová hala společnosti STUEKEN s.r.o. Naše firma zde provedla 1250 m2 kazetových podhledů, 300 m2 příček a cca 150 m2 předsazených stěn."
						/>
						<PortfolioItem
							images={heralecImages}
							title="Základní škola Herálec"
							description="Ve školní tělocvičně jsme nainstalovali cca 130 m2 akustických, nárazu odolných, pohltivých desek THERMATEX HERADESIGN."
						/>
						<PortfolioItem
							images="/assets/img1.jpg"
							title="Provětrávané fasády"
							description="lorem ipsum dolor sit amet consectetur adipisicing elit."
						/>
						<PortfolioItem
							images="/assets/img1.jpg"
							title="Provětrávané fasády"
							description="lorem ipsum dolor sit amet consectetur adipisicing elit."
						/>
						<PortfolioItem
							images="/assets/img1.jpg"
							title="Provětrávané fasády"
							description="lorem ipsum dolor sit amet consectetur adipisicing elit."
						/>
					</SwipeableViews>
				</div>
				<div className="w-full h-1/6 flex justify-center items-center gap-2 mt-4">
					<Button
						className="min-w-0 min-h-0 w-12 h-12 bg-dopos-black text-white hover:bg-dopos-black"
						variant="contained"
						size="small"
						color="inherit"
						onClick={() => {
							if (index === 0) return;
							setIndex((prev) => prev - 1);
						}}
					>
						<ArrowBackIcon />
					</Button>
					<Button
						className="min-w-0 min-h-0 w-12 h-12 bg-dopos-black text-white hover:bg-dopos-black"
						variant="contained"
						size="small"
						color="inherit"
						onClick={() => {
							if (index === 6) return;
							setIndex((prev) => prev + 1);
						}}
					>
						<ArrowForwardIcon />
					</Button>
				</div>
				<ul className="inline-flex justify-center items-center w-full h-12 mt-2 gap-2">
					{[0, 1, 2, 3, 4, 5, 6].map((item) => (
						<li
							key={item}
							className={`block h-2 w-[5rem] cursor-pointer rounded-full ${
								index === item ? 'bg-dopos-blue' : 'bg-gray-300'
							}`}
							onClick={() => setIndex(item)}
						/>
					))}
					{/* <li className='block h-2 w-[5rem] rounded-full bg-gray-300'/>
					<li className='block h-2 w-[5rem] rounded-full bg-gray-300'/>
					<li className='block h-2 w-[5rem] rounded-full bg-gray-300'/>
					<li className='block h-2 w-[5rem] rounded-full bg-gray-300'/>
					<li className='block h-2 w-[5rem] rounded-full bg-gray-300'/>
					<li className='block h-2 w-[5rem] rounded-full bg-gray-300'/>
					<li className='block h-2 w-[5rem] rounded-full bg-gray-300'/> */}
				</ul>
			</div>
		</section>
	);
};

export default PortfolioSelection;
