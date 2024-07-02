import  { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IImage, ImagesResponse } from '../Types';
import ErrorComponent from '../components/shared/ErrorComponent';
import LoadingComponent from '../components/shared/LoadingComponent';
import ImageCard from '../components/gallery/ImageCard';
import * as React from 'react';
import globalVariables from '../Config'
import Pagenation from '../components/gallery/Pagenation';
import { useGalleryContext } from '../contexts/GalleryContext';

const GalleryPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = parseInt(queryParams.get('page') || '1', 10);
  const { setCount } = useGalleryContext();

  const [images, setImages] = useState<IImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchImagesData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch( globalVariables.baseUrlApi+`images/?page=${page}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: ImagesResponse = await response.json();
        setImages(data.results);
        setCount(data.count);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImagesData();
  }, [page]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <ErrorComponent errorMessage="Error" />;
  }

  return (
    <>
      <section className='grid grid-cols-3 gap-1 m-2 sm:my-20 animate-[fadeInUpBig_0.8s]'>
        {images.map((galleryImage, index) => (
          <ImageCard
            Image={galleryImage}
            index={index.toString()}
            key={index}
            pageNumber={page} // pageNumber prop'unu ImageCard bileşenine ilettik.

          />
        ))}
      </section>
      <section>
      <Pagenation />

      </section>
    </>
  );
};

export default GalleryPage;
