import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navBar";
import Contact from "../components/contact";
import Hero from "../components/hero";
import About from "../components/about";
import Footer from "../components/footer";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Strong Wealth Management Harrison, Arkansas </title>
        <meta name="description" content="Strong Wealth Management" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Akshar:wght@300;400;500;600;700&family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Navbar />

      <main>
        <Hero />
        <About />
      </main>
      <section className="form">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
