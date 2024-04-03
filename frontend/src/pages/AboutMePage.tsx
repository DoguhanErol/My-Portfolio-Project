import { useQuery } from '@tanstack/react-query'
import 'react'
import 'animate.css';
//Fetchers
import { fetchCertificates, fetchEducations, fetchTables } from '../Requests'
//Types
import {ICertificate, IEducation, ITables} from '../Types';
//Components
import AboutMeComponent from "../components/aboutme/AboutMeComponent"
import CertificatesInfoComponent from "../components/aboutme/CertificatesInfoComponent"
import EducationInfoComponent from "../components/aboutme/EducationInfoComponent"
import TablesComponent from "../components/aboutme/TableComponent"
import ErrorComponent from '../components/shared/ErrorComponent'
import LoadingComponent from '../components/shared/LoadingComponent'
import TablesLayout from '../components/aboutme/TablesLayout';

//  '/hakkimda'
export default function AboutMePage() {
  //Querys

  const educationData = useQuery<IEducation[], Error, IEducation[], ["educations"]>({
    queryKey: ['educations'],
    queryFn: fetchEducations,
  });
  const certificatesData = useQuery<ICertificate[], Error, ICertificate[], ["certificates"]>({
    queryKey: ['certificates'],
    queryFn: fetchCertificates,
  });

  //Checks
  if (educationData.isLoading || certificatesData.isLoading) {
    console.log('Loading...')
    return <LoadingComponent />;
  }

  if (certificatesData.isError  || typeof(certificatesData.data) === 'undefined' || typeof(educationData.data) === 'undefined') {
    console.log('!!!Error: ',educationData.error || certificatesData.error)
    return  <ErrorComponent errorMessage="Error" />;
  }

  //Design
  return (
    <>
        <section className='grid grid-cols-1 gap-3 animate-[fadeInUpBig_0.8s] mt-0 sm:mt-16'>
          {/* Picture and about me text */}
          <section className=' m-5  p-1 xs:p-5 rounded-lg bg-slate-950 bg-opacity-80 '>
            <AboutMeComponent />
          </section>
          {/* Education and certificates */}
          <section className='grid grid-cols-2 gap-1 m-5 rounded-lg'>
            <EducationInfoComponent
            Educations={educationData.data}
            />
            <CertificatesInfoComponent 
            Certificates={certificatesData.data}
            />

          </section>
          {/* Tech Stack */}
          <section>

          </section>
          {/* Tables */}
          <section className='grid grid-cols-1 xs:flex xs:justify-center gap-3 m-5 flex-wrap'>
            <TablesLayout />
          </section>
        </section>
    </>
  )
}
