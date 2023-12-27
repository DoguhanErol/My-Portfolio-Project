//Globals
import globalVariables from "../../globals";
//Types
import { IProject } from "../../types"


type TProps = {
    projectDataObj:IProject;
}
const ProjectCardComponent:React.FC<TProps> = (props:TProps) => {
//Design
  return (
    <>
{/* Project */}
<article  id='project' className="container border z-30 transition-opacity  bg-slate-500 py-5 bg-opacity-60 border-sky-200 rounded-md mx-auto flex px-5 m-8 sm:min-h-[30rem] md:flex-row flex-col items-center ">
                <div className=" lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{props.projectDataObj?.project_name}
                </h1>
                <hr className="w-[50%] h-1" />
                <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-sky-200">
                {props.projectDataObj?.project_type}
                </h2>
                <p className="mb-8 text-xl hidden sm:block leading-relaxed">{props.projectDataObj?.project_details?.slice(0,140)+'.....'}</p>
                <div className="flex justify-center">
                    <button className='flex flex-row w-full mt-2 md:ml-5 text-2xl'>
                        <a href={'/projeler/'+props.projectDataObj?.project_id} className=' px-5 py-1 font-medium border rounded text-[#b4d7d9]  hover:text-[#cdf9fc] w-auto h-auto hover:scale-105'>Projeye Git</a>
                    </button>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
                <img className="object-cover object-center  rounded" alt="hero" src={globalVariables.baseUrl+props.projectDataObj?.project_image_path} />
              </div>
</article>
            {/* Project */}
    </>

  )
}

export default ProjectCardComponent