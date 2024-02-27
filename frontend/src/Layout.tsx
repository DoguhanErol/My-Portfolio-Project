import * as React from "react"
import AppRoutes from "./AppRoutes"
import Aside from "./components/shared/Aside"
import Footer from "./components/shared/Footer"
import Header from "./components/shared/Header"

const Layout:React.FC = () => {
  return (
    <>
    <main className='flex flex-col justify-center items-center py-20 w-full xl:w-[80%] min-h-screen h-auto bg-[#94B0B2] shadow-2xl bg-opacity-20 z-10 text-[#94B0B2]'>
    <Header />
    <Aside />
    <AppRoutes />
    <Footer />
    </main>
    </>
  )
}

export default Layout