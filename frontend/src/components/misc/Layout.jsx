import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Header/Navbar";

const Layout = () => (
  <div>
    <Navbar />
    <main>
      <Outlet />
    </main>
  </div>
);

export default Layout;
