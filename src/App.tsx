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
import Profile from "./pages/Profile";
import MyRepositories from "./pages/MyRepositories";
import UserDetail from "./pages/UserDetail";

function App() {
  const user = useSelector((state: RootState) => state.user.user);
  const selectedUser = useSelector(
    (state: RootState) => state.topUser
  ).selectedTopUser;

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
              <Route
                path="/user"
                element={
                  selectedUser ? (
                    <UserDetail />
                  ) : (
                    <Navigate to="/home" replace={true} />
                  )
                }
              />
              <Route
                path="/my-repositories"
                element={
                  user ? <MyRepositories /> : <Navigate to="/" replace={true} />
                }
              />
              <Route
                path="/profile"
                element={
                  user ? <Profile /> : <Navigate to="/" replace={true} />
                }
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
