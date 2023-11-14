import Link from "next/link";
import classes from "./HomePage.module.css";
function HomePage() {
  return (
    <section className={classes.homePageSection}>
      <div className={classes.homePageContainer}>
        <h1>Welcome to the New Gammal Tech!</h1>
        <div className={classes.homePageButton}>
          <Link href="https://new.gammal.tech/home">Visit the homepage</Link>
        </div>
      </div>
    </section>
  );
}
export default HomePage;
