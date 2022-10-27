import NavBar from "./NavBar";
import classes from "./Layout.module.css";

export default function Layout(props) {
  return (
    <div>
      <NavBar />
      <main className={classes.section}>{props.children}</main>
    </div>
  );
}
