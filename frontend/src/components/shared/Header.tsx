import logo from '../../assets/shared/logo.svg'
import linkedinIcon from '../../assets/header/linkedin.png'
import githubIcon from '../../assets/header/github.png'
import instagramIcon from '../../assets/header/instagram.png'
import { Link } from 'react-router-dom';
import 'animate.css';


export default function Header() {
  return (
    <>
    <header className='flex flex-row justify-evenly items-center fixed z-20 pt-3 w-[71%] h-[75px] -mt-2 shadow-2xl bg-slate-900  rounded-lg animate-[slideInDown_1s_ease] text-[#94B0B2] ]'>
        <section>
            <figure className='w-28'>
                <img src={logo} alt="" className='' />
            </figure>
        </section>
        <section className='text-4xl bg-slate-700 p-1 rounded-lg'>
            <nav>
            <Link to={'/'} className='mx-5 hover:text-[#c5ebed]'>Ana Sayfa</Link>
            <Link to={'/projeler'} className='mx-5 hover:text-[#c5ebed]'>Projeler</Link>
            <Link to={'/galeri'} className='mx-5 hover:text-[#c5ebed]'>Galeri</Link>
            <Link to={'/hakkimda'} className='mx-5 hover:text-[#c5ebed]'>Hakkimda</Link>
            <Link to={'/iletisim'} className='mx-5 hover:text-[#c5ebed]'>Iletısım</Link>
            </nav>
        </section>
        <section className='flex flex-row justify-evenly '>
            <figure>
                <a href="https://www.linkedin.com/in/do%C4%9Fuhan-erol-5b0336244/" target='blank'>
                    <img src={linkedinIcon} alt="Linkedin Icon" className='w-10 mx-2'/>
                </a>
            </figure>
            <figure>
                <a href="https://github.com/DoguhanErol" target='blank'>
                    <img src={githubIcon} alt="Linkedin Icon" className='w-10 mx-2'/>
                </a>
            </figure>
            <figure>
                <a href="https://www.instagram.com/doguhandev/" target='blank'>
                    <img src={instagramIcon} alt="Linkedin Icon" className='w-10 mx-2'/>
                </a>
            </figure>
        </section>
        {/* <section>
            <label for="Toggle4" className="bg-slate-700 text-xl inline-flex rounded-lg items-center p-1 cursor-pointer">
                <input id="Toggle4" type="checkbox" className="hidden peer rounded-sm" />
                <span className="px-4 py-2 text-[#73DEE4] bg-gray-900 peer-checked:bg-gray-600 rounded-full border-[#73DEE4] border peer-checked:border-0 mx-1">TR</span>
                <span className="px-4 py-2 text-[#73DEE4] bg-gray-600 peer-checked:bg-gray-900 rounded-full border-[#73DEE4] peer-checked:border border-0 mx-1">EN</span>
            </label>
        </section> */}
    </header>
    </>
  )
}
