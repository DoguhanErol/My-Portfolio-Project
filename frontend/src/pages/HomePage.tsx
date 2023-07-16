
export default function HomePage() {
return (
    <>
    <section className='flex flex-col w-[89%] h-full text-5xl'>
      <section  className='flex justify-center items-center rounded-md w-full my-4 shadow-2xl h-20  bg-slate-950 bg-opacity-80 animate-[fadeInDownBig_1.4s_ease]'>
        <h2>"Yazar ağzını kapamalıdır ki eseri kendininkini açsın."<span className='text-4xl'>-Frederich Nietche</span> </h2>
      </section>
      <section className='flex flex-row'>
        <article className='flex flex-col w-[70%]'>
        <h2 className='flex justify-center items-center rounded-md w-full my-4 shadow-2xl h-80 bg-slate-950 bg-opacity-80 animate-[slideInLeft_0.4s_ease]'>Galeri</h2>
        <h2 className='flex justify-center items-center rounded-md w-full my-4 shadow-2xl h-80 bg-slate-950 bg-opacity-80 animate-[slideInLeft_0.6s_ease]'>Hakkimda</h2>
        </article>
        <article  className='flex  w-[30%]'>
        <h2  className='flex justify-center items-center rounded-md w-full my-4 mx-4 shadow-2xl h-[42rem] bg-slate-950 bg-opacity-80 animate-[slideInUp_0.7s_ease]'>Projeler</h2>
        </article>
      </section>
    </section>
    </>
  )
}
