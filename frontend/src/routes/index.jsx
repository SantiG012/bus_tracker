import{
    Routes, Route, BrowserRouter as Router
} from 'react-router-dom';

import { Home, BusesList, Map } from '../pages';

const Approutes = () => {
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/buses" element={<BusesList />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Approutes;