import Image from "next/image";
import Logo from "../../assets/Play.png";

import classes from "./NavBar.module.css";
import "@fontsource/quicksand";
import Link from "next/link";

export default function NavBar() {
  return (
    <header>
      <div className={classes.Container}>
        <Link href={"/"}>
          <Image src={Logo} alt="Logo" className={classes.Logo} />
        </Link>
      </div>
    </header>
  );
}
