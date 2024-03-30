import * as React from "react";
//Global Variables
import globalVariables from "../../Config";
//Types
import { IImage } from "../../Types";

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
              <img className="object-cover object-center rounded-md sm:rounded-none md:rounded-l-md max-h-screen " alt="Image" src={globalVariables.baseUrl+props.image.image_path} />
            </article>
          </div>
        </section>
    </>
  )
}

export default ImageDetail