import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserAuthContext } from './UserAuth';

function ProtectedRouteForNotLoggedUsers() {
    const { isAuth } = useContext(UserAuthContext);

    return isAuth ? <Navigate to="/" /> : <Outlet />;
}

export default ProtectedRouteForNotLoggedUsers;