import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ErrorPage } from './components/ErrorPage';
import { SharedLayout } from './components/SharedLayout';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Resume } from './pages/Resume';
import { Portfolio } from './pages/Portfolio';

function App() {
  return (
    <Routes>
      
      <Route path='/' element={<SharedLayout />}>
      <Route index element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/resume' element={<Resume />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/contact' element={<Contact />}/>
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
