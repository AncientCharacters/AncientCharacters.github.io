import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import './css/style.css'

// Import pages
import Characters from './pages/Characters'
import PageNotFound from './pages/utility/PageNotFound'
import Character1 from './pages/details/Character1'
import Character2 from './pages/details/Character2'
import Character3 from './pages/details/Character3'
import Character4 from './pages/details/Character4'
import Character5 from './pages/details/Character5'
import Character6 from './pages/details/Character6'
import Character7 from './pages/details/Character7'
import Character8 from './pages/details/Character8'
import Character9 from './pages/details/Character9'
import Character10 from './pages/details/Character10'
import Character11 from './pages/details/Character11'
import Character12 from './pages/details/Character12'
import Character13 from './pages/details/Character13'
import Character14 from './pages/details/Character14'
import Character15 from './pages/details/Character15'
import Character16 from './pages/details/Character16'
import Character17 from './pages/details/Character17'
import Character18 from './pages/details/Character18'
import Character19 from './pages/details/Character19'
import Character20 from './pages/details/Character20'
import Character21 from './pages/details/Character21'
import Character22 from './pages/details/Character22'
import Character23 from './pages/details/Character23'
import Character24 from './pages/details/Character24'
import Character25 from './pages/details/Character25'
import Character26 from './pages/details/Character26'
import Character27 from './pages/details/Character27'
import Character28 from './pages/details/Character28'
import Character29 from './pages/details/Character29'
import Character30 from './pages/details/Character30'
import Character31 from './pages/details/Character31'
import Character32 from './pages/details/Character32'
import Character33 from './pages/details/Character33'
import Character34 from './pages/details/Character34'
import Character35 from './pages/details/Character35'
import Character36 from './pages/details/Character36'
import Character37 from './pages/details/Character37'
import Character38 from './pages/details/Character38'
import Character39 from './pages/details/Character39'
import Character40 from './pages/details/Character40'
import Character41 from './pages/details/Character41'
import Character42 from './pages/details/Character42'
import Character43 from './pages/details/Character43'
import Character44 from './pages/details/Character44'
import Character45 from './pages/details/Character45'
import Character46 from './pages/details/Character46'
import Character47 from './pages/details/Character47'
import Character48 from './pages/details/Character48'
import Character49 from './pages/details/Character49'
import Character50 from './pages/details/Character50'
import Character51 from './pages/details/Character51'
import Character52 from './pages/details/Character52'
import Character53 from './pages/details/Character53'
import Character54 from './pages/details/Character54'
import Character55 from './pages/details/Character55'
import Character56 from './pages/details/Character56'
import Character57 from './pages/details/Character57'
import Character58 from './pages/details/Character58'
import Character59 from './pages/details/Character59'
import Character60 from './pages/details/Character60'
import Character61 from './pages/details/Character61'
import Character62 from './pages/details/Character62'
import Character63 from './pages/details/Character63'
import Character64 from './pages/details/Character64'
import Character65 from './pages/details/Character65'
import Character66 from './pages/details/Character66'
import Character67 from './pages/details/Character67'

function App() {
  const location = useLocation()

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]) // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Characters />} />
        <Route path="/1" element={<Character1 />} />
        <Route path="/1" element={<Character1 />} />
        <Route path="/2" element={<Character2 />} />
        <Route path="/3" element={<Character3 />} />
        <Route path="/4" element={<Character4 />} />
        <Route path="/5" element={<Character5 />} />
        <Route path="/6" element={<Character6 />} />
        <Route path="/7" element={<Character7 />} />
        <Route path="/8" element={<Character8 />} />
        <Route path="/9" element={<Character9 />} />
        <Route path="/10" element={<Character10 />} />
        <Route path="/11" element={<Character11 />} />
        <Route path="/12" element={<Character12 />} />
        <Route path="/13" element={<Character13 />} />
        <Route path="/14" element={<Character14 />} />
        <Route path="/15" element={<Character15 />} />
        <Route path="/16" element={<Character16 />} />
        <Route path="/17" element={<Character17 />} />
        <Route path="/18" element={<Character18 />} />
        <Route path="/19" element={<Character19 />} />
        <Route path="/20" element={<Character20 />} />
        <Route path="/21" element={<Character21 />} />
        <Route path="/22" element={<Character22 />} />
        <Route path="/23" element={<Character23 />} />
        <Route path="/24" element={<Character24 />} />
        <Route path="/25" element={<Character25 />} />
        <Route path="/26" element={<Character26 />} />
        <Route path="/27" element={<Character27 />} />
        <Route path="/28" element={<Character28 />} />
        <Route path="/29" element={<Character29 />} />
        <Route path="/30" element={<Character30 />} />
        <Route path="/31" element={<Character31 />} />
        <Route path="/32" element={<Character32 />} />
        <Route path="/33" element={<Character33 />} />
        <Route path="/34" element={<Character34 />} />
        <Route path="/35" element={<Character35 />} />
        <Route path="/36" element={<Character36 />} />
        <Route path="/37" element={<Character37 />} />
        <Route path="/38" element={<Character38 />} />
        <Route path="/39" element={<Character39 />} />
        <Route path="/40" element={<Character40 />} />
        <Route path="/41" element={<Character41 />} />
        <Route path="/42" element={<Character42 />} />
        <Route path="/43" element={<Character43 />} />
        <Route path="/44" element={<Character44 />} />
        <Route path="/45" element={<Character45 />} />
        <Route path="/46" element={<Character46 />} />
        <Route path="/47" element={<Character47 />} />
        <Route path="/48" element={<Character48 />} />
        <Route path="/49" element={<Character49 />} />
        <Route path="/50" element={<Character50 />} />
        <Route path="/51" element={<Character51 />} />
        <Route path="/52" element={<Character52 />} />
        <Route path="/53" element={<Character53 />} />
        <Route path="/54" element={<Character54 />} />
        <Route path="/55" element={<Character55 />} />
        <Route path="/56" element={<Character56 />} />
        <Route path="/57" element={<Character57 />} />
        <Route path="/58" element={<Character58 />} />
        <Route path="/59" element={<Character59 />} />
        <Route path="/60" element={<Character60 />} />
        <Route path="/61" element={<Character61 />} />
        <Route path="/62" element={<Character62 />} />
        <Route path="/63" element={<Character63 />} />
        <Route path="/64" element={<Character64 />} />
        <Route path="/65" element={<Character65 />} />
        <Route path="/66" element={<Character66 />} />
        <Route path="/67" element={<Character67 />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
