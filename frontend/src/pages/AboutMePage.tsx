import { useQuery } from '@tanstack/react-query'
import 'react'
import 'animate.css';
//Fetchers
import { fetchCertificates, fetchEducations, fetchTables } from '../fetcher'
//Types
import {ICertificate, IEducation, ITables} from '../types';
//Components
import AboutMeComponent from "../components/aboutme/AboutMeComponent"
import CertificatesInfoComponent from "../components/aboutme/CertificatesInfoComponent"
import EducationInfoComponent from "../components/aboutme/EducationInfoComponent"
import TablesComponent from "../components/aboutme/TableComponent"
import PictureComponent from "../components/aboutme/PictureComponent"
import ErrorComponent from '../components/shared/ErrorComponent'
import LoadingComponent from '../components/shared/LoadingComponent'

//  '/hakkimda'
export default function AboutMePage() {
  //Querys
  const tableData = useQuery<ITables[], Error, ITables[], ["tables"]>({
    queryKey: ['tables'],
    queryFn: fetchTables,
  });
  const educationData = useQuery<IEducation[], Error, IEducation[], ["educations"]>({
    queryKey: ['educations'],
    queryFn: fetchEducations,
  });
  const certificatesData = useQuery<ICertificate[], Error, ICertificate[], ["certificates"]>({
    queryKey: ['certificates'],
    queryFn: fetchCertificates,
  });

  //Checks
  if (tableData.isLoading || tableData.isRefetching || educationData.isLoading || certificatesData.isLoading) {
    console.log('Loading...')
    return <LoadingComponent />;
  }

  if (tableData.isError || educationData.isError || certificatesData.isError  || typeof(certificatesData.data) === 'undefined' || typeof(educationData.data) === 'undefined') {
    console.log('!!!Error: ',tableData.error || educationData.error || certificatesData.error)
    return  <ErrorComponent errorMessage="Error" />;
  }

  //Design
  return (
    <>
        <section className='flex flex-col items-center justify-center lg:w-full -my-5 sm:my-16 animate-[fadeInUpBig_0.8s]'>

        <section className="flex flex-col items-center  justify-center lg:w-full">
          <article className='flex flex-col items-center justify-start lg:w-full lg:justify-evenly lg:items-center lg:flex-row'>
              <PictureComponent />
              <AboutMeComponent />
            </article>
        </section>

         <section className="flex flex-col justify-center items-center lg:justify-evenly lg:items-start lg:w-full lg:flex-row ">
            <article className="flex flex-col justify-center items-center lg:w-[35%] lg:flex-col">
            {tableData.data && tableData.data.length > 0  && tableData.data.map((table) => (
               <TablesComponent
               Tables={table}
               />
            ))}
             </article>

             <article className="flex flex-col justify-center items-center lg:w-[60%] lg:flex-col">
               <EducationInfoComponent
               Educations={educationData.data}
               />
               <CertificatesInfoComponent
               Certificates ={certificatesData.data}
               />
             </article>

         </section>

        </section>
    </>
  )
}
