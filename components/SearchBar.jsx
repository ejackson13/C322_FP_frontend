import { useState } from "react";
//import styles from "../styles/NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <header>
        <Link className={styles.logo} href="/">logo</Link>

        <input type = "text"></input>
      </header>
    </>
  );
};

export default NavBar;
