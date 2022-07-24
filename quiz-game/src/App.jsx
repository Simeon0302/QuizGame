import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Navbar from './components/Navbar';
import PageNotFound from './pages/PageNotFound';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
