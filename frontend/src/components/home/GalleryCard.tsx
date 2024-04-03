import * as React from 'react';
import globalVariables from '../../Config';
import { IImage } from "../../Types";

type TProps={
    Image:IImage;
    index:number;
}

const GalleryCard:React.FC<TProps> = (props:TProps) => {
  //Design
  return (
    <>
        <article className=" xl:m-7">
          <a href={'/galeri/' + props.index.toString()}>
              <div className="bg-[#73DEE4]   bg-opacity-40 rounded-lg hover:border-2 hover:border-sky-300 hover:scale-105  ">
                <img className="block h-28 xs:h-44  sm:56 md:h-72 lg:h-80  object-cover  object-center w-full rounded-md" src={globalVariables.baseUrl+props.Image.image_path} alt={'İmage '+props.Image.image_id} />
              </div>
          </a>
        </article>
    </>
  )
}

export default GalleryCard