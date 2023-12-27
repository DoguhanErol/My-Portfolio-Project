import 'react'
//Global Variables
import globalVariables from '../../globals';
//Types
import { IImage } from '../../types';

type TProps = {
  Image:IImage;
  index:string;
}

const ImageCard:React.FC<TProps> = (props:TProps) => {
  
  const imageIdStr:string = props.index;
  const imgId = 'galeri/'+imageIdStr;
  //Design
  return (
<article className=" max-w-[375px] min-w-[375px] m-3 rounded-xl shadow-md dark:bg-gray-900 dark:text-gray-100 hover:border-2 hover:rounded-md hover:border-blue-400 hover:bg-slate-800 hover:scale-105 ">
    {/*Image Card*/}
    <figure className="cursor-pointer space-y-2 ">
      <a href={globalVariables.websiteUrl+imgId}>
        <img src={globalVariables.baseUrl+props.Image.image_path} alt={props.Image.image_name} id={props.Image.image_id.toString()} className="block object-cover  object-center w-full rounded-md h-[340px] dark:bg-gray-500" />
      </a>
    </figure>
</article>
  )
}

export default ImageCard;