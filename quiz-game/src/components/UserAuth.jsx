import React, {createContext, useState, useEffect} from "react";
import axios from "../scripts/axios";

export const UserAuthContext = createContext(null);

export function UserAuthProvider({children}) {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if(localStorage.getItem("Token") !== null) {
            setIsAuth(true);
        }
    }, [])

    function Register(username, password) {
        axios.post("/api/accounts/register/", {username: username, password: password})
            .then((res) => {
                localStorage.setItem("Token", res.data.token);
                localStorage.setItem("Username", res.data.username);
                setIsAuth(true);
                console.log("Successfully registered");
            })
            .catch((e) => {
                console.log(e);
            })
    }

    function Login(username, password) {
        axios.post("/api/accounts/login/", {username: username, password: password})
            .then((res) => {
                console.log(res.data);
                localStorage.setItem("Token", res.data.token);
                localStorage.setItem("Username", res.data.username);
                setIsAuth(true);
                console.log("Successfully logged in");
            })
            .catch((e) => {
                console.log(e);
            })
    }

    function Logout() {
        axios.defaults.headers.common.Authorization = `Token ${localStorage.getItem("Token")}`;
        axios.get("/api/accounts/logout/")
            .then((res) => {
                setIsAuth(false);
                localStorage.clear();
                console.log("Successfully logged out");
                axios.defaults.headers.common = {};
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const data = {
        username: localStorage.getItem("Username"),
        isAuth,
        setIsAuth,
        Register,
        Login,
        Logout
    }

    return (
        <UserAuthContext.Provider value={data}>
            {children}
        </UserAuthContext.Provider>
    )
}