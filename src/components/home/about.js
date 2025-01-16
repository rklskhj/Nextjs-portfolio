/* eslint-disable react/no-unescaped-entities */
import Animation from "./animation";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="font-bold title-font sm:text-4xl text-3xl mb-4 text-gray-900">
          console.log(
          <span className="text-[#da8f51] dark:text-[#F3A15E]">
            "김혁진의 Portfolio!"
          </span>
          )
          <br className="hidden lg:inline-block" />
          <span className="text-2xl">만나서 반가워요👋</span>
        </h1>
        <p className="mb-8 leading-relaxed break-keep">
          음악과 개발, 두 가지 열정을 가진 2년차 주니어 개발자 김혁진입니다.
          실용음악과 보컬리스트에서 개발자로 전향한 후, 지난 2년간 다양한
          프로젝트를 통해 성장해왔습니다. 음악에서 배운 '조화로운 협업'의 가치를
          개발 현장에서도 실천하고 있습니다. 새로운 기술을 배우는 것을 즐기며,
          동료들과 지식을 나누고 함께 성장하는 과정에서 큰 보람을 느낍니다. 클린
          코드와 사용자 경험 개선에 대한 끊임없는 고민을 통해 더 나은 서비스를
          만들어가는 것이 목표입니다. 음악처럼 아름다운 하모니를 이루는 코드를
          작성하고, 팀과 함께 성장하는 개발자로 계속해서 발전해 나가고 싶습니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">
            PORTFOLIO GO!
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Animation />
      </div>
    </>
  );
}
