import classes from "./CoursesCard.module.css";
function CoursesCard(props) {
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <div className={classes.main1}>
          <div
            className={classes.main1A}
            style={{ backgroundImage: props.img }}
          >
            <div className={classes.access}>
              <div className={classes.access1}>
                <span>Access for</span>&nbsp;<span>4 months</span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.main2}>
          <div className={classes.main2Title}>
            <h3>{props.id}. {props.title}</h3>
          </div>
          <div className={classes.main2B}>
            <div className={classes.main2BEnroll}>
              <a href="/course?courseid=c-programming">
                <span>Enroll</span>
              </a>
            </div>
            <div className={classes.main2BEPrice}>
              <span>
                <strong>$ {props.price} USD </strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CoursesCard;
