import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <>
      <Head>
        <title>Shane Le | Front End Developer</title>
        <meta name="description" content="Shane Le Home Page" />
      </Head>
      <Layout>
        <Section grid>
          <Hero />
        </Section>
        <Skills />
        <Projects />
      </Layout>
    </>
  );
};

export default Home;
