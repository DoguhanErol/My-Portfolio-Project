import { useQuery } from '@tanstack/react-query';
import * as React from 'react'
import { useEffect,useState } from 'react';
import { Link, useParams } from 'react-router-dom';
//Fetchers
import { fetchImages } from '../Requests';
//Types
import {IImage} from '../Types'
//Components
import ImageDetail from '../components/gallery/ImageDetail';
import ErrorComponent from '../components/shared/ErrorComponent';
import LoadingComponent from '../components/shared/LoadingComponent';

//  '/galeri/{id}'
const GalleryImageDetailPage: React.FC = () => {
  //States
    const [image, setImage] = useState<IImage>();
    const [nextImageId, setNextImageId] = useState<number>();
    const [prevImageId, setPrevImageId] = useState<number>();
  //Querys
    const { isError,  isLoading, data, error, status, isRefetching } = useQuery<IImage[], Error, IImage[], ["images"]>({
      queryKey: ['images'],
      queryFn: fetchImages,
    });
  //Get Paramater From Url
    const { id } = useParams<string>();
    let numId: number = 0

  //Use Effect
    useEffect(() => {
        if (data) {
          console.log('--Status--','--'+status+'--')
          setImage(data[numId]);
          handleNextId(data.length);
          handlePrevId(data.length);
        }
      }, [data,image,id]);

  //Handle Actions
   const  handleNextId = (lastId: number) =>{
    if (lastId > numId + 1) {
        setNextImageId(numId + 1);
      }else{
        setNextImageId(0)
      }
   }
   const  handlePrevId = (lastId: number) =>{
    if (0 <= numId -1) {
        setPrevImageId(numId - 1)
      }else{
        setPrevImageId(lastId-1)
      }
   }
  //Checks
    if (isLoading || isRefetching) {
        console.log('Loading...')
        console.log('--Status--','--'+status+'--')
        return <LoadingComponent />;
      }
    
      if (isError || typeof(id)=='undefined'||typeof(image)=='undefined' ) {
        console.log('!!!Error: ',error)
        console.log('--Status--','--'+status+'--')
        return <ErrorComponent errorMessage="Error" />;
      }else{
        numId = parseInt(id);
      }
  //Design
  return (
    <>
        <div className='fixed top-0 left-0 z-[90] w-full h-full bg-[#000000da]' >

            {/*Close Button*/}
            <Link to={'/galeri'} className='fixed top-0 right-0 m-2 hover:border-gray-50  hover:text-gray-50 z-[91] cursor-pointer border-2 border-blue-400 text-blue-200 rounded-full w-12 h-12 p-2 sm:w-16 sm:h-16  sm:p-1'>
            <svg className='' fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="full" viewBox="0 -960 960 960" width="full"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
          </Link>
  
          {/*Next Button*/}
            <Link  to={'/galeri/'+nextImageId}>
            <div  className='fixed justify-center items-center h-full top-1/2 right-0 m-2 z-[91] text-cyan-50'>
              <button className=' hover:border-gray-50 hover:text-gray-50  z-[91] cursor-pointer  border-2 border-blue-400 text-blue-200 rounded-full w-12 h-12 p-2 sm:w-16 sm:h-16  sm:p-4 ' >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="full" viewBox="0 -960 960 960" width="full"><path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z"/></svg>
              </button>
            </div>
            </Link>
  
          {/*Prev Button*/}
            <Link  to={'/galeri/'+prevImageId}>
            <div  className='fixed justify-center items-center h-full top-1/2 left-0 m-2 z-[91] text-cyan-50'>
            <button className=' hover:border-gray-50 hover:text-gray-50  z-[91] cursor-pointer  border-2 border-blue-400 text-blue-200 rounded-full w-12 h-12 p-2 sm:w-16 sm:h-16  sm:p-4 ' >
            <svg className='pl-2' xmlns="http://www.w3.org/2000/svg" height="full" fill="currentColor" viewBox="0 -960 960 960" width="full"><path d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z"/></svg>
              </button>
            </div>
            </Link>
            <div className='flex justify-center items-center  w-full h-full'>
              <ImageDetail
              image={image}
              index={id}
              />
        </div>
        </div>
    </>
  )
}

export default GalleryImageDetailPage