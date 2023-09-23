import AnchorTag from '../ui/AnchorTag';

const ContactSection = () => {
	return (
		<section
			className={`grow relative bg-pink-600 scrollama-step`}
			data-step="kontakt"
			style={{ height: 'calc(100vh - 4rem)' }}
		>
			<AnchorTag section="kontakt" />
			Kontakt
		</section>
	);
};

export default ContactSection;
