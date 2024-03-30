import * as React from 'react';
//Types
import { IPrice } from '../../Types';

type TProps ={
  price:IPrice;
  index:number;
}

const PriceCard:React.FC<TProps> = (props:TProps) => {
  //Design
  //Condition about style
  if (props.price.price_type === 'ucuz') {
  return(
      <article className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div  className="h-full p-6 rounded-lg border-2  border-red-400 flex flex-col relative overflow-hidden">
        <span  className="bg-red-400 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">En Ucuz</span>
          <h2 className="text-lg tracking-widest title-font mb-1 font-medium">{props.price.price_title}</h2>
          <h1 className="text-5xl text-white pb-4 mb-4 border-b border-gray-200 leading-none">₺{props.price.price_price} 
          <span className="text-lg ml-1 font-normal text-gray-500">/başlayan</span>
          </h1>
          <p style={{display: props.price.price_sub_content_1 ? 'flex':'none'}} className="flex items-center text-sky-200 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{props.price.price_sub_content_1}
          </p>
          <p style={{display: props.price.price_sub_content_2 ? 'flex':'none'}} className="flex items-center text-sky-200 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{props.price.price_sub_content_2}
          </p>
          <p style={{display: props.price.price_sub_content_3 ? 'flex':'none'}} className="flex items-center text-sky-200 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{props.price.price_sub_content_3}
          </p>
          <p style={{display: props.price.price_sub_content_4 ? 'flex':'none'}} className="flex items-center text-sky-200 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{props.price.price_sub_content_4}
          </p>
          <p style={{display: props.price.price_sub_content_5 ? 'flex':'none'}} className="flex items-center text-sky-200 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{props.price.price_sub_content_5}
          </p>
        </div>
      </article>
  )
  }else if (props.price.price_type === 'popiler') {
    return(
      <article className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div  className="h-full p-6 rounded-lg border-2  border-blue-400 flex flex-col relative overflow-hidden">
        <span className="bg-blue-400 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">En Popüler</span>
          <h2 className="text-lg tracking-widest title-font mb-1 font-medium">{props.price.price_title}</h2>
          <h1 className="text-5xl text-white pb-4 mb-4 border-b border-gray-200 leading-none">₺{props.price.price_price} 
          <span className="text-lg ml-1 font-normal text-gray-500">/başlayan</span>
          </h1>
          <p style={{display: props.price.price_sub_content_1 ? 'flex':'none'}} className="flex items-center text-sky-200 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{props.price.price_sub_content_1}
          </p>
          <p style={{display: props.price.price_sub_content_2 ? 'flex':'none'}} className="flex items-center text-sky-200 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{props.price.price_sub_content_2}
          </p>
          <p style={{display: props.price.price_sub_content_3 ? 'flex':'none'}} className="flex items-center text-sky-200 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{props.price.price_sub_content_3}
          </p>
          <p style={{display: props.price.price_sub_content_4 ? 'flex':'none'}} className="flex items-center text-sky-200 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{props.price.price_sub_content_4}
          </p>
          <p style={{display: props.price.price_sub_content_5 ? 'flex':'none'}} className="flex items-center text-sky-200 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{props.price.price_sub_content_5}
          </p>
        </div>
      </article>
  )
  }else{
    return(
      <article className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div  className="h-full p-6 rounded-lg border-2 flex flex-col relative overflow-hidden">
          <h2 className="text-lg tracking-widest title-font mb-1 font-medium">{props.price.price_title}</h2>
          <h1 className="text-5xl text-white pb-4 mb-4 border-b border-gray-200 leading-none">₺{props.price.price_price} 
          <span className="text-lg ml-1 font-normal text-gray-500">/başlayan</span>
          </h1>
          
          <p style={{display: props.price.price_sub_content_1 ? 'flex':'none'}} className="flex items-center text-sky-200 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{props.price.price_sub_content_1}
          </p>
          <p style={{display: props.price.price_sub_content_2 ? 'flex':'none'}} className="flex items-center text-sky-200 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{props.price.price_sub_content_2}
          </p>
          <p style={{display: props.price.price_sub_content_3 ? 'flex':'none'}} className="flex items-center text-sky-200 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{props.price.price_sub_content_3}
          </p>
          <p style={{display: props.price.price_sub_content_4 ? 'flex':'none'}} className="flex items-center text-sky-200 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{props.price.price_sub_content_4}
          </p>
          <p style={{display: props.price.price_sub_content_5 ? 'flex':'none'}} className="flex items-center text-sky-200 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{props.price.price_sub_content_5}
          </p>
        </div>
      </article>
  )
  }
}

export default PriceCard