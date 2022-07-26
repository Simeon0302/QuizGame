import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserAuthContext } from './UserAuth';

function ProtectedRouteForLoggedUsers() {
    const { isAuth } = useContext(UserAuthContext);

    return isAuth ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRouteForLoggedUsers;