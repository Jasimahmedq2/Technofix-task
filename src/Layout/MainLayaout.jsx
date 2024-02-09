import { Outlet } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";

const MainLayaout = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="pt-6 sm:pt-12">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayaout;
