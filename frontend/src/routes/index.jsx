import{
    Routes, Route, BrowserRouter as Router
} from 'react-router-dom';

import { Home, BusesList, Map, StopsList, RoutesList} from '../pages';

const Approutes = () => {
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/buses" element={<BusesList />} />
                    <Route path="/stops" element={<StopsList />} />
                    <Route path='/routes' element={<RoutesList />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Approutes;