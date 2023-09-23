import PageLayout from '@dopos/components/pages/PageLayout';
import { PageContextProvider } from '@dopos/contexts/PageContext';

const Home = async () => {
	return (
		<PageContextProvider>
			<PageLayout />
		</PageContextProvider>
	);
};

export default Home;
