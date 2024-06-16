import * as React from "react"
import CvList from "../components/cv/CvList"

const CvPage: React.FC = () => {
    return (
        <>
            <section className='grid grid-rows-2 grid-cols-1 gap-3 w-[88%] mt-0 sm:mt-16'>
                <CvList
                    CvLang={'tr'}
                />
                <CvList
                    CvLang={'en'}
                />
            </section>
        </>
    )
}

export default CvPage