import { useEffect } from "react";
import { useRouter } from "next/router";
import useProjectStore from "@/store/projectStore";
import Layout from "@/components/layouy";
import Head from "next/head";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const projects = useProjectStore((state) => state.projects);

  // store에서 현재 프로젝트 찾기
  const project = projects.find((p) => p.id === id);

  // projects가 비어있거나 해당 프로젝트를 찾을 수 없으면 목록 페이지로 리다이렉트
  useEffect(() => {
    if (projects.length === 0 || !project) {
      router.push("/projects");
    }
  }, [projects.length, project, router]);

  // 프로젝트를 찾을 수 없는 경우 로딩 표시
  if (!project) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-xl">Loading...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>
          김혁진의 Portfolio! |{" "}
          {project.properties.이름?.title[0]?.plain_text || "프로젝트 상세"}
        </title>
        <meta
          name="description"
          content={
            project.properties.Text?.rich_text[0]?.plain_text ||
            "Project Detail"
          }
        />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <div className="flex flex-col items-center justify-start min-h-screen px-3 mb-10">
          <h1 className="text-2xl font-bold sm:text-4xl">
            {project.properties.이름?.title[0]?.plain_text}
          </h1>
          <div className="mt-8 text-lg">
            {project.properties.Text?.rich_text[0]?.plain_text}
          </div>
          {/* 프로젝트 링크들 */}
          <div className="mt-4 space-y-2">
            {project.properties.webSite?.url && (
              <a
                href={project.properties.webSite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#EC008B] dark:hover:text-[#EC008B]"
              >
                웹사이트 바로가기 ➡️
              </a>
            )}
            {project.properties.Github?.url && (
              <a
                href={project.properties.Github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                Github 바로가기 ➡️
              </a>
            )}
            {project.properties.youtube?.url && (
              <a
                href={project.properties.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#ff0000] dark:hover:text-[#ff0000]"
              >
                Youtube 바로가기 ➡️
              </a>
            )}
          </div>
          {/* 작업 기간 */}
          {project.properties.WorkPeriod?.date && (
            <p className="mt-4">
              작업기간: {project.properties.WorkPeriod.date.start} ~{" "}
              {project.properties.WorkPeriod.date.end}
            </p>
          )}
          {/* 태그 */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.properties.Tags?.multi_select.map((tag) => (
              <span
                key={tag.id}
                className="px-2 py-1 text-sm rounded-md bg-sky-200 dark:bg-sky-700"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
