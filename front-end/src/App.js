import { Routes, Route } from 'react-router-dom';
import './components/NavBar';
import OpenOrder from "./pages/OpenOrder";
import CloseOrder from "./pages/CloseOrder";
import OrderHistory from "./pages/OrderHistory";

function App() {
  return (
      <>
          <Routes>
                  <Route path="/openOrder" element={<OpenOrder />} />
                  <Route path="/closeOrder" element={<CloseOrder />} />
                  <Route path="/orderHistory" element={<OrderHistory />} />
          </Routes>
      </>
  );
}

export default App;
