import { Routes, Route } from 'react-router-dom';
import './components/NavBar';
import OpenOrder from "./pages/OpenOrder";
import CloseOrder from "./pages/CloseOrder";

function App() {
  return (
      <>
          <Routes>
              <Route path="/openOrder" element={<OpenOrder />} />
              <Route path="/closeOrder" element={<CloseOrder />} />
          </Routes>
      </>
  );
}

export default App;
