import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout.jsx'
import { SplashScreen } from './components/SplashScreen.jsx'
import CitiesPage from './pages/CitiesPage.jsx'
import CityDetailPage from './pages/CityDetailPage.jsx'
import FlowersPage from './pages/FlowersPage.jsx'
import GiftsPage from './pages/GiftsPage.jsx'
import HerPage from './pages/HerPage.jsx'
import HomePage from './pages/HomePage.jsx'
import PoetryPage from './pages/PoetryPage.jsx'
import ProposalPage from './pages/ProposalPage.jsx'
import SwanPage from './pages/SwanPage.jsx'

export default function App() {
  return (
    <>
      <SplashScreen />
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="her" element={<HerPage />} />
          <Route path="swan" element={<SwanPage />} />
          <Route path="flowers" element={<FlowersPage />} />
          <Route path="cities" element={<CitiesPage />} />
          <Route path="cities/:slug" element={<CityDetailPage />} />
          <Route path="poetry" element={<PoetryPage />} />
          <Route path="proposal" element={<ProposalPage />} />
          <Route path="gifts" element={<GiftsPage />} />
        </Route>
      </Routes>
    </>
  )
}
