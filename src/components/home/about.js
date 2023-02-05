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
          국제예술대학교 실용음악과 보컬전공을 졸업해 음악의 꿈을 좇다 개발이란
          매력에 빠져 커리어 전환까지 꿈꾸게 된 신입 개발자 김혁진입니다! 개발을
          공부하면서 가장 중요한건 개인의 실력보다 함께하는 팀원들과의
          협업이라고 생각합니다. 이러한 면이 음악에 팀원들과의 합주가 굉장히
          유사하다고 느껴졌습니다. 어느 한명이 실력이 뛰어나다고 해서 훌륭한
          하모니가 발생하지 않는 것 처럼 개발 작업도 누구 한명이 뛰어난 실력을
          가지고 있다고 해서 팀으로써 좋은 성과를 나타내지 않는다고 생각이
          됩니다. 그러므로 저는 개발을 통해 팀원들과 함께 최고의 하모니를
          발휘하고 싶은 신입 개발자 김혁진입니다.
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
