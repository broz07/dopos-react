import ContactCol from "./ContactCol";

const Footer = () => {
    return (
        <footer className={`desktop:grid desktop: grid-rows-2 desktop:grid-cols-3 desktop:gap-4 desktop:h-20 p-4 bg-gray-900 text-white`}>
            <ContactCol image="/assets/icons/location-dot-solid.svg" alt="location" title="test" text="test" />
            <ContactCol image="/assets/icons/location-dot-solid.svg" alt="location" title="test" text="test" />
            <ContactCol image="/assets/icons/location-dot-solid.svg" alt="location" title="test" text="test" />
        </footer>
    )
}

export default Footer;