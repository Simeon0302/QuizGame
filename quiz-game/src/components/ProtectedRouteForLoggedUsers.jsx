import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserAuthContext } from './UserAuth';

function ProtectedRouteForLoggedUsers() {
    const { isAuth } = useContext(UserAuthContext);

    if(isAuth === null) return;

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRouteForLoggedUsers;