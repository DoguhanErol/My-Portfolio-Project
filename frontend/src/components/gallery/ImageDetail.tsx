import * as React from "react";
//Global Variables
import globalVariables from "../../globals";
//Types
import { IImage } from "./../../types";

type TProps ={
    image:IImage;
    index:string;
}
const ImageDetail:React.FC<TProps> = (props:TProps) => {
  //Design
  return (
    <>
        <section className="text-gray-600 body-font ">
          <div className="container mx-auto flex  px-5 py-24 md:flex-row flex-col  items-center md:items-stretch ">
            <article className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-0 md:mb-0 ">
              <img className="object-cover object-center rounded-md sm:rounded-none md:rounded-l-md max-h-screen " alt="hero" src={globalVariables.baseUrl+props.image.image_path} />
            </article>
            <article className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center md:bg-neutral-800 bg-opacity-25  md:rounded-r-md md:p-10">
            <span className="  inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 my-5 text-lg font-medium tracking-widest">{props.image.image_location}</span>
              <h1 className="title-font md:text-4xl text-3xl mb-4 font-medium text-gray-300">{props.image.image_name}</h1>
              <p className="break-all md:w-64 mb-8 leading-relaxed text-gray-500 text-xl">{props.image.image_content}.</p>
            </article>
          </div>
        </section>
    </>
  )
}

export default ImageDetail