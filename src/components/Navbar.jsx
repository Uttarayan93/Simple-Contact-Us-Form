import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.head}>
      <div>
        <img src=".\images\Frame21.png" alt="logo" />
      </div>
      <div className={styles.links}>
        <a href="https://www.google.co.in/" target="_blank" rel="noreferrer">
          HOME
        </a>
        <a href="https://www.google.co.in/" target="_blank" rel="noreferrer">
          ABOUT
        </a>
        <a href="https://www.google.co.in/" target="_blank" rel="noreferrer">
          CONTACT
        </a>
      </div>
    </div>
  );
}

export default Navbar;
