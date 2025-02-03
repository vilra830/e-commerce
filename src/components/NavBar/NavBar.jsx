import { NavLink } from "react-router";
import classes from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      <NavLink  to={"/"} className={({ isActive}) => isActive ? `{classes.navlink} {classes.active}` : classes.navlink} >Home </NavLink>
      <NavLink to={"/products"} className={({ isActive}) => isActive ? `{classes.navlink} {classes.active}` : classes.navlink}  >Products </NavLink>
      <NavLink  to={"/cart"} className={({ isActive}) => isActive ? `{classes.navlink} {classes.active}` : classes.navlink} >Cart</NavLink>

    </nav>
  );
};

export default NavBar;