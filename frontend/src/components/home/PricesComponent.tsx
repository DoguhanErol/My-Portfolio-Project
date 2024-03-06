//Types
import { IPrice } from "../../Types";
//Components
import PriceCard from "./PriceCard";

type TProps = {
  Prices:IPrice[];
}
const PricesComponent:React.FC<TProps> = (props:TProps) => {
  //Design
  return (
    <>
      <section className="xl:w-[100%] text-sky-200 bg-slate-950 bg-opacity-80 rounded-md body-font overflow-hidden text-lg">
          <div className="container  px-5 py-12 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-start sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Fiyatlar</h2>
              <div className="h-1 w-20 bg-blue-500 rounded"></div>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl text-gray-400 opacity-90">Fiyatlar isteklere göre değişmektedir.</p>
            </div>
            <div className="flex flex-wrap -m-4">
            { props.Prices && props.Prices.length > 0 && props.Prices.map((price,index) => (
                  <PriceCard
                  key={index}
                  price={price}
                  index={index}
                  />
                  ))}
            </div>
          </div>
      </section>
    </>
  )
}

export default PricesComponent