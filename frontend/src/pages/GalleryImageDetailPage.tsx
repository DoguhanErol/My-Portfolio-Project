import  { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ImagesResponse } from '../Types';
import ImageDetail from '../components/gallery/ImageDetail';
import ErrorComponent from '../components/shared/ErrorComponent';
import LoadingComponent from '../components/shared/LoadingComponent';
import { useGalleryContext } from '../contexts/GalleryContext';
import * as React from 'react';
import globalVariables from '../Config';

const GalleryImageDetailPage: React.FC = () => {
  const { id, page } = useParams<{ id: string; page?: string }>();

  const pageNumber = page ? parseInt(page, 10) : 1;
  const numId = parseInt(id!, 10);

  const { images, setImages, setCurrentImage } = useGalleryContext();
  const [nextImageId, setNextImageId] = useState(0);
  const [prevImageId, setPrevImageId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchImageData = async () => {
      console.log(`${globalVariables.baseUrlApi}images/?page=${pageNumber}`)
      setIsLoading(true);
      try {
        const response = await fetch(`${globalVariables.baseUrlApi}images/?page=${pageNumber}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: ImagesResponse = await response.json();
        setImages(data.results);
        setCurrentImage(data.results[numId]);
        handleNextAndPrevIds(data.results.length);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImageData();
  }, [pageNumber, numId]);

  const handleNextAndPrevIds = (lastId: number) => {
    if (lastId > numId + 1) {
      setNextImageId(numId + 1);
    } else {
      setNextImageId(0);
    }
    if (0 <= numId - 1) {
      setPrevImageId(numId - 1);
    } else {
      setPrevImageId(lastId - 1);
    }
  };

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError || typeof id === 'undefined' || typeof images[numId] === 'undefined') {
    return <ErrorComponent errorMessage="Error" />;
  }

  const image = images[numId];

  return (
    <>
      <div className='fixed top-0 left-0 z-[90] w-full h-full bg-[#000000da]' >

        {/*Close Button*/}
        <Link to={'/galeri?page=' + pageNumber} className='fixed top-0 right-0 m-2 hover:border-gray-50  hover:text-gray-50 z-[91] cursor-pointer border-2 border-blue-400 text-blue-200 rounded-full w-12 h-12 p-2 sm:w-16 sm:h-16  sm:p-1'>
          <svg className='' fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="full" viewBox="0 -960 960 960" width="full"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
        </Link>

        {/*Next Button*/}
        <Link to={'/galeri/' + pageNumber + '/' + nextImageId}>
          <div className='fixed justify-center items-center h-full top-1/2 right-0 m-2 z-[91] text-cyan-50'>
            <button className=' hover:border-gray-50 hover:text-gray-50  z-[91] cursor-pointer  border-2 border-blue-400 text-blue-200 rounded-full w-12 h-12 p-2 sm:w-16 sm:h-16  sm:p-4 ' >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="full" viewBox="0 -960 960 960" width="full"><path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z"/></svg>
            </button>
          </div>
        </Link>

        {/*Prev Button*/}
        <Link to={'/galeri/'+ pageNumber + '/' + prevImageId }>
          <div className='fixed justify-center items-center h-full top-1/2 left-0 m-2 z-[91] text-cyan-50'>
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
  );
};

export default GalleryImageDetailPage;
