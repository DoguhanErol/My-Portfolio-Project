import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import * as React from "react";
import { fetchCvInformationByLang } from "../../Requests";
import { ICvInformation } from "../../Types";
import ErrorComponent from "../shared/ErrorComponent";
import LoadingComponent from "../shared/LoadingComponent";
import CvCard from "./CvCard";

type TProps = {
    CvLang: string;
}


const CvList: React.FC<TProps> = (props: TProps) => {
    const [language, setLanguage] = useState<string>(' bos')


    const cvInformation = useQuery<ICvInformation[], Error, ICvInformation[], ["cvInformation", string]>({
        queryKey: ["cvInformation", props.CvLang],
        queryFn: () => fetchCvInformationByLang(props.CvLang),
    });

    React.useEffect(() => {
        //burayi eklediginden beri calismiyor
        if (props.CvLang == 'en') {
            setLanguage('English');
        } else if (props.CvLang == 'tr') {
            setLanguage('Türkçe')
        } else if (props.CvLang == 'ru') {
            setLanguage('Русский')
        }
    }, [props.CvLang])



    if (cvInformation.isLoading || cvInformation.isRefetching || cvInformation.isFetching) {
        console.log('Loading...');
        return <LoadingComponent />
    }
    if (cvInformation.isError || !cvInformation.data) {
        console.log('Error...')
        return <ErrorComponent errorMessage="Cv information can`t fetch | Fetch or Data Error" />
    }


    return (
        <>
        <div className="p-5 text-4xl rounded-md w-full shadow-2xl h-auto z-20 bg-slate-950 bg-opacity-80">
            <h1>{language}</h1>
            <section className="flex flex-wrap justify-center gap-3">

                {cvInformation.data && cvInformation.data.length > 0 && cvInformation.data.map((cvinfo, index) => {
                    return (
                        <CvCard
                            key={index}
                            CvInfo={cvinfo}
                        />
                    )
                })}

            </section>
        </div>
        </>
    )
}

export default CvList