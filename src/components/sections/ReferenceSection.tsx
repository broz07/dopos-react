import AnchorTag from "../ui/AnchorTag"

const ReferenceSection = () => {
    return (
        <section className={`grow relative bg-green-600`} style={{ height: 'calc(100vh - 4rem)'}}>
            <AnchorTag section="reference" />
            Reference
        </section>
    )
}

export default ReferenceSection