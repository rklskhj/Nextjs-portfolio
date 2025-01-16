import { useState, useEffect } from "react";
import Image from "next/legacy/image";
import dynamic from "next/dynamic";

// 클라이언트 사이드에서만 렌더링되도록 설정
const ProjectItem = ({ data }) => {
  const [mounted, setMounted] = useState(false);
  const [workPeriod, setWorkPeriod] = useState("");

  const title = data.properties.이름.title[0].plain_text;
  const githubLink = data.properties.Github.url;
  const youtubeLink = data.properties.youtube.url;
  const webSiteLink = data.properties.webSite.url;
  const description = data.properties.Text.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;

  useEffect(() => {
    setMounted(true);

    if (start && end) {
      const startDate = new Date(start);
      const endDate = new Date(end);
      const diffInMS = Math.abs(endDate - startDate);
      const days = Math.ceil(diffInMS / (1000 * 60 * 60 * 24));

      setWorkPeriod(`작업기간 : ${start} ~ ${end} (${days}일)`);
    }
  }, [start, end]);

  if (!mounted) return null; // 클라이언트 사이드 렌더링 전까지는 아무것도 보여주지 않음

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        alt="cover image"
        width={100}
        height={50}
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{title}</h1>
          <h3 className="my-4 text-xl break-keep">{description}</h3>
        </div>
        {/* {webSiteLink && (
          <a
            className="hover:text-[#EC008B] dark:hover:text-[#EC008B]"
            href={webSiteLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title} 바로 가기 ➡️
          </a>
        )}
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          Github 바로 가기 ➡️
        </a>
        {youtubeLink && (
          <a
            className="hover:text-[#ff0000] dark:hover:text-[#ff0000]"
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube 바로 가기 ➡️
          </a>
        )} */}
        <div className="flex flex-col">
          <p className="my-1">{workPeriod}</p>
          <div className="flex items-start mt-2">
            {tags &&
              tags.map((aTag) => (
                <h1
                  className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
                  key={aTag.id}
                >
                  {aTag.name}
                </h1>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// 클라이언트 사이드에서만 렌더링되도록 export
export default dynamic(() => Promise.resolve(ProjectItem), {
  ssr: false,
});
