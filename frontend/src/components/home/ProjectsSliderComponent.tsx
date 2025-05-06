import * as React from 'react';
import 'animate.css'
import { useEffect, useState } from 'react';
//Types
import { IProject, IProjectShort } from '../../Types';
// Components
import ProjectCardComponent from './ProjectCardComponent';
import ProjectCardLoadingSkelaton from './ProjectsCardSkelaton';

type TProps = {
  Projects: IProject[];
}

const ProjectsSliderComponent: React.FC<TProps> = (props: TProps) => {
  //States
  const [buttonsDisable, setButtonsDisable] = useState(false);
  const [cardStyle, setCardStyle] = useState({
    opacity: 100,
    animation: ''
  });

  const firstProject: IProjectShort | null = props.Projects.length > 0 ? {
    project_id: props.Projects[0].project_id,
    project_name: props.Projects[0].project_name,
    project_type: props.Projects[0].project_type,
    project_details: props.Projects![0].project_details,
    project_image_path: props.Projects![0].project_image_path,
  } : null;

  const [activeProjectData, setActiveProjectData] = useState<IProjectShort | null>(firstProject);
  const [activeProjectNumber, setActiveProjectNumber] = useState<number>(0);
  const [lastProjectIndex, setLastProjectIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true); // New state for loading



  //Active and Last Project Setup
  const projectDataSetUp = async () => {
    try {
      if (props.Projects) {
        setActiveProjectData(props.Projects[activeProjectNumber]);
        setLastProjectIndex(props.Projects.length - 1);
        setIsLoading(false); // Data is loaded
        console.log('Active Project Data:', props.Projects[activeProjectNumber]);
      }
    } catch (error) {
      console.error('Fetch Error:', error);
    }
  };

  //Action Handles
  const handleEventNextClick = () => {
    setButtonsDisable(true);
    setCardStyle({
      opacity: 0,
      animation: 'fadeOutLeftBig 0.7s'
    })

    setTimeout(() => {
      if (activeProjectNumber < lastProjectIndex) {
        setActiveProjectNumber(activeProjectNumber + 1)
      } else {
        setActiveProjectNumber(0)
      }
      setCardStyle({
        opacity: 100,
        animation: 'fadeInRightBig 0.7s'

      })

      setButtonsDisable(false);
    }, 700);
  }
  const handleEventPrevClick = () => {
    setButtonsDisable(true);
    setCardStyle({
      opacity: 0,
      animation: 'fadeOutRightBig 0.6s'
    })
    setTimeout(() => {

      if (activeProjectNumber > 0) {
        setActiveProjectNumber(activeProjectNumber - 1)
      } else {
        setActiveProjectNumber(lastProjectIndex)
      }

      setCardStyle({
        opacity: 100,
        animation: 'fadeInLeftBig 0.6s'

      })

      setButtonsDisable(false);
    }, 600);
  }

  //Use Effect
  useEffect(() => {
    projectDataSetUp(); // async fonksiyonu çağır
  }, [props.Projects, handleEventNextClick, handleEventPrevClick]);


  //Design
  return (
    <div className='container mx-auto '>
      <section className="flex flex-col  overflow-y-hidden overflow-x-hidden  text-gray-400 w-full bg-slate-950  bg-opacity-80 rounded-md body-font">
        <div className='pt-7 pl-7'>
          <h1 className="text-start sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Projeler</h1>
          <div className="h-1 w-24 bg-blue-500 rounded"></div>
        </div>
        <div className='flex flex-row w-full items-center justify-center'>
          {/* Prev Button */}
          <div className=' h-full relative w-0  z-30 md:w-auto m-2  text-cyan-50'>
            <button disabled={buttonsDisable} onClick={handleEventPrevClick} className=' hover:border-gray-50 hover:text-gray-50  z-30 cursor-pointer  border-2 border-blue-400 text-blue-200 rounded-full w-12 h-12 p-2 md:w-16 md:h-16  md:p-4 ' >
              <svg className='pl-2' xmlns="http://www.w3.org/2000/svg" height="full" fill="currentColor" viewBox="0 -960 960 960" width="full"><path d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z" /></svg>
            </button>
          </div>
          {/* Prev Button */}

          <div style={cardStyle} className='transition-all duration-500'>
          {isLoading ? (
              <ProjectCardLoadingSkelaton />// Show skeleton while loading
            ) : (
              <ProjectCardComponent
                projectDataObj={activeProjectData!}
              />
            )}
          </div>

          {/* Next Button */}
          <div className=' h-full relative -left-12 md:static w-0 z-30  md:w-auto m-2  text-cyan-50'>
            <button disabled={buttonsDisable} onClick={handleEventNextClick} className=' hover:border-gray-50 hover:text-gray-50  z-30 cursor-pointer  border-2 border-blue-400 text-blue-200 rounded-full w-12 h-12 p-2  md:w-16 md:h-16  md:p-4 ' >
              <svg className='px-1 ' xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="full" viewBox="0 -960 960 960" width="full"><path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" /></svg>
            </button>
          </div>
          {/* Next Button */}
        </div>
      </section>
    </div>
  )
}

export default ProjectsSliderComponent