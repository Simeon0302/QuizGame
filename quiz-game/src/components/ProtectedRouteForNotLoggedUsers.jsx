import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserAuthContext } from './UserAuth';

function ProtectedRouteForNotLoggedUsers() {
    const { isAuth } = useContext(UserAuthContext);

    if (isAuth === null) return;

    return isAuth ? <Navigate to="/" /> : <Outlet />;
}

export default ProtectedRouteForNotLoggedUsers;