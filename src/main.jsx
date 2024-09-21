import '@styles/custom.css';
import '@styles/tailwind.css';

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';
import {BrowserRouter} from "react-router-dom";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {Toaster} from "@components/ui/toaster.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(<GoogleOAuthProvider
    clientId="1035405520449-737opod5dblop954gvltb6btkaqbut54.apps.googleusercontent.com">
    <Toaster/>
    <ToastContainer />
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</GoogleOAuthProvider>);
