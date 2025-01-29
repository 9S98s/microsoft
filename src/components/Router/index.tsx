import { BrouserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../../Pages/Home';

const Router = () => {
    return (
        <Router>
            <Routes>
                <Router path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default Router