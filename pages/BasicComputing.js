import Head from "next/head";
import CntctHead from "../Components/CntctHead.jsx";

import Header from "../Components/Header.jsx";
import Script from "next/script.js";

import Footer from "../Components/Footer.jsx";
import Computing from "../Components/Computing";

export default function Course1() {
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
          <title>Basic Computing</title>
        <meta name="title" content="Basic Computing" />
<meta name="description" content="Offering IT Courses in Sheikhupura. Courses we offer Graphic designing, web development, CMS Development, freelancing, and much more" />
<meta name="keywords" content="riss institute, freelancing course in sheikhupura, best IT Institute in Seikhupura, IT Institute, IT Courses, Computer Courses, RISS institute, Web development course, IT institute in Sheikhupura, Basic Computing Course, Virtual assistant Course, CMS (WordPress) Course, Graphic designing Course, Web Development Course, Freelancing Course, Digital Marketing  Course, Android app development Course, Desktop app development Course, IT Academy, Computer Academy" />
<meta name="robots" content="index, follow" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="language" content="English" />
<meta name="revisit-after" content="1 days" />
<meta name="author" content="RISS Institute" />

      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossorigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossorigin="anonymous"
      />
      <CntctHead />
      <Header />
      <br />
      <br />
      <br />
      <Computing />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}
