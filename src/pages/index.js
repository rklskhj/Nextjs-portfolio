import Layout from "@/components/layouy";
import Head from "next/head";
import About from "@/components/home/about";

function Home() {
  return (
    <Layout>
      <Head>
        <title>퍼플아이오 과제 김혁진</title>
        <mate name="description" content="합격가자" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <About />
        </div>
      </section>
    </Layout>
  );
}
export default Home;
