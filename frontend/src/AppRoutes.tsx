import { Route, Routes, useLocation } from "react-router-dom";
import AboutMePage from "./pages/AboutMePage";
import GalleryImageDetailPage from "./pages/GalleryImageDetailPage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectsDetailsPage from './pages/ProjectDetailsPage'
import { useEffect } from "react";
import CvPage from "./pages/CvPage";
import { GalleryProvider } from "./contexts/GalleryContext";


const AppRoutes = () => {
  //This must be top of to scroll
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <GalleryProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/galeri' element={<GalleryPage />} />
          <Route path='/galeri/:page/:id' element={<GalleryImageDetailPage />} />
          <Route path='/projeler' element={<ProjectsPage />} />
          <Route path='/projeler/:id' element={<ProjectsDetailsPage />} />
          <Route path='/hakkimda' element={<AboutMePage />} />
          <Route path='/cv' element={<CvPage />} />
          {/* <Route path='/iletisim' element={<ContactPage />}/> */}
        </Routes>
      </GalleryProvider>

    </>
  )
}

export default AppRoutes