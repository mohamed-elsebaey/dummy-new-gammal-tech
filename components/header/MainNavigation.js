import Link from "next/link";
import GammalTechLogo from "./GammalTechLogo";
import classes from "./MainNavigation.module.css";
import Button from "../ui/Button";
import { useState } from "react";

function MainNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const changShowHandler = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };
  return (
    <section className={classes.headerSection}>
      <div className={classes.header}>
        <Link href="/">
          <GammalTechLogo />
        </Link>
        <nav>
          <div className={classes.menu} onClick={changShowHandler}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul
            className={menuOpen ? classes.open : ""}
            onClick={changShowHandler}
          >
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <Button>Sign in</Button>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default MainNavigation;
