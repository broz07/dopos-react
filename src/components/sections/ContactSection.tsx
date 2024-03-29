import { Button } from '@mui/material';
import AnchorTag from '../ui/AnchorTag';
import Contact from '../ui/Contact';
import EastIcon from '@mui/icons-material/East';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
	const { t } = useTranslation();

	return (
		<section
			className={`grow relative bg-dopos-black text-gray-100 scrollama-step py-20 flex flex-col justify-start h-auto min-h-[60rem] items-center`}
			data-step="kontakt"
			// style={{ height: 'calc(100vh - 4rem)' }}
		>
			<AnchorTag section="kontakt" />
			<div className="w-full h-1/6 flex justify-center items-center max-w-5xl max-h-20 mb-12">
				<h2 className="uppercase grid text-5xl font-bold text-center">
					<small className="text-lg font-semibold text-dopos-blue mb-0">
						{t('contact.title.small')}
					</small>
					{t('contact.title.big')}
				</h2>
			</div>
			<div className="w-full h-auto max-w-5xl flex desktop:flex-row laptop:flex-row tablet:flex-row flex-col justify-center items-start p-8">
				<div className="desktop:w-2/3 laptop:w-2/3 tablet:w-1/2 w-full flex desktop:flex-row laptop:flex-row flex-col pb-8">
					<Contact
						fullname="Martin Straka"
						role={t('contact.martin.title')}
						tel="+420 720 689 596"
						email="straka@doposhk.cz"
					/>
					<Contact
						fullname="Iva Straková"
						role={t('contact.iva.title')}
						email="strakova@doposhk.cz"
					/>
				</div>
				<div className="desktop:w-1/3 laptop:w-1/3 tablet:w-1/2 w-full flex flex-col justify-start bg-dopos-blue p-8 rounded-md">
					<h3 className="uppercase text-3xl font-bold leading-none mb-2">
						{t('contact.panel.contact')}
					</h3>
					<ul className="mb-6 text-xl pl-0 mt-0">
						<li>Bratří Štefanů 973/63a</li>
						<li>500 03, Hradec Králové</li>
						<li>+420 720 689 596</li>
					</ul>
					<h3 className="uppercase text-3xl font-bold leading-none mb-2">
						{t('contact.panel.invoicing')}
					</h3>
					<ul className="mb-6 text-xl pl-0 mt-0">
						<li>
							<b>DOPOS HK s.r.o.</b>
						</li>
						<li>Jasmínová 119</li>
						<li>503 32, Hradec Králové – Březhrad</li>
						<li>IČ: 275 13 831</li>
						<li>DIČ: CZ275 13 831</li>
					</ul>

					<Button
						// className="mt-6 normal-case bg-dopos-black hover:bg-dopos-blue text-white font-semibold py-2 px-4 rounded text-base"
						sx={{
							marginTop: '1.5rem',
							textTransform: 'none',
							backgroundColor: 'white',
							color: 'rgb(27,25,24)',
							fontWeight: 600,
							padding: '0.5rem 1rem 0.5rem 1rem',
							borderRadius: '0.25rem',
							fontSize: '1rem',
							lineHeight: '1.5rem',
							'&:hover': {
								backgroundColor: 'white',
							},
						}}
						variant="contained"
						href="https://maps.app.goo.gl/3GeaSaZ3MaTM8UmP8"
						target="_blank"
						endIcon={<EastIcon />}
						aria-label={t('contact.panel.button')}
					>
						{t('contact.panel.button')}
					</Button>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
