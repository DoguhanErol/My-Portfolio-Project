import { useQuery } from "@tanstack/react-query"
import * as React from "react"
import { fetchTechStackCategories } from "../../Requests";
import { ITechStackCategory } from "../../Types"
import ErrorComponent from "../shared/ErrorComponent";
import LoadingComponent from "../shared/LoadingComponent";
import TechStackComponent from "./TechStackComponent";

const TechStackLayout:React.FC = () => {

     const techStackCategories = useQuery<ITechStackCategory[], Error, ITechStackCategory[], ["techstackcategories"]>({
        queryKey: ['techstackcategories'],
        queryFn: fetchTechStackCategories,
     });

       //Checks
  if (techStackCategories.isLoading || techStackCategories.isRefetching) {
    console.log('Loading...')
    return <LoadingComponent />;
  }

  if (techStackCategories.isError  ||  typeof(techStackCategories.data) === 'undefined') {
    console.log('!!!Error: ',techStackCategories.error)
    return  <ErrorComponent errorMessage="Error" />;
  }



  return (
    <>
    {techStackCategories.data && techStackCategories.data.length > 0 && techStackCategories.data.map((category)=>(
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">{category.tech_stack_category_title}</h1>
          </div>
        <TechStackComponent 
        TechStackCategoryId={category.tech_stack_category_id}
        />
        </div>
    ))}
    </>
  )
}

export default TechStackLayout