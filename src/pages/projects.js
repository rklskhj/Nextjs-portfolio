import Layout from "@/components/layouy";
import ProjectItem from "@/components/projects/project-item";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import { motion } from "framer-motion";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import useProjectStore from "../store/projectStore";

export default function Projects({ projects }) {
  const setProjects = useProjectStore((state) => state.setProjects);
  const storedProjects = useProjectStore((state) => state.projects);

  useEffect(() => {
    // store에 데이터가 없을 때만 새로운 데이터를 저장
    if (!storedProjects || storedProjects.length === 0) {
      setProjects(projects.results);
    }
  }, [projects]);

  // store의 데이터를 사용
  const projectsToDisplay =
    storedProjects.length > 0 ? storedProjects : projects.results;

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
        <div className="container flex flex-col items-center justify-start min-h-screen mx-auto pt-32 mb-12 gap-3 max-sm:pt-24 max-sm:gap-6">
          <h1 className="text-2xl font-bold sm:text-4xl">
            총 프로젝트 :
            <span className="pl-4 text-blue-500">
              {projectsToDisplay.length}
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 m-4 gap-8 max-sm:px-4 max-sm:m-0">
            {projectsToDisplay.map((aProject) => (
              <Link
                href={`/projects/${aProject.id}`}
                key={aProject.id}
                className="block"
              >
                <ProjectItem data={aProject} />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}

// 정적 생성으로 변경하여 빌드 시 페이지 생성
export async function getStaticProps() {
  const options = {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Notion-Version": "2022-06-28",
    },
  };

  try {
    const response = await axios.post(
      `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      {},
      options
    );
    console.log(response.data.results);
    return {
      props: {
        projects: response.data,
      },
      revalidate: 60 * 60, // 1시간마다 재생성
    };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return {
      props: {
        projects: { results: [] },
      },
      revalidate: 60, // 에러 발생 시 1분 후 재시도
    };
  }
}
