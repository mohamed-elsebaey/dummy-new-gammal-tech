import Head from "next/head";
import HomePage from "../components/navPages/HomePage";

function Home() {
  return (
    <>
      <Head>
        <title>Gammal Tech - Arabic Programming Courses - كورسات برمجة</title>
        <meta
          name="description"
          content="Online computer programming courses in Arabic and online computer science courses in a fun and easy style for native Arabic speakers."
        />
      </Head>
      <HomePage />
    </>
  );
}
export default Home;
