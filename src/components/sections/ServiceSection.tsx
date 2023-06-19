import AnchorTag from "../ui/AnchorTag"

const ServiceSection = () => {
    return (
        <section className={`grow relative bg-blue-600`} style={{ height: 'calc(100vh - 4rem)'}}>
            <AnchorTag section="sluzby" />
            Služby
        </section>
    )
}

export default ServiceSection