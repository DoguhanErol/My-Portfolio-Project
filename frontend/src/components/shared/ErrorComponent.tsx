import * as React from 'react';

type TProps = {
    errorMessage:string;
}

const ErrorComponent: React.FC<TProps> = (props:TProps) => {
  //Design
  return (
    <>
    <section className='flex flex-col justify-center items-center h-[64vh] w-[89%] text-3xl text-center'>
      <div className="mb-4 rounded-lg bg-success-100 px-6 py-5 text-base text-success-700 bg-slate-600 bg-opacity-90"role="alert">
        <h4 className="mb-2 text-5xl font-medium leading-tight">Hata!</h4>
        <p className="mb-4text-3xl">
          Bir tür hata ile karşıldı lütfen sayfayı yenileyin yada başka sayfaları deneyiniz.
        </p>
        <hr className="border-success-600 opacity-30" />
        <p className="mb-0 mt-4 text-3xl">
        {props.errorMessage}
        </p>
      </div>
    </section>
    </>
  )
}

export default ErrorComponent