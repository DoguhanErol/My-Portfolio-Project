import * as React from "react"

const ProjectCardLoadingSkelaton: React.FC = () =>{
    return(
        <>
        <article id='project' className="container border z-30 transition-opacity  bg-slate-500 py-5 bg-opacity-60 border-sky-200 rounded-md mx-auto flex px-5 m-8 sm:min-h-[30rem] md:flex-row flex-col items-center ">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
            <div className="h-48 rounded-t dark:bg-gray-300"></div>
        </div>
      </article>
        </>
    )
}
export default ProjectCardLoadingSkelaton