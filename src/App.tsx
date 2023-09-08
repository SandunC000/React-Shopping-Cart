import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { About } from './pages/About';
import { Navigationbar } from './components/Navigationbar';
import { ShoppingCartProvider } from './context/ShopingCartContext';

function App() {
  return (
    <>
    <ShoppingCartProvider>
    <Navigationbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
