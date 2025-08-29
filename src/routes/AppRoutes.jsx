import { Routes, Route } from "react-router";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
