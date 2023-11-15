import CoursesCard from "./Card/CoursesCard";
import classes from "./CoursesPage.module.css";
const DummyCourses = [
  {
    id: "1",
    title: "C Programming",
    price: "77",
    img: 'url("https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/b1acc6e1e4f9b62ef15105fb0e737eca.jpeg?client_id=64f9d95d01ac55bf5644ea7a&width=400&height=0")',
  },
  {
    id: "2",
    title: "C++ Programming",
    price: "77",
    img: 'url("https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/b1acc6e1e4f9b62ef15105fb0e737eca.jpeg?client_id=64f9d95d01ac55bf5644ea7a&width=400&height=0")',
  },
  {
    id: "3",
    title: "Data Structures",
    price: "77",
    img: 'url("https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/b1acc6e1e4f9b62ef15105fb0e737eca.jpeg?client_id=64f9d95d01ac55bf5644ea7a&width=400&height=0")',
  },
  {
    id: "4",
    title: "Algorithms",
    price: "77",
    img: 'url("https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/b1acc6e1e4f9b62ef15105fb0e737eca.jpeg?client_id=64f9d95d01ac55bf5644ea7a&width=400&height=0")',
  },
  {
    id: "5",
    title: "OOP",
    price: "77",
    img: 'url("https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/b1acc6e1e4f9b62ef15105fb0e737eca.jpeg?client_id=64f9d95d01ac55bf5644ea7a&width=400&height=0")',
  },
  {
    id: "6",
    title: "Entrepreneurship",
    price: "77",
    img: 'url("https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/b1acc6e1e4f9b62ef15105fb0e737eca.jpeg?client_id=64f9d95d01ac55bf5644ea7a&width=400&height=0")',
  },
];
function CoursesPage() {
  return (
    <section className={classes.CoursesPageSection}>
      <div className={classes.CoursesPageCoreSectionDiv}>
        <div className={classes.CoursesPageCoreSectionDiv1}>
          <h2>Core Courses</h2>
        </div>
        <div className={classes.CoursesPageCoreSectionCardContainer}>
          <ul>
            {DummyCourses.map((course) => (
              <CoursesCard
                key={course.id}
                id={course.id}
                title={course.title}
                img={course.img}
                price={course.price}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
export default CoursesPage;
