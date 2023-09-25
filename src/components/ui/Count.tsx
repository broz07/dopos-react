'use client';

import { usePageContext } from '@dopos/contexts/PageContext';
import CountUp from 'react-countup';

interface Props {
	text: string;
	end: number;
	separator?: string;
	prefix?: string;
	suffix?: string;
	className?: string;
}

const Count: React.FC<Props> = ({
	text,
	end,
	separator = '',
	prefix,
	suffix,
	className,
}) => {
	const { animationPlayed, animationTriggered, setAnimationPlayed } =
		usePageContext();

	const classDefinition: string = `text-grey-900 text-4xl w-full text-center`;

	const separateNumber = (number: number): string => {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
	};

	return (
		<div
			className={
				className
					? className
					: `flex flex-col justify-center items-center h-full w-full bg-dopos-red text-gray-100 p-2 rounded-lg`
			}
		>
			{animationTriggered && !animationPlayed && (
				<CountUp
					className={classDefinition}
					end={end}
					duration={2.5}
					separator={separator}
					prefix={prefix || ''}
					suffix={suffix || ''}
					// delay={0.50}
					onEnd={() => setAnimationPlayed(true)}
				/>
			)}
			{animationTriggered && animationPlayed && (
				<span className={classDefinition}>
					{prefix}
					{separateNumber(end)}
					{suffix}
				</span>
			)}
			{!animationTriggered && animationPlayed && (
				<span className={classDefinition}>
					{prefix}
					{separateNumber(end)}
					{suffix}
				</span>
			)}
			{!animationTriggered && !animationPlayed && (
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
