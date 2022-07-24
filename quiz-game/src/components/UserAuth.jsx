import React, {createContext, useState} from "react";

export const UserAuthContext = createContext(null);

export function UserAuthProvider({children}) {
    const [userId, setUserId] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    function Login(username, password) {
        setIsAuth(true);
        console.log('User is logged in');
    }

    function Logout() {
        setIsAuth(false);
        console.log('User is logged out');
    }

    const data = {
        userId,
        setUserId,
        isAuth,
        setIsAuth,
        Login,
        Logout
    }

    return (
        <UserAuthContext.Provider value={data}>
            {children}
        </UserAuthContext.Provider>
    )
}