import { Parallax } from 'react-parallax';
import Count from '../ui/Count';

const CountupSection = () => {
	const countUpClass =
		'flex flex-col justify-center items-center bg-white bg-opacity-80 rounded-xl shadow-xl p-8 w-96';

	return (
		<div
			className="min-h-[12rem] h-auto w-full flex flex-col justify-center items-center scrollama-step"
			data-step="countup"
		>
			<Parallax
				className="min-h-[12rem] h-auto w-full flex flex-col justify-center items-center"
				bgImage="/assets/img7.webp"
				blur={{ min: 0, max: 6 }}
				strength={500}
				contentClassName="flex desktop:flex-row laptop:flex-row flex-col w-full h-full justify-center items-center gap-8 text-dopos-black p-8"
			>
				<Count
					text="rok založení"
					end={2007}
					separator=""
					className={countUpClass}
				/>
				<Count
					text="realizovaných projektů"
					end={100}
					separator=","
					prefix="Přes "
					className={countUpClass}
				/>
				<Count text="let zkušeností" end={30} className={countUpClass} />
			</Parallax>
		</div>
	);
};

export default CountupSection;
