import { Layout } from "@components/Layout.jsx";
import { Login } from "@/src/pages/Login.jsx";
import { ProfilePage } from './pages/ProfilePage';
import { TripDetail } from "@/src/pages/TripDetail.jsx";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "@/src/pages/HomePage.jsx";
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { LibraryPage } from "./pages/LibraryPage";

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
    </Route>
    <Route path="/auth/login" element={<Login />} />
    <Route path='/profile' element={<ProfilePage />} />
    <Route path='/trip/:id' element={<TripDetail />} />
    <Route path='/contact' element={<ContactPage />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='/library' element={<LibraryPage />} />
  </Routes>
);

export default App;
