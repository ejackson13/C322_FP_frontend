import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";

// adapted from example NavBar class

const NavBar = () => {
  return (
    <>
      <header>
        <Link className={styles.logo} href="/">Rental Service</Link>

        <input type="checkbox" id="menu-bar" className={styles.menubar}></input>
        <label for="menu-bar">menu</label>

        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/list">List Item</Link>
            </li>
            <li>
              <Link href="/feedback">View Feedback</Link>
            </li>
            <li>
              <Link href="/return">View Items Rented</Link>
            </li>
            <li>
              <Link href="/payment">View Order History</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
