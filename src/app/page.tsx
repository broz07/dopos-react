import PageLayout from '@dopos/components/pages/PageLayout';
import { PageContextProvider } from '@dopos/contexts/PageContext';
import Script from 'next/script';

const Home = async () => {
	return (
		<PageContextProvider>
			<Script async src="https://www.googletagmanager.com/gtag/js?id=G-HC65LENXQR"></Script> 
			<Script id="google-analytics"> 
				{`
					window.dataLayer = window.dataLayer || [];   
					function gtag(){dataLayer.push(arguments);}   
					gtag('js', new Date());
				
					gtag('config', 'G-HC65LENXQR');
				`} 
			</Script>
			<PageLayout />
		</PageContextProvider>
	);
};

export default Home;
