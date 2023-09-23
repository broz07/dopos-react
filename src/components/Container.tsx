import { Parallax, Background } from 'react-parallax';

const Container = () => (
	<Parallax
		blur={{ min: -15, max: 15 }}
		bgImage="/assets/dopos_bg.jpg"
		bgImageAlt="the dog"
		strength={-200}
	>
		Blur transition from min to max
		<div style={{ height: '500px' }} />
	</Parallax>
);

export default Container;
