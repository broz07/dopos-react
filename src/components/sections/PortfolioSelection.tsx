'use client';
import SwipeableViews from 'react-swipeable-views';
import AnchorTag from '../ui/AnchorTag';
import { Button } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React, { useState } from 'react';
import PortfolioItem from '../ui/PortfolioItem';
import { useTranslation } from 'react-i18next';

const PortfolioSelection = () => {
	const [index, setIndex] = useState(0);
	const { t } = useTranslation();

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
			className={`grow relative bg-gray-100 scrollama-step h-auto min-h-[60rem]`}
			data-step="portfolio"
		>
			<AnchorTag section="portfolio" />
			<div className="w-full h-auto min-h-[60rem] flex flex-col justify-start items-center py-8 desktop:px-16 laptop:px-16 tablet:px-16 px-8">
				<div className="w-full h-1/6 flex justify-center items-center max-w-4xl mb-12 max-h-32">
					<h2 className="uppercase grid text-5xl font-bold text-center">
						<small className="text-lg font-semibold text-dopos-blue mb-0">
							{t('portfolio.title.small')}
						</small>
						{t('portfolio.title.big')}
					</h2>
				</div>
				<div className="w-full h-4/6 max-w-[102rem] border border-gray-300 select-none max-h-[34rem] min-h-[34rem]">
					<SwipeableViews
						className="w-full h-full max-h-[34rem]"
						enableMouseEvents
						index={index}
						onChangeIndex={(index) => setIndex(index)}
						containerStyle={{ height: '100%' }}
					>
						<PortfolioItem
							images={harfaImages}
							title={t('portfolio.first.title')}
							description={t('portfolio.first.text')}
						/>
						<PortfolioItem
							images={brodImages}
							title={t('portfolio.second.title')}
							description={t('portfolio.second.text')}
						/>
						<PortfolioItem
							images={stukenImages}
							title={t('portfolio.third.title')}
							description={t('portfolio.third.text')}
						/>
						<PortfolioItem
							images={heralecImages}
							title={t('portfolio.fourth.title')}
							description={t('portfolio.fourth.text')}
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
				<div className="w-full h-1/6 flex flex-col gap-2 justify-center items-center max-h-24">
					<div className="w-full flex flex-row justify-center items-center gap-4 mt-12 max-h-24">
						<Button
							// className="min-w-0 min-h-0 w-12 h-12 bg-dopos-black text-white hover:bg-dopos-black"
							sx={{
								minWidth: '0px !important',
								minHeight: '0px !important',
								width: '3rem !important',
								height: '3rem !important',
								backgroundColor: 'rgb(27,25,24) !important',
								color: 'white',
								':hover': {
									backgroundColor: 'rgb(27,25,24) !important',
								},
							}}
							variant="contained"
							size="small"
							color="inherit"
							onClick={() => {
								if (index === 0) return;
								setIndex((prev) => prev - 1);
							}}
							aria-label="Předchozí projekt"
						>
							<ArrowBackIcon />
						</Button>
						<Button
							// className="min-w-0 min-h-0 w-12 h-12 bg-dopos-black text-white hover:bg-dopos-black"
							sx={{
								minWidth: '0px !important',
								minHeight: '0px !important',
								width: '3rem !important',
								height: '3rem !important',
								backgroundColor: 'rgb(27,25,24) !important',
								color: 'white',
								':hover': {
									backgroundColor: 'rgb(27,25,24) !important',
								},
							}}
							variant="contained"
							size="small"
							color="inherit"
							onClick={() => {
								if (index === 6) return;
								setIndex((prev) => prev + 1);
							}}
							aria-label="Další projekt"
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
			</div>
		</section>
	);
};

export default PortfolioSelection;
