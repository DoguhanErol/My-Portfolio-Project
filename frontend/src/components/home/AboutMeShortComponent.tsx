import { Link } from 'react-router-dom';
//Images
import myImage from './../../assets/home/myImage.png';

const AboutMeShortComponent = () => {
  //Design
  return (
    <>
      <section className="text-gray-400 bg-slate-950  bg-opacity-80 rounded-md my-4 body-font">
      <div className='pt-7 pl-7'>
        <h1 className="text-start sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Hakkımda</h1>
        <div className="h-1 w-[7rem] bg-blue-500 rounded"></div>
      </div>
          <div className="container px-2 py-12 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
            {/* Steps */}
              <section className="p-6 bg-gray-800 text-gray-100">
              	<div className="container mx-auto">
              		<span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase text-blue-500">Neler Yapıyorum</span>
              		<h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-50">Projeleriniz Son Teknoloji İle Geliştirilir</h2>
              		<div className="grid gap-6 my-16 lg:grid-cols-3">
              			<div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
              				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-blue-500 text-gray-900">1</div>
              				<p className="text-lg lg:text-2xl font-semibold">
                      SEO uyumlu web projeleri kullanarak Google aramalarında ön planda olursunuz.
              				</p>
              			</div>
              			<div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
              				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-blue-500 text-gray-900">2</div>
              				<p className="text-lg lg:text-2xl font-semibold">
                      Son teknoloji kod paketleri kullanılarak projeniz sıfırdan kodlanır, böylece projeniz hızlı, kaliteli ve özgün olur.
              				</p>
              			</div>
              			<div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
              				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-blue-500 text-gray-900">3</div>
              				<p className="text-lg lg:text-2xl font-semibold">
                      Projeniz uçtan uca bizzat benim tarafımdan geliştirilir ve yayınlanır; herhangi bir şey yapmanıza veya başka kişilerle uğraşmanıza gerek yoktur.
              				</p>
              			</div>
              		</div>
              	</div>
              </section>

              {/* Text and Image */}

              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                    <img src={myImage} className=' rounded-full' alt="My Picture" />
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-white text-2xl md:text-2xl">Doğuhan Erol</h2>
                    <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                    <p className="text-xl text-gray-400 md:text-2xl">Yazılım Geliştirici</p>
                    <p className="text-xl text-gray-400 md:text-2xl">Full Stack Developer</p>

                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-xl md:text-2xl mb-4">İki diplomalı ve sertifikalı bir yazılımcı olarak projelerinizi tasarlar, kodlar ve yayınlarım; projenizin tüm ihtiyaçlarını bizzat karşılarım. Kalite veya diğer konularla ilgili endişelenmenize gerek yok.</p>
                  <Link to={'/hakkimda'} className="group text-blue-300 cursor-pointer inline-flex items-center text-3xl hover:text-sky-100 mt-3">Hakkımda
                    <svg  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="group-hover:text-sky-100 w-10 h-10 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default AboutMeShortComponent