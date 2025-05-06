
import { useQuery } from "@tanstack/react-query";
//Fetchers
import { fetchImages, fetchPrices, fetchProjects } from "../Requests";
//Types
import { IPrice, IProject, ImagesResponse } from "../Types";
//Components
import AboutMeShortComponent from "../components/home/AboutMeShortComponent"
import GalleryShorts from "../components/home/GalleryShorts"
import PricesComponent from "../components/home/PricesComponent"
import ProjectsSliderComponent from "../components/home/ProjectsSliderComponent"
import ErrorComponent from "../components/shared/ErrorComponent";
import LoadingComponent from "../components/shared/LoadingComponent";

//  '/'
export default function HomePage() {
  //Querys
  const projectsData = useQuery<IProject[], Error, IProject[], ["projects"]>({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });
  const pricesData = useQuery<IPrice[], Error, IPrice[], ["prices"]>({
    queryKey: ['prices'],
    queryFn: fetchPrices,
  });
  const imagesData = useQuery<ImagesResponse, Error, ImagesResponse, ["images"]>({
    queryKey: ['images'],
    queryFn: () => fetchImages('1'), // fetchImages fonksiyonunu bir callback olarak geçiyoruz
  });
  //Checks
  if (projectsData.isLoading || pricesData.isLoading || imagesData.isLoading || projectsData.isRefetching || pricesData.isRefetching || imagesData.isRefetching) {
    console.log('Loading...')
    return <LoadingComponent />;
  }

  if (projectsData.isError || pricesData.error || imagesData.isRefetching || typeof (projectsData.data) === 'undefined' || typeof (pricesData.data) === 'undefined' || typeof (imagesData.data) === 'undefined') {
    console.log('!!!Error: ', projectsData.error)
    return <ErrorComponent errorMessage="Error" />;
  }

  //Design
  return (
    <>
      <section className='flex flex-col w-[95%] lg:w-[89%] h-full -my-5 sm:my-12 '>
        <section className='flex justify-center items-center text-center rounded-md w-full my-4 shadow-2xl text-3xl lg:text-5xl lg:h-20  bg-slate-950 bg-opacity-80 animate-[fadeInDownBig_1.4s_ease]'>
          <h2>"Yazar ağzını kapamalıdır ki eseri kendininkini açsın."<span className='text-2xl lg:text-4xl'>-Frederich Nietche</span> </h2>
        </section>
        <section className='flex flex-col flex-wrap'>
          <article className='flex flex-col w-full justify-center items-center  animate-[slideInLeft_0.7s_ease]'>
            <ProjectsSliderComponent
              Projects={projectsData.data}
            />
          </article>
          <article className='flex flex-col w-auto justify-center items-center  '>
            <AboutMeShortComponent />
          </article>
          <article className='flex flex-col w-auto justify-center items-center  '>
            <PricesComponent
              Prices={pricesData.data}
            />
          </article>
          <article className='flex flex-col w-auto justify-center items-center  '>
            <GalleryShorts
              Images={imagesData.data}
            />
          </article>
        </section>
      </section>

    </>
  )
}
