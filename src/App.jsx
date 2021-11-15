import "./App.css";
import RouteList from "./routes/MainRoutes";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "@material-tailwind/react/tailwind.css";

const isAuth = false;

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-14">
        <Routes>
          {RouteList.map((el, index) => (
            <Route
              path={el.path}
              exact={el.exact ? true : false}
              element={
                el.permission ? (
                  isAuth ? (
                    el.component
                  ) : (
                    <Navigate to="/" />
                  )
                ) : (
                  el.component
                )
              }
              key={index}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
