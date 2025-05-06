//Globals
import globalVariables from '../../Config';
//Fetchers
import { fetchProjectImages } from '../../Requests';
//Types
import { IProjectDetail, IProjectImage } from '../../Types';
//Components
import ErrorComponent from '../shared/ErrorComponent';
import LoadingComponent from '../shared/LoadingComponent';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

type TProps = {
  project: IProjectDetail;
}
const ProjectDetail: React.FC<TProps> = (props: TProps) => {
  //Get Parameter From Url
  const { id } = useParams<string>();
  let strId: string = ''

  if (typeof (id) != 'undefined') {
    strId = id.toString();
  }
  //Querys
  const projectImagesData = useQuery<IProjectImage[], Error, IProjectImage[], ["projectImages"]>({
    queryKey: ['projectImages'],
    queryFn: () => fetchProjectImages(strId),
  });

  //Checks
  if (projectImagesData.isLoading || projectImagesData.isRefetching || !props.project.project.project_image_path) {
    console.log('Loading...');
    return <LoadingComponent />;
  }

  if (projectImagesData.isError) {
    console.log('!!!Error: ', projectImagesData.error);
    console.log('--Status--', '--' + projectImagesData.status + '--');
    return <ErrorComponent errorMessage="Error" />;
  }
  //Burda kaldin projeler icin images yapiyordun ProjectDetails Page den alip donusturuyordun
  return (
    <>
      <figure className='max-w-3xl h-auto'>
        <img src={globalVariables.baseUrl + props.project.project.project_image_path} alt="Project Image" className='h-full' />
      </figure>
      {/* Prev Button */}
      {/* <div className=' h-full relative w-0 z-30 md:w-auto m-2  text-cyan-50'>
        <button className=' hover:border-gray-50 hover:text-gray-50  z-30 cursor-pointer  border-2 border-blue-400 text-blue-200 rounded-full w-12 h-12 p-2 md:w-16 md:h-16  md:p-4 ' >
          <svg className='pl-2' xmlns="http://www.w3.org/2000/svg" height="full" fill="currentColor" viewBox="0 -960 960 960" width="full"><path d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z" /></svg>
        </button>
      </div> */}
      {/* Prev Button */}
      {/* Next Button */}
      {/* <div className=' h-full relative  -left-12 md:static w-0 z-30  md:w-auto m-2  text-cyan-50'>
        <button className=' hover:border-gray-50 hover:text-gray-50  z-30 cursor-pointer  border-2 border-blue-400 text-blue-200 rounded-full w-12 h-12 p-2  md:w-16 md:h-16  md:p-4 ' >
          <svg className='px-1 ' xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="full" viewBox="0 -960 960 960" width="full"><path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" /></svg>
        </button>
      </div> */}
      {/* Next Button */}
    </>
  )
}

export default ProjectDetail