import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import { Layout } from "../layout/Layout";
import Head from "next/head";
import Medier from "../components/Medier/Medier";
import Linkedin from "../components/Linkedin/Linkedin";

const Home = () => {
  return (
    <>
      <Head>
        <title>Andreas Broch - Online Portfolio - Front Page</title>
      </Head>
      <Layout>
        <section className="relative mx-md">
          <Hero />
          <BgAnimation />
        </section>
        <Technologies />
        <Projects />
        <Medier />
        <Linkedin />
      </Layout>
    </>
  );
};

export default Home;
