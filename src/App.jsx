import Feature from '@components/Feature';
import Footer from '@components/Footer';
import logo from '@images/logo.png';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "@/src/pages/HomePage.jsx";
import {Layout} from "@components/Layout.jsx";
import {Login} from "@/src/pages/Login.jsx";
import { ProfilePage } from './pages/ProfilePage';
import {TripDetail} from "@/src/pages/TripDetail.jsx";
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { Admin } from './pages/admin/Admin';
import {LibraryPage} from "@/src/pages/LibraryPage.jsx";
import { ListLocation } from './pages/admin/ListLocation';
import { DetailsLocation } from './pages/admin/DetailsLocation';
import { ListCurrencies } from './pages/admin/ListCurrencies';

const features = [
  {
    title: 'npm run start',
    description: 'Run the React app in development mode with live reloading.',
  },
  {
    title: 'npm run build',
    description: 'Bundles the React app for deployment in production environment.',
  },
  {
    title: 'npm run inline',
    description: 'Inline all CSS and JS in a single minfied file.',
  },
];

const App = () => (
    <Routes >
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path='/profile/:username' element={<ProfilePage />} />
        <Route path='/contact' element={<ContactPage />} />
            <Route path='/about' element={<AboutPage/>}/>
        </Route>
        <Route path="/auth/login" element={<Login />}/>
      <Route path='/trip/:id' element={<TripDetail />} />

      <Route path='/admin' element={<Admin/>}>
      <Route index element={<ListLocation/>}/>
        <Route index path='/admin/location' element={<ListLocation/>}/>
        <Route path='/admin/location/:id' element={<DetailsLocation/>}/>
        <Route path='/admin/currency' element={<ListCurrencies  />}/>
      </Route>
    </Routes>
);

export default App;
