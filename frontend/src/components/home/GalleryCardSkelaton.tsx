import * as React from "react";
import 'animate.css'
const GalleryCardSkelaton:React.FC  = () => {
    return ( 
<article className="container border  z-30 animate-[pulse_2s_infinite] transition-opacity bg-slate-500 py-5 bg-opacity-60 border-sky-200 rounded-md mx-auto flex px-5 m-8 min-h-[8rem] sm:min-h-[16rem] md:flex-row flex-col items-center ">
  <div className="w-[14rem] xs:w-[20rem]">
    <div className="h-full rounded-t dark:bg-gray-300 "></div>
  </div>
</article>
     );
}
 
export default  GalleryCardSkelaton;