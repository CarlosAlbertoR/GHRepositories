import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { RootState, persistor } from "./store/store";
import Navbar from "./components/Navbar";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="mt-24">
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/home"
                element={user ? <Home /> : <Navigate to="/" replace={true} />}
              />
              <Route path="/" element={<Signup />} />
            </Routes>
          </div>
        </div>
      </Router>
    </PersistGate>
  );
}

export default App;
