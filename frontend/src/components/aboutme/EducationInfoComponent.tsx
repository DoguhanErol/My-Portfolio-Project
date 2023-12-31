import * as React from "react";
//Types
import {IEducation} from '../../types';

type TProps={
    Educations:IEducation[];
}

const EducationInfoComponent:React.FC<TProps> = (props:TProps) => {
//Design
  return (
    <>
     <section className="bg-slate-950 bg-opacity-80 rounded-lg max-w-xs w-full m-5 lg:m-0 lg:my-5 lg:max-w-full  text-gray-100">
	<div className="container max-w-5xl px-4 py-12 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<section className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-[#73DEE4]">
					<h3 className="text-4xl font-semibold">Eğitimim</h3>
				</div>
			</section>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<section className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
				{ props.Educations && props.Educations.length > 0  &&props.Educations.map((education) => (
					<article className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#73DEE4]">
					<h3 className="text-3xl font-semibold tracking-wide">{education.education_school_name}</h3>
					<time className="text-2xl tracking-wide uppercase text-gray-400">{education.education_date}</time>
					<p className="mt-3 text-2xl">{education.education_title}</p>
				</article>
				))}
				</section>
			</div>
		</div>
	</div>
</section>
    </>
  )
}

export default EducationInfoComponent