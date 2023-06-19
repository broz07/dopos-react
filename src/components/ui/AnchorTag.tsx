"use client"

interface Props {
    section: string
}

const AnchorTag:React.FC<Props> = ({section}) => {
    return <div id={section} className="absolute top-[-4rem] invisible"/>
}

export default AnchorTag