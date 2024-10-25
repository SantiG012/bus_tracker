import {
  Routes, Route, BrowserRouter as Router
} from 'react-router-dom';

import { Home, Map, BusPage, RoutesPage, StationPage, Dashboard, Login} from '../pages';

const Approutes = () => {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/login" element={<Login/>}> </Route>
            <Route path="/buses" element={<BusPage/>}></Route>
            <Route path="/stations" element={<StationPage/>}></Route>
            <Route path="/routes" element={<RoutesPage/>}></Route>
            <Route path="/map" element={<Map/>}></Route>
            <Route path="*" element={<Home/>}></Route>
          </Routes>
      </Router>
    </div>
  )
}
export default Approutes;


// import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
// import { Home, Map, BusListPage, BusCreatePage, BusEditPage, BusDetailPage } from '../pages';

// const Approutes = () => {
//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Home />} />
//           {/* Listado de buses */}
//           <Route path="/buses" element={<BusListPage />} />
//           {/* Crear un nuevo bus */}
//           <Route path="/buses/create" element={<BusCreatePage />} />
//           {/* Editar un bus existente */}
//           <Route path="/buses/edit/:id" element={<BusEditPage />} />
//           {/* Ver los detalles de un bus */}
//           <Route path="/buses/:id" element={<BusDetailPage />} />
//           {/* Otras rutas */}
//           <Route path="/stations" element={<Home />} />
//           <Route path="/routes" element={<Home />} />
//           <Route path="/map" element={<Map />} />
//           <Route path="*" element={<Home />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default Approutes;
