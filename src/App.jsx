import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="page-container">
        <Header />

        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
