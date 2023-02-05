import Link from "next/link";
import Image from "next/legacy/image";

export default function ProjectItem({ data }) {
  const title = data.properties.이름.title[0].plain_text;
  const githubLink = data.properties.Github.url;
  const youtubeLink = data.properties.youtube.url;
  const webSiteLink = data.properties.webSite.url;
  const description = data.properties.Text.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    let startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    let endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    const diffInMS = Math.abs(endDate - startDate);
    const results = diffInMS / (1000 * 60 * 60 * 24);

    return results;
  };

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        alt="cover image"
        width="100%"
        height="50%"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="my-4 text-xl">{description}</h3>
        {webSiteLink && (
          <Link
            className="hover:text-[#EC008B] dark:hover:text-[#EC008B]"
            href={webSiteLink}
          >
            {title} 바로 가기 ➡️
          </Link>
        )}
        <Link href={githubLink}>Github 바로 가기 ➡️</Link>
        {youtubeLink && (
          <Link
            className="hover:text-[#ff0000] dark:hover:text-[#ff0000]"
            href={youtubeLink}
          >
            Youtube 바로 가기 ➡️
          </Link>
        )}
        <p className="my-1">
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>
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
  );
}
