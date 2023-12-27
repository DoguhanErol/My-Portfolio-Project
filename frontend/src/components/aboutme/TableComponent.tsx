//Types
import {ITableContents} from "../../types";
import {ITables} from '../../types'
//Global Variables
import { useQuery } from "@tanstack/react-query";
import { fetchTableContent } from "../../fetcher";
import LoadingComponent from "../shared/LoadingComponent";
import ErrorComponent from "../shared/ErrorComponent";

type TProps = {
  Tables:ITables;
}

const TableComponent:React.FC<TProps> = (props:TProps) => {

  let queryKeyDefault = ['tablecontent', props.Tables.table_id];
  //Querys
    const tableContentData = useQuery<ITableContents[], Error, ITableContents[],string[]>({
      queryKey:queryKeyDefault,
      queryFn:() => fetchTableContent(props.Tables.table_id),
    });
    
    //Checks
  if (tableContentData.isLoading || tableContentData.isRefetching || tableContentData.isFetching) {
    console.log('Loading...')
    return <LoadingComponent />;
  }

  if (tableContentData.isError || typeof(tableContentData.data) === 'undefined') {
    console.log('!!!Error: ',tableContentData.error )
    return  <ErrorComponent errorMessage="Error" />;
  }

  return (
    <>
    <section className='flex flex-col  items-center max-w-xs w-full my-5 rounded-lg bg-slate-950 bg-opacity-80'>
      <article className='flex p-1 bg-slate-700 justify-start w-full rounded-t-lg'>
      <h2 className=' text-4xl'>
        { props.Tables.table_title }
      </h2>
      </article>
      <article className='flex flex-col w-full '>
      {tableContentData.data.map((tableContent) => (
        <p className='text-3xl px-2'>{tableContent.content_left_text}<span className='text-3xl px-1 text-gray-300'>{tableContent.content_right_text}</span></p>
      ))}
      </article>
    </section>
    </>
  )
}

export default TableComponent