import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Logout from './pages/Logout';
import Navbar from './components/Navbar/Navbar';
import PageNotFound from './pages/PageNotFound';
import Game from './pages/Game';
import GameResults from './pages/GameResults';
import ProtectedRouteForLoggedUsers from './components/ProtectedRouteForLoggedUsers';
import ProtectedRouteForNotLoggedUsers from './components/ProtectedRouteForNotLoggedUsers';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route element={<ProtectedRouteForNotLoggedUsers />} >
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route element={<ProtectedRouteForLoggedUsers />} >
                    <Route path="/game/:channel/:gameId" element={<Game />} />
                    <Route path="/game/results/:gameId" element={<GameResults />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/logout" element={<Logout />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
