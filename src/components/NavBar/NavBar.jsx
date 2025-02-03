import { NavLink } from "react-router";
import classes from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      <NavLink  to={"/"} className={classes.navlink} >Home </NavLink>
      <NavLink to={"/products"} className={classes.navlink}  >Food Menu </NavLink>
      <NavLink  to={"/cart"} className={classes.navlink} >Cart</NavLink>

    </nav>
  );
};

export default NavBar;