import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export default function NavbarComponent() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit uppercase">Technofix</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            add user
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
