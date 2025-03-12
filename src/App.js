import { Route, Routes } from "react-router";
import "./App.css";
import { NavBar } from "./components/HomePage/Navbar";
import { routerConfig } from "./routing/routerConfig";
import { LoginRedirect } from "./routing/LoginRedirect";
import { GuardedRoutes } from "./routing/GuardedRoute";
import { RegisterPage } from "./pages/RegisterPage";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginRedirect />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<GuardedRoutes />}>
          {routerConfig.map((route) => {
            return (
              <Route key={route.name} path={route.path} element={route.page} />
            );
          })}
        </Route>
      </Routes>
    </>
  );
};

export default App;
