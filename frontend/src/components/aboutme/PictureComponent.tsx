//Images
import myImage from '../../assets/aboutme/myImage.png'

const PictureComponent = () => {
  //Design
    return (
        <section className='flex justify-center max-w-xs my-5 items-center w-full lg:w-full lg:max-w-[30%]'>
          <article className='flex justify-center items-center  lg:w-full bg-slate-950 bg-opacity-80 p-5 rounded-lg '>
            <figure className='w-auto'>
                  <img src={myImage} alt="My Picture" className='w-auto' />
            </figure>
          </article>
        </section>
      )
}

export default PictureComponent