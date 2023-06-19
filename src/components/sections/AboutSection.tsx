import AnchorTag from "../ui/AnchorTag"

const AboutSection = () => {
    return (
        <section className={`grow relative bg-red-600 scrollama-step`} data-step="o-nas" style={{ height: 'calc(100vh - 4rem)'}} >
            <AnchorTag section="o-nas" />
            About
        </section>
    )
}

export default AboutSection