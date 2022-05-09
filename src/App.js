import './App.css';
import HomePage from './pages/HomePage';
import {Routes, Route} from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import Header from './components/header/Header';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/:slug' element={<ProductListPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
