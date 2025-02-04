import { NavLink } from "react-router";
import classes from "./NavBar.module.scss";

const NavBar = () => {
  return (

    <div className={classes.wrapper}>
      <img src="src\images\5.png" alt="logo"/>
    <nav className={classes.navbar}>
      
      <NavLink  to={"/"} className={classes.navlink} >Home </NavLink>
      <NavLink to={"/products"} className={classes.navlink}  >Food Menu </NavLink>
      <NavLink  to={"/cart"} className={classes.navlink} >Cart</NavLink>

    </nav>
    </div>
  );
};

export default NavBar;