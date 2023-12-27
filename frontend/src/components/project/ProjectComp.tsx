//Globals
import globalVariables from '../../globals';
//Types
import {IProject} from '../../types';

type TProps = {
    Project:IProject;
}
const ProjectComponent:React.FC<TProps> =(props:TProps) => {
    //Design
  return (
    <>
    <a href={'/projeler/'+props.Project.project_id.toString()} className='hover:scale-105 hover:shadow-2xl group ' >
        <article className='flex flex-col md:flex-row rounded-md w-[100%] shadow-2xl h-auto z-20 bg-slate-950 group-hover:border-2 group-hover:rounded-md group-hover:border-blue-400 group-hover:bg-slate-800  bg-opacity-80 animate-[fadeInUpBig_0.8s] my-3'>
            <section className=' flex self-center justify-center w-full md:w-[45%] max-h-96 bg-gray-900 group-hover:rounded-md'>
                <figure className='max-w-3xl h-auto'>
                    <img src={ globalVariables.baseUrl+props.Project.project_image_path } alt="Project Image" className='max-h-96 group-hover:rounded-tl-md group-hover:rounded-bl-md' />
                </figure>
            </section>
            <section className='flex flex-col text-xl md:text-2xl w-full md:w-[55%] group-hover:rounded-md'>
                <article className='flex flex-row bg-slate-600 w-full group-hover:rounded-tr-md'>
                    <h2 className='text-[#b4d7d9] ml-3'>Proje Adi: <span className='ml-2 text-[#94B0B2]'>{props.Project.project_name}</span></h2>
                </article>
                <article className='flex flex-row '>
                <h2 className='text-[#b4d7d9] ml-3'>Proje Turu: <span className='ml-2 text-[#94B0B2]'>{props.Project.project_type}</span></h2>
                </article>
                <article className='flex flex-row '>
                <h2 className='text-[#b4d7d9] ml-3 '>Proje Icerigi: <span className='ml-2 text-[#94B0B2]'>{props.Project.project_type}</span></h2>
                </article>
                <article className=''>
                <h2 className='text-[#b4d7d9] ml-3'>Projede Kullanilan Front-End Teknolojiler: <span className='text-[#94B0B2]'>{props.Project.project_frontend_tecnologies}</span></h2>
                <h2 className='text-[#b4d7d9] ml-3'>Projede Kullanilan Back-End Teknolojiler: <span className='text-[#94B0B2]'>{props.Project.project_backend_tecnologies}</span></h2>
                </article>
            </section>
        </article>
    </a>
    </>
  )
}
export default ProjectComponent



