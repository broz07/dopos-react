import { Parallax } from 'react-parallax';
import Count from '../ui/Count';

const CountupSection = () => {
	const countUpClass =
		'flex flex-col justify-center items-center bg-white bg-opacity-80 rounded-xl shadow-xl p-8 w-96';

	return (
		<div
			className="h-48 w-full flex flex-col justify-center items-center scrollama-step"
			data-step="countup"
		>
			<Parallax
				className="h-full w-full flex flex-col justify-center items-center"
				bgImage="/assets/img7.webp"
				blur={{ min: 0, max: 6 }}
				strength={500}
				contentClassName="flex flex-row w-full h-full justify-between items-center gap-8 text-dopos-black px-72"
			>
				<Count
					text="rok založení"
					end={2007}
					separator=" "
					className={countUpClass}
				/>
				<Count
					text="staveb"
					end={20}
					separator=","
					prefix="Přes "
					className={countUpClass}
				/>
				<Count
					text="let zkušeností"
					end={30}
					prefix=""
					className={countUpClass}
				/>
			</Parallax>
		</div>
	);
};

export default CountupSection;
