import classes from "./HomePage.module.css";
function HomePage() {
  return (
    <section className={classes.homePageSection}>
      <div className={classes.homePageContainer}>
        <h1>Welcome to the New Gammal Tech!</h1>
      </div>
    </section>
  );
}
export default HomePage;
