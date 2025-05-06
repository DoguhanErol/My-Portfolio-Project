import { useQuery } from "@tanstack/react-query";
import * as React from "react"
import { fetchTables } from "../../Requests";
import { ITables } from "../../Types";
import ErrorComponent from "../shared/ErrorComponent";
import LoadingComponent from "../shared/LoadingComponent";
import TableComponent from "./TableComponent";


const TablesLayout:React.FC = () => {

      //Querys
  const tableData = useQuery<ITables[], Error, ITables[], ["tables"]>({
    queryKey: ['tables'],
    queryFn: fetchTables,
  });

    //Checks
    if (tableData.isLoading || tableData.isRefetching ) {
        console.log('Loading...')
        return <LoadingComponent />;
      }
    
      if (tableData.isError ) {
        console.log('!!!Error: ',tableData.error)
        return  <ErrorComponent errorMessage="Error" />;
      }


  return (
    <>
     {tableData.data && tableData.data.length > 0  && tableData.data.map((table) => (
                 <TableComponent
                 Tables={table}
                 />
              ))}
    </>
  )
}

export default TablesLayout