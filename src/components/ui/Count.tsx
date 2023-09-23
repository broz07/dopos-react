'use client';

import { usePageContext } from '@dopos/contexts/PageContext';
import CountUp from 'react-countup';

interface Props {
	text: string;
	end: number;
	page: string;
	separator?: string;
	prefix?: string;
	suffix?: string;
}

const Count: React.FC<Props> = ({
	text,
	end,
	page,
	separator = '',
	prefix,
	suffix,
}) => {
	const { animationPlayed, currentPage, setAnimationPlayed } = usePageContext();

	const classDefinition: string = `text-grey-900 text-4xl w-full text-center`;

	const separateNumber = (number: number): string => {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
	};

	return (
		<div
			className={`flex flex-col justify-center items-center h-full w-full bg-dopos-red text-gray-100 p-2 rounded-lg`}
		>
			{currentPage === page && !animationPlayed && (
				<CountUp
					className={classDefinition}
					end={end}
					duration={2.5}
					separator={separator}
					prefix={prefix || ''}
					suffix={suffix || ''}
					delay={0.25}
					onEnd={() => setAnimationPlayed(true)}
				/>
			)}
			{currentPage === page && animationPlayed && (
				<span className={classDefinition}>
					{prefix}
					{separateNumber(end)}
					{suffix}
				</span>
			)}
			{currentPage !== page && animationPlayed && (
				<span className={classDefinition}>
					{prefix}
					{separateNumber(end)}
					{suffix}
				</span>
			)}
			{currentPage !== page && !animationPlayed && (
				<span className={classDefinition}>
					{prefix}0{suffix}
				</span>
			)}
			<span className={`text-grey-900 text-2xl w-full text-center`}>
				{text}
			</span>
		</div>
	);
};

export default Count;
