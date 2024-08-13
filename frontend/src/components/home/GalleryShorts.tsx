import { Link } from "react-router-dom";
import * as React from "react";
//Types
import { ImagesResponse } from '../../Types';
//Components
import GalleryCard from "./GalleryCard";


type TProps = {
  Images:ImagesResponse;
}

const GalleryShorts:React.FC<TProps> = (props:TProps) => {
  //Design
  return (
    <>
    <section className="text-gray-400 body-font  bg-slate-950   bg-opacity-80 rounded-md  mt-5">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="text-start sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Galeri</h1>
            <div className="h-1 w-16 bg-blue-500 rounded"></div>
          </div>
          <p className=" text-center text-2xl w-full leading-relaxed text-gray-400 text-opacity-90">Galeride son yüklenen fotoraflar</p>
        </div>
        <div className="grid grid-cols-3 gap-1">
            {/* Image Cards */}
        {props.Images.results && props.Images.results.length > 0  && props.Images.results.slice(0,6).map((image, index) => (
          <GalleryCard
          key={index}
          Image={image}
          index={index}
          />
        ))}

        </div>
        <button className='grid gap-x-2  w-full justify-end mt-2  text-2xl'>
            <Link to='/galeri?page=1' className=' px-5 py-1 font-medium border rounded text-[#b4d7d9]  hover:text-[#cdf9fc] w-auto h-auto hover:scale-105'>Galeriye Git</Link>
        </button>
      </div>
    </section>
    </>
  )
}

export default GalleryShorts