import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useProjectStore from "@/store/projectStore";
import Layout from "@/components/layouy";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/legacy/image";

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const projects = useProjectStore((state) => state.projects);
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState(null);

  useEffect(() => {
    // id와 projects가 모두 있을 때만 프로젝트를 찾음
    if (id && projects.length > 0) {
      const foundProject = projects.find((p) => p.id === id);
      setProject(foundProject);
      setIsLoading(false);
    }
  }, [id, projects]);

  // 로딩 중이거나 id가 아직 없는 경우
  if (isLoading || !id) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-xl">Loading...</div>
        </div>
      </Layout>
    );
  }

  // 프로젝트를 찾지 못한 경우
  if (!project) {
    router.push("/projects");
    return null;
  }
  const imgSrc = project.cover.file?.url || project.cover.external.url;
  const title = project.properties.이름.title[0].plain_text;
  const description = project.properties.Text.rich_text[0].plain_text;
  const tags = project.properties.Tags.multi_select;
  const start = project.properties.WorkPeriod.date.start;
  const end = project.properties.WorkPeriod.date.end;
  const githubLink = project.properties.Github.url;
  const youtubeLink = project.properties.youtube.url;
  const webSiteLink = project.properties.webSite.url;
  const func = project.properties.function.rich_text[0]?.plain_text || null;
  const trouble =
    project.properties.trouble.rich_text.length > 0
      ? project.properties.trouble.rich_text
          .map((text) => text.plain_text)
          .join("")
      : null;
  // 로컬 대체 이미지 경로 설정
  const localFallbackImage = `/images/${project.id}.png`; // 또는 .jpg 등 실제 확장자에 맞게 수정
  return (
    <Layout>
      <Head>
        <title>김혁진의 Portfolio! | {title}</title>
        <meta name="description" content={description || "Project Detail"} />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <div className="w-full mx-auto pt-28 container max-sm:px-4">
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <Image
              src={imgSrc || localFallbackImage}
              alt="cover image"
              width={100}
              height={50}
              layout="responsive"
              objectFit="cover"
              quality={100}
              onError={(e) => {
                // 이미지 로드 실패시 로컬 이미지로 대체
                e.target.src = localFallbackImage;
              }}
            />
          </div>
          <div className="flex flex-col justify-start min-h-screen mb-10 mt-8 max-sm:mt-4">
            <h1 className="text-2xl font-bold sm:text-4xl">{title}</h1>
            <div className="mt-8 text-lg text-primary max-sm:mt-4 max-sm:text-base">
              {description}
            </div>
            {func && (
              <div className="mt-8 max-sm:mt-4">
                <h2 className="text-xl font-bold mb-2 sm:mb-4">기능 구현</h2>
                <div className="text-lg text-primary max-sm:text-base">
                  {func.split("\n").map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>
              </div>
            )}
            {trouble && (
              <div className="mt-8 max-sm:mt-4">
                <h2 className="text-xl font-bold mb-2 sm:mb-4">트러블 슈팅</h2>
                <div className="text-lg text-primary max-sm:text-base">
                  {trouble.split("\n").map((line, index) => (
                    <div className="break-keep whitespace-pre-line" key={index}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* 프로젝트 링크들 */}
            <div className="mt-8 space-y-2 max-sm:mt-4">
              {webSiteLink && (
                <a
                  href={webSiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-[#EC008B] dark:hover:text-[#EC008B]"
                >
                  웹사이트 바로가기 ➡️
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  Github 바로가기 ➡️
                </a>
              )}
              {youtubeLink && (
                <a
                  href={youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-[#ff0000] dark:hover:text-[#ff0000]"
                >
                  Youtube 바로가기 ➡️
                </a>
              )}
            </div>
            {/* 작업 기간 */}
            {start && end && (
              <p className="mt-4">
                작업기간: {start} ~ {end}
              </p>
            )}
            {/* 태그 */}
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className="px-2 py-1 text-sm rounded-md bg-sky-200 dark:bg-sky-700"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
