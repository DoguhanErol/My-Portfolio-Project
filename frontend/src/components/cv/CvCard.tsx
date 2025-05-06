import * as React from "react"
import { ICvInformation } from "../../Types";

type TProps = {
    CvInfo: ICvInformation;
}

const CvCard: React.FC<TProps> = (props: TProps) => {
    return (
        // <article className="flex justify-center bg-slate-600 mx-7 cursor-pointer text-3xl">
        //     <a className="flex flex-wrap" href={props.CvInfo.cv_info_path}>
        //         <h1>{props.CvInfo.cv_info_title} </h1>
        //         <h2> - {props.CvInfo.cv_info_lang.toUpperCase()} - Cv</h2>
        //         <h2>Indirmek Icin Tikla</h2>

        //     </a>

        // </article>
        <>
            <article className=" p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="flex items-center h-full border-gray-600 bg-slate-700 border p-4 rounded-lg">
                    <div className="flex-grow xs:mx-5">
                        <h2 className="text-white title-font font-medium">{props.CvInfo.cv_info_title} - CV</h2>
                        <p className="text-gray-400">{props.CvInfo.cv_info_lang.toUpperCase()}</p>
                    </div>
                    <a href={props.CvInfo.cv_info_path} className="border-1 border p-2 hover:scale-105 rounded-md xs:mx-5 hover:text-cyan-100">İndir</a>
                </div>
            </article>
        </>
    )
}

export default CvCard