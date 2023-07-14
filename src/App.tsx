import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { RootState } from "./store/store";

function App() {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/" replace={true} />}
        />
        <Route path="/" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
