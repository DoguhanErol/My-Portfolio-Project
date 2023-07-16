import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutMePage from './pages/AboutMePage';
import ContactPage from './pages/ContactPage';

function App() {

  return (
    <>
    <Header />
      <main className='flex flex-col justify-center items-center py-20 w-full xl:w-[80%] h-auto bg-[#94B0B2] shadow-2xl bg-opacity-20 z-10 text-[#94B0B2]'>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/galeri' element={<GalleryPage />}/>
          <Route path='/projeler' element={<ProjectsPage />}/>
          <Route path='/hakkimda' element={<AboutMePage />}/>
          <Route path='/iletisim' element={<ContactPage />}/>
        </Routes>
        <Footer />
      </main>
    </>
  )
}

export default App
