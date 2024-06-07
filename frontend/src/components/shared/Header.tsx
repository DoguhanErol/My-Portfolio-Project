import { Link } from 'react-router-dom'
import 'animate.css';
import { useEffect, useState } from 'react'
//Images
import logo from '../../assets/shared/logo.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
import discordIcon from '../../assets/discord.png'
import emailIcon from '../../assets/email.png'
import navMenuIcon from '../../assets/navMenu.png'
//Global Variables
import globalVariables from '../../Config'

export default function Header() {
    //Get Url
    const { pathname } = location;
    //States
    const [isVisible, setIsVisible] = useState(false);

    //Use Effect
    useEffect(() => {
        setTimeout(() => {
            setIsVisible(false)
        }, 150);
    }, [pathname])

    //Action Handles
    const handleClickEvent = () => {
        if (isVisible) {
            setIsVisible(false)
        } else {
            setIsVisible(true)
        }

    }

    return (
        //Design
        <>
            <header className='flex flex-col justify-normal items-center fixed z-50 -top-1 pt-3 w-full lg:w-[90%] xl:w-[71%] h-[72px] sm:h-[136px] -mt-2 shadow-2xl bg-slate-900  rounded-lg animate-[slideInDown_1s_ease] text-[#94B0B2] ]'>
                <section className='flex flex-row w-full justify-between bg-slate-900 z-30'>
                    {/* Logo */}
                    <Link to={'/'} className=' m-2 sm:ml-8 z-30'>
                        <figure className='w-20 sm:w-28  '>
                            <img src={logo} alt="Doguhan Erol Logo" className='' />
                        </figure>
                    </Link>
                    {/* Icons */}
                    <nav className='flex flex-row   gap-1 items-center h-14 sm:h-full z-30'>
                        <a className='hover:border-2 hover:p-0 p-[2px]    border-cyan-300 border-0 rounded-full' href={globalVariables.linkedingUrl} target={'_blank'}>
                            <figure className='w-8 md:w-10 '>
                                <img src={linkedinIcon} alt="" className='rounded-full' />
                            </figure>
                        </a>
                        <a className='hover:border-2 hover:p-0 p-[2px]  border-cyan-300 border-0 rounded-full' href={globalVariables.githubUrl} target={'_blank'}>
                            <figure className='w-8 md:w-10'>
                                <img src={githubIcon} alt="" className='rounded-full' />
                            </figure>
                        </a>
                        <a className='hover:border-2 hover:p-0 p-[2px]  border-cyan-300 border-0 rounded-full' href={globalVariables.instagramIUrl} target={'_blank'}>
                            <figure className='w-8 md:w-10'>
                                <img src={instagramIcon} alt="" className='rounded-full' />
                            </figure>
                        </a>
                        <a className='hover:border-2 hover:p-0 p-[2px]  border-cyan-300 border-0 rounded-full' href={globalVariables.discordUrl} target={'_blank'}>
                            <figure className='w-8 md:w-10'>
                                <img src={discordIcon} alt="" className='rounded-full ' />
                            </figure>
                        </a>

                        <a className='hover:border-2 hover:p-0 p-[2px]   border-cyan-300 border-0 rounded-full' href={'mailto:' + globalVariables.mailAddress} target={'_blank'}>
                            <figure className='w-8 md:w-10'>
                                <img src={emailIcon} alt="" className='rounded-full' />
                            </figure>
                        </a>
                    </nav>
                    {/*Mobile Menu Icon */}
                    <div className='sm:hidden flex items-end h-12 mr-1 z-30'>
                        <button onClick={handleClickEvent}>
                            <figure className='w-9 bg-[#73DEE4] rounded-md'>
                                <img src={navMenuIcon} alt="" className='rounded-full ' />
                            </figure>
                        </button>
                    </div>
                    {/*Desktop Login */}
                    <article className='hidden sm:flex flex-row'>
                        <nav className='group  m-2 mr-8' >
                            <Link to={globalVariables.adminLoginUrl} className='flex flex-row  hover:text-cyan-50 hover:scale-95 hover:border-gray-500 transition-all  text-cyan-400 text-3xl border border-gray-400 rounded-md  p-1'>
                                <span className='mx-2 mt-[1px]'>Admin Girişi</span>
                                <svg className='' fill='currentColor' xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" /></svg>
                            </Link>
                        </nav>
                    </article>

                </section>
                {/*Desktop Navigation */}
                <section className='hidden   sm:flex flex-row'>
                    <nav className='hidden sm:flex  gap-16 text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-slate-700 p-1  sm:px-3 md:px-10 rounded-lg'>
                        <Link to={'/'} className='hover:text-[#c5ebed]'>Ana Sayfa</Link>
                        <Link to={'/projeler'} className='hover:text-[#c5ebed]'>Projeler</Link>
                        <Link to={'/galeri'} className='hover:text-[#c5ebed]'>Galeri</Link>
                        <Link to={'/hakkimda'} className='hover:text-[#c5ebed]'>Hakkimda</Link>
                        <Link to={'/cv'} className='hover:text-[#c5ebed]'>Cv</Link>
                        {/* <Link to={'/iletisim'} className='hover:text-[#c5ebed]'>Iletısım</Link> */}
                        {/* <a href={globalVariables.cvUrl} className='flex hover:text-[#c5ebed]'>Cv<svg className='h-auto ' fill='currentColor' xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg></a> */}
                    </nav>
                </section>


                {/*Mobile Navigation */}
                <section style={{ display: isVisible === true ? 'flex' : 'none' }} className='flex sm:hidden w-full h-0 animate-[fadeInDownBig_0.6s] z-20'>
                    <div className='fixed flex flex-col z-30 text-4xl gap-3 h-auto pb-10 rounded-b-3xl w-full bg-[#334155da]'>
                        <article className='flex flex-row w-full items-center justify-center'>
                            <nav className='group  m-2 mr-8' >
                                <Link to={globalVariables.adminLoginUrl} className='flex flex-row  hover:text-cyan-50 hover:scale-95 hover:border-gray-500 transition-all  text-cyan-400 text-3xl border border-gray-400 rounded-md  p-1'>
                                    <span className='mx-2 mt-[1px]'>Admin Girişi</span>
                                    <svg className='' fill='currentColor' xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" /></svg>
                                </Link>
                            </nav>
                        </article>
                        <article className='flex justify-center'>
                            <nav className='flex flex-col text-4xl gap-3'>
                                <Link to={'/'} style={{ color: pathname == '/' ? '#c5ebed' : '', borderLeft: pathname == '/' ? 'solid 3px white' : '' }} className='hover:text-[#c5ebed] pl-2 '>Ana Sayfa</Link>
                                <Link to={'/projeler'} style={{ color: pathname == '/projeler' ? '#c5ebed' : '', borderLeft: pathname == '/projeler' ? 'solid 3px white' : '' }} className='hover:text-[#c5ebed] pl-2 '>Projeler</Link>
                                <Link to={'/galeri'} style={{ color: pathname == '/galeri' ? '#c5ebed' : '', borderLeft: pathname == '/galeri' ? 'solid 3px white' : '' }} className='hover:text-[#c5ebed] pl-2 '>Galeri</Link>
                                <Link to={'/hakkimda'} style={{ color: pathname == '/hakkimda' ? '#c5ebed' : '', borderLeft: pathname == '/hakkimda' ? 'solid 3px white' : '' }} className='hover:text-[#c5ebed] pl-2 '>Hakkimda</Link>
                                {/* <Link to={'/iletisim'}  style={{ color: pathname == '/iletisim'? '#c5ebed': '' , borderLeft: pathname == '/iletisim'? 'solid 3px white': '' }} className='hover:text-[#c5ebed] pl-2 '>Iletısım</Link> */}
                                <a href={globalVariables.cvUrl} style={{ color: pathname == '/cv' ? '#c5ebed' : '', borderLeft: pathname == '/cv' ? 'solid 3px white' : '' }} className='flex hover:text-[#c5ebed] pl-2 '>Cv<svg className='h-auto ' fill='currentColor' xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" /></svg></a>
                            </nav>
                        </article>
                    </div>
                </section>

            </header>

        </>
    )
}
