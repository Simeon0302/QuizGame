import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserAuthProvider } from './components/UserAuth';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <UserAuthProvider>
            <App />
        </UserAuthProvider>
    </React.StrictMode>
);
