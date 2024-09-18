import Feature from '@components/Feature';
import Footer from '@components/Footer';
import logo from '@images/logo.png';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "@/src/pages/HomePage.jsx";

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
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/test' element={<HomePage />} />
    </Routes>
);

export default App;
