import Image from "next/image"
import { Parallax } from "react-parallax"

interface PartnerImage {
    source: string
    alt: string
}

const PartnerSection = () => {
    const partnerImages: PartnerImage[] = [
        {source:"/assets/partners/dekmetal.svg", alt: "DEKMETAL"},
        {source:"/assets/partners/isover.png", alt: "ISOVER"},
        {source:"/assets/partners/knauf.svg", alt: "KNAUF"},
        {source:"/assets/partners/knaufinsulation.svg", alt: "KNAUF INSULATION"},
        {source:"/assets/partners/promat.svg", alt: "PROMAT"},
        {source:"/assets/partners/rigips.svg", alt: "RIGIPS"},
        {source:"/assets/partners/rockfon.svg", alt: "ROCKFON"}
    ]

    return (
        <div
            className="min-h-[12rem] h-auto w-full"
        >
            <Parallax
				className="min-h-[12rem] h-auto w-full flex flex-col justify-center items-center"
                bgImage="/assets/img11.jpg"
				blur={{ min: 0, max: 6 }}
				strength={500}
				contentClassName="flex desktop:flex-row laptop:flex-row flex-col w-full h-full justify-center items-center gap-8 text-dopos-black p-8"
			>
                {
                    partnerImages.map((partnerImage, index) => (
                        <div
                            key={index}
                            className="flex justify-center items-center w-full h-full max-h-[100px] max-w-[200px]"
                        >
                            <Image 
                                src={partnerImage.source}
                                alt={partnerImage.alt}
                                width={200}
                                height={100}
                                className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                                style={{maxHeight: "100px !important"}}
                            />
                        </div>
                    ))
                }
            </Parallax>
        </div>
    )
}

export default PartnerSection