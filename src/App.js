import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import HomeScreen from "./screens/HomeScreen";
import OrderScreen from "./screens/OrderScreen";

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <HomeScreen />
            </>
          }
        ></Route>
        <Route path="/order" element={<OrderScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
