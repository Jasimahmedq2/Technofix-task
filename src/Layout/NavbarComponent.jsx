import { Navbar, NavbarBrand } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar
      style={{
        display: "block",
      }}
      className="sm:px-8"
    >
      <NavbarBrand>
        <Link to="/">
          <p className="font-bold uppercase">Technofix</p>
        </Link>
      </NavbarBrand>
    </Navbar>
  );
}
