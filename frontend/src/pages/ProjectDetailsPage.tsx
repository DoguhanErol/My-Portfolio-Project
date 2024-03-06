import * as React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
//Globals
import globalVariables from '../Config';
//Fetchers
import { fetchProject } from '../Requests';
//Types
import  {IProject}  from '../Types';
//Components
import ErrorComponent from '../components/shared/ErrorComponent';
import LoadingComponent from '../components/shared/LoadingComponent';

//  '/projeler/{id}'
const  ProjectDetailsPage:React.FC = () => {

  //Get Parameter From Url
  const { id } = useParams<string>();
  let strId: string = ''

  if (typeof(id)!='undefined') {
    strId = id.toString();
  }
  //Querys
  const projectData = useQuery<IProject, Error, IProject, ["project"]>({
    queryKey: ['project'],
    queryFn:() => fetchProject(strId),
  });

  //Checks
  if (projectData.isLoading || projectData.isRefetching) {
    console.log('Loading...');
    console.log('--Status--', '--' + status + '--');
    return <LoadingComponent />;
  }

  if (projectData.isError ) {
    console.log('!!!Error: ', projectData.error);
    console.log('--Status--', '--' + projectData.status + '--');
    return <ErrorComponent errorMessage="Error" />;
  }
 

//Design
    return (
      <>
 
            <article className='flex flex-col  rounded-md w-[95%] shadow-2xl h-auto z-20 bg-slate-950 bg-opacity-80 animate-[backInLeft_0.5s] sm:my-16'>
                <section className=' flex self-center justify-center w-full  h-full bg-gray-900'>
                    <figure className='max-w-3xl h-auto'>
                        <img src={globalVariables.baseUrl+ projectData.data?.project_image_path } alt="Project Image" className='h-full' />
                    </figure>
                </section>
            </article>
            <article className='flex flex-col  rounded-md w-[95%] shadow-2xl h-auto z-20 bg-slate-950 bg-opacity-80 animate-[backInDown_0.8s_ease] my-3'>
            <section className='flex flex-col  text-xl md:text-3xl  w-full '>
                    <article className='flex flex-row bg-slate-600 w-full'>
                        <h2 className='text-[#b4d7d9] ml-3'>Proje Adi: <span className='ml-2 text-[#94B0B2]'>{projectData.data?.project_name}</span></h2>
                    </article>

                    <article className='flex flex-row '>
                        <h2 className='text-[#b4d7d9] ml-3'>Proje Turu: <span className='ml-2 text-[#94B0B2]'>{projectData.data?.project_type}</span></h2>
                    </article>

                    <article className='flex flex-row '>
                        <h2 className='text-[#b4d7d9] ml-3 '>Proje Icerigi: <span className='ml-2 text-[#94B0B2]'>{projectData.data?.project_type}</span></h2>
                    </article>

                    <article className='flex flex-row'>
                        <h2 className='text-[#b4d7d9] ml-3'>Proje Butcesi: <span className='ml-2 text-[#94B0B2]'>{projectData.data?.project_budget}</span></h2>
                    </article>

                    <article className='flex flex-row '>
                        <h2 className='text-[#b4d7d9] ml-3'>Proje Teslim Tarihi: <span className='ml-2 text-[#94B0B2]'></span></h2>
                        <p className='ml-2'>{projectData.data?.project_delivery_date}</p>
                    </article>

                    <article className='flex flex-row '>
                        <h2 className='text-[#b4d7d9] ml-3'>Projede Kullanılan Front-End Teknolojiler: <span className='text-[#94B0B2]'>{projectData.data?.project_frontend_tecnologies}</span></h2>
                    </article>

                    <article className='flex flex-row '>
                        <h2 className='text-[#b4d7d9] ml-3'>Projede Kullanılan Back-End Teknolojiler: <span className='text-[#94B0B2]'>{projectData.data?.project_backend_tecnologies}</span></h2>
                    </article>
                    

                    <article className='flex flex-row '>
                        <h2 className='text-[#b4d7d9] ml-3'>Projede Detayları: <span className='text-[#94B0B2]'>{projectData.data?.project_details}</span></h2>
                    </article>

                    <article className='flex justify-center items-center md:justify-end md:items-end m-4  md:m-6 h-full text-2xl md:text-3xl'>
                        <a href={projectData.data?.project_live_url} className='px-2 md:px-5 py-1  font-medium border rounded text-[#b4d7d9] ml-3 md:ml-6 hover:text-[#cdf9fc] w-auto h-auto hover:scale-105'>Projeye Git</a>
                        <a href={projectData.data?.project_github_url}className='px-2 md:px-5 py-1  font-medium border rounded text-[#b4d7d9] ml-3 md:ml-6 hover:text-[#cdf9fc] w-auto h-auto hover:scale-105'>Proje Koduna Git</a>
                    </article>


                </section>
            </article>
            <article className='fixed z-50 right-5 bottom-5'>
                <button className='flex flex-row w-full mt-2 md:ml-10'>
                    <a href='/projeler' className=' px-5 py-1  font-medium border rounded text-[#b4d7d9] ml-1 md:ml-3 hover:text-[#cdf9fc] w-auto h-auto hover:scale-105'><svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' height="24" viewBox="0 -960 960 960" width="24"><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"/></svg></a>
                </button>
            </article>

      </>
    )
  }

  export default ProjectDetailsPage;
  