import { useQuery } from "@tanstack/react-query";
import * as React from "react"
import { useParams } from "react-router-dom";
import globalVariables from "../../Config";
import { fetchTechStacksByCategoryId } from "../../Requests";
import { ITechStack } from "../../Types";
import ErrorComponent from "../shared/ErrorComponent";
import LoadingComponent from "../shared/LoadingComponent";

type TProps = {
    TechStackCategoryId:number;
}

const TechStackComponent:React.FC<TProps> = (props:TProps) => {
  // Yeniden sorgu yapmak için useQuery hookunu her render'da yeniden çağırıyoruz
  const techStacks = useQuery<ITechStack[], Error, ITechStack[], ["techstacks"]>({
    queryKey: ['techstacks',props.TechStackCategoryId],
    queryFn: () => fetchTechStacksByCategoryId(props.TechStackCategoryId),
  });

 

  //Error Handling
  if (techStacks.isLoading || techStacks.isRefetching) {
    console.log('Loading...');
    return <LoadingComponent />;
  }

  if (techStacks.isError || !techStacks.data) {
    console.log('!!!Error: ', techStacks.error);
    console.log('--Status--', '--' + techStacks.status + '--');
    return <ErrorComponent errorMessage="Error" />;
  }

  return (
    <>
      <section className="flex flex-wrap -m-2">
        {techStacks.data && techStacks.data.length > 0 && techStacks.data.map((techStack) => (
          <article className="p-2 lg:w-1/3 md:w-1/2 w-full" key={techStack.tech_stack_id}>
            <div className="h-full flex items-center border-gray-600 bg-slate-700 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 bg-gray-100 bg-opacity-0 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ globalVariables.baseUrl +techStack.tech_stack_image_path} />
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">{techStack.tech_stack_title}</h2>
                <p className="text-gray-400">{techStack.tech_stack_info}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default TechStackComponent;
