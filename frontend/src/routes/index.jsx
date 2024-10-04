import {
  Routes, Route, BrowserRouter as Router
} from 'react-router-dom';

import { Home, Map, BusesList} from '../pages';

const Approutes = () => {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Home/>}> </Route>
            {/* list buses */}
            <Route path="/buses" element={<BusesList/>}></Route>


            <Route path="/stations" element={<Home/>}></Route>
            <Route path="/routes" element={<Home/>}></Route>
            <Route path="/map" element={<Map/>}></Route>
            <Route path="*" element={<Home/>}></Route>
          </Routes>
      </Router>
    </div>
  )
}
export default Approutes;
