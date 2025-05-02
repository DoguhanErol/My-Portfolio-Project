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
  console.log(globalVariables.baseUrl+props.image.image_path)
  //Design
  return (
    <>
        <section className="text-gray-600 body-font ">
          <div className="container mx-auto flex  px-5 py-24 md:flex-row flex-col  items-center md:items-stretch ">
            <article className=" ">
              <img className="object-cover object-center rounded-md sm:rounded-none md:rounded-l-md max-h-screen h-auto max-w-full " alt="Image" src={globalVariables.baseUrl+props.image.image_path} />
            </article>
          </div>
        </section>
    </>
  )
}

export default ImageDetail