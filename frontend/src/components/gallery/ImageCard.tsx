import 'react'
//Global Variables
import globalVariables from '../../Config';
//Types
import { IImage } from '../../Types';

type TProps = {
  Image:IImage;
  index:string;
}

const ImageCard:React.FC<TProps> = (props:TProps) => {
  
  const imageIdStr:string = props.index;
  const imgId = 'galeri/'+imageIdStr;
  //Design
  return (
<article className=" inline-grid rounded-xl shadow-md dark:bg-gray-900 dark:text-gray-100 hover:border-2 hover:rounded-md hover:border-blue-400 hover:bg-slate-800 hover:scale-105 ">
    {/*Image Card*/}
    <figure className="cursor-pointer">
      <a href={globalVariables.websiteUrl+imgId}>
        <img src={globalVariables.baseUrl+props.Image.image_path} alt={'Gallery Image '+props.Image.image_id} id={props.Image.image_id.toString()} className="block h-28 xs:h-44  sm:56 md:h-72 lg:h-80  object-cover  object-center w-full rounded-md dark:bg-gray-500" />
      </a>
    </figure>
</article>
  )
}

export default ImageCard;