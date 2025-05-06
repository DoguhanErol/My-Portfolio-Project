import * as React from 'react';


const LoadingComponent:React.FC = () => {
//Design
  return (
    <section className='flex flex-col justify-center items-center h-[64vh] w-[89%] text-3xl text-center'>
      <div className="flex items-center justify-center space-x-2">
	      <div className="w-4 h-4 rounded-full animate-pulse bg-[#73DEE4]"></div>
	      <div className="w-4 h-4 rounded-full animate-pulse bg-[#73DEE4]"></div>
	      <div className="w-4 h-4 rounded-full animate-pulse bg-[#73DEE4]"></div>
      </div>
    </section>
  )
}

export default LoadingComponent