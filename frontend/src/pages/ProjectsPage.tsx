import * as React from "react";
import { useQuery } from '@tanstack/react-query';
//Fetchers
import { fetchProjects } from "../fetcher";
//Types
import {IProject} from '../types';
//Components
import LoadingComponent from "../components/shared/LoadingComponent";
import ErrorComponent from "../components/shared/ErrorComponent";
import ProjectComponent from "../components/project/ProjectComp";


//  '/projeler'
const ProjectsPage:React.FC = () => {
  //Querys
  const { isError,  isLoading, data, error, status, isRefetching } = useQuery<IProject[], Error, IProject[], ["projects"]>({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  //Checks
  if (isLoading || isRefetching) {
    console.log('Loading...')
    console.log('--Status--','--'+status+'--')
    return <LoadingComponent />;
  }

  if (isError) {
    console.log('!!!Error: ',error)
    console.log('--Status--','--'+status+'--')
    return <ErrorComponent errorMessage="Error" />;
  }

//Design
  return (
    <>
    <section className='flex flex-col w-[89%] sm:mt-14'>
    { data && data.length > 0  && data.map((project) =>(
        <ProjectComponent
        Project={project}
        />
    ))}
    </section>
  </>
  )
}

export default ProjectsPage;
