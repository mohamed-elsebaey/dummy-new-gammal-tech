import Head from "next/head";
import CoursesPage from "../../components/navPages/courses/CoursesPage";

function Courses() {
  return (
    <>
      <Head>
        <title>Gammal Tech - Courses </title>
        <meta name="description" content="Core Courses and Elective Courses." />
      </Head>
      <CoursesPage />
    </>
  );
}
export default Courses;
