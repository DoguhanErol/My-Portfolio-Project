import * as React from 'react';
//Global Variables
import globalVariables from '../../globals';
//Types
import { IImage } from "./../../types";

type TProps={
    Image:IImage;
    index:number;
}

const GalleryCard:React.FC<TProps> = (props:TProps) => {
  //Design
  return (
    <>
        <article className="flex  justify-center  p-4 xl:m-7">
          <a href={'/galeri/' + props.index.toString()}>
              <div className="bg-[#73DEE4] min-w-[300px]  sm:min-w-[260px] sm:max-w-[265px]  bg-opacity-40 p-6 rounded-lg hover:border-2 hover:border-sky-300 hover:scale-105  ">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={globalVariables.baseUrl+props.Image.image_path} alt={'İmage '+props.Image.image_name} />
                <h3 className="tracking-widest text-blue-400 text-lg font-medium title-font">{props.Image.image_location}</h3>
                <h2 className="text-2xl text-white font-medium title-font mb-4">{props.Image.image_name}</h2>
                <p className="leading-relaxed text-sm">{props.Image.image_content?.slice(0,40) + '...'}</p>
              </div>
          </a>
        </article>
    </>
  )
}

export default GalleryCard