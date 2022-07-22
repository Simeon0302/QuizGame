import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Register';
import Navbar from './components/Navbar';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
