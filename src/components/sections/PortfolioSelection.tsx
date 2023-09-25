import AnchorTag from '../ui/AnchorTag';

const PortfolioSelection = () => {
	return (
		<section
			className={`grow relative bg-green-600 scrollama-step`}
			data-step="portfolio"
			style={{ height: 'calc(100vh - 4rem)' }}
		>
			<AnchorTag section="portfolio" />
			Portfolio
		</section>
	);
};

export default PortfolioSelection;
