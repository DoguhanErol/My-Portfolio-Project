import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import WhatsAppButton from "./components/shared/WhatsAppButton";
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectsDetailsPage from './pages/ProjectDetailsPage'
import AboutMePage from './pages/AboutMePage';
import { QueryClientProvider, QueryClient} from '@tanstack/react-query'
import GalleryImageDetailPage from './pages/GalleryImageDetailPage';
import { useEffect } from 'react';
import globalVariables from './globals';

const reactQueryClient =  new QueryClient();

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <>
    <QueryClientProvider client={reactQueryClient}>
      <main className='flex flex-col justify-center items-center py-20 w-full xl:w-[80%] min-h-screen h-auto bg-[#94B0B2] shadow-2xl bg-opacity-20 z-10 text-[#94B0B2]'>
      <Header />
      <WhatsAppButton wpLink={globalVariables.whatsAppApiUrl} />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/galeri' element={<GalleryPage />}/>
          <Route path='/galeri/:id' element={<GalleryImageDetailPage  />} />
          <Route path='/projeler' element={<ProjectsPage />}/>
          <Route path='/projeler/:id' element={<ProjectsDetailsPage />}/>
          <Route path='/hakkimda' element={<AboutMePage />}/>
          {/* <Route path='/iletisim' element={<ContactPage />}/> */}
      </Routes>
        <Footer />
      </main>
      </QueryClientProvider>
    </>
  )
}

export default App
