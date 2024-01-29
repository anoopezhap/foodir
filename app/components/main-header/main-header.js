import Link from "next/link";
import logoImg from "@/assets/logo.png";

import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} priority />
          BYD Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <NavLink />
          </ul>
        </nav>
      </header>
    </>
  );
}
