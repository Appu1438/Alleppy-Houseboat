import { Routes, Route } from 'react-router-dom'

import MainLayout from './layout/MainLayout'
import Home from './pages/home/Home'
import Houseboats from './pages/houseboat/Houseboat'
import HouseboatDetail from './pages/houseboatDetails/HouseboatDetails'
import Packages from './pages/packages/Packages'
import Gallery from './pages/gallery/Gallery'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'


export default function App() {
  return (

    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/houseboats" element={<Houseboats />} />
        <Route path="/houseboats/:id" element={<HouseboatDetail />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/faq"                        element={<FAQ />} /> */}

        {/* SEO Pages */}
        {/* <Route path="/alleppey-houseboats"              element={<AlleppeyHouseboats />} />
          <Route path="/luxury-houseboats-alleppey"       element={<LuxuryHouseboats />} />
          <Route path="/honeymoon-houseboats-alleppey"    element={<HoneymoonHouseboats />} />
          <Route path="/alleppey-houseboat-packages"      element={<AlleppeyPackages />} /> */}

      </Route>
    </Routes>


  )
}