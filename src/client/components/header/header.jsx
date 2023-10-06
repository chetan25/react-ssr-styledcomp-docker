import React from "react";
import DesktopMenu from "../menu/desktop";
import MobileMenu from "../menu/mobile";
import styles from "./header.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.desktop}>
        <DesktopMenu />
      </div>
      <div className={styles.mobile}>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Header;
