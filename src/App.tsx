import { Route, Routes } from 'react-router-dom';
import FooterBar from './components/Footer/Footer';
import AppToolBar from './components/Header/AppToolBar';
import Home from './pages/Home';
const App = () => {
  return (
    <>
      <AppToolBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <FooterBar />
    </>
  );
};

export default App;
