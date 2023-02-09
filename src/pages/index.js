import Layout from "@/components/layouy";
import Head from "next/head";
import About from "@/components/home/about";
import { motion } from "framer-motion";

function Home() {
  return (
    <Layout>
      <Head>
        <title>김혁진의 Portfolio!</title>
        <meta name="description" content="Portfolio!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <About />
          </div>
        </section>
      </motion.div>
    </Layout>
  );
}
export default Home;
