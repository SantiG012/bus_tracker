import{
    Routes, Route, BrowserRouter as Router
} from 'react-router-dom';

import { Home, BusesList, Map, StopsList} from '../pages';

const Approutes = () => {
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/buses" element={<BusesList />} />
                    <Route path="/stops" element={<StopsList />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Approutes;