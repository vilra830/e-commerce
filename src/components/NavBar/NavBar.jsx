import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav>
      <NavLink to={"/"}>Home </NavLink>
      <NavLink to={"/products"}>Products </NavLink>
    </nav>
  );
};

export default NavBar;
