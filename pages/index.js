import Head from "next/head";
import CntctHead from "../Components/CntctHead.jsx";
import Courses from "../Components/Courses.jsx";

import Header from "../Components/Header.jsx";
import Hero from "../Components/Hero.jsx";
import Question from "../Components/Question.jsx";
import QuestionForYou from "../Components/QuestionForYou.jsx";
import Working from "../Components/Working.jsx";
import Testemonial from "../Components/Testemonial";
import Motivation from "../Components/Motivation.jsx";
import Footer from "../Components/Footer.jsx";
import Script from 'next/script'
export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        <script
          src="//code.tidio.co/qazxp2xozlaqvxetprfduy9zxjw5zl6o.js"
          async
        ></script>
      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" />


      <CntctHead />
      <Header />
      <Hero />
      <div id="quest">
        <Question />
      </div>
      <br className="br-hide" />
      <br className="br-hide" />
      <br className="br-hide" />
      <br className="br-hide" />
      <br className="br-hide" />
      <br className="br-hide" />
      <br className="br-hide" />
      <br className="br-hide" />
      <br className="br-hide" />
      <Courses />
      <QuestionForYou />
      <Working />
      <Testemonial />
      <Motivation />
      <Footer />
    </>
  );
}
