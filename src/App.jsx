import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { Outlet } from 'react-router-dom';
// import ScrollToTop from './component/ScrollToTop';

function App() {
  return (
    <>
      <main className="page-container">
        <Header />
        {/* <ScrollToTop /> */}
        <div className="container overlay">
          <Outlet />
        </div>

        <Footer />
      </main>
    </>
  );
}

export default App;
