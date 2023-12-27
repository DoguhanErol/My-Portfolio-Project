import 'react'
import 'animate.css';
import { useQuery } from '@tanstack/react-query';

//Fetchers
import { fetchImages } from '../fetcher';
// Types
import {IImage} from '../types';
//Components
import ErrorComponent from './../components/shared/ErrorComponent';
import LoadingComponent from './../components/shared/LoadingComponent';
import ImageCard from './../components/gallery/ImageCard';

//  '/galeri'
const GalleryPage:React.FC = () => {

//Querys
  const { isError,  isLoading, data, error, status, isRefetching } = useQuery<IImage[], Error, IImage[], ["images"]>({
    queryKey: ['images'],
    queryFn: fetchImages,
  });
//Checks
  if (isLoading || isRefetching) {
    console.log('Loading...')
    console.log('--Status--','--'+status+'--')
    return <LoadingComponent />;
  }

  if (isError) {
    console.log('!!!Error: ',error)
    console.log('--Status--','--'+status+'--')
    return <ErrorComponent errorMessage="Error" />;
  }
//Design
  return (
    <>
    {/*Normal Image Gallery*/}
    <section className='flex flex-row flex-wrap center items-center justify-center my-1 sm:my-16 animate-[fadeInUpBig_0.8s]'>
    {data && data.length > 0  && data.map((galleryImage, index) => (
          <ImageCard
          Image={galleryImage}
          index={index.toString()}
          key={index}
          />
    ))}
    </section>
    </>
  )
}

export default GalleryPage;
