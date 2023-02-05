import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle";
import { KAKAO_URL } from "../config";

export default function Header() {
  console.log(KAKAO_URL);
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl font-bold text-[#b386d8]">
              import{" "}
              <span className="text-sky-500 dark:text-sky-300">김혁진</span>{" "}
              from{" "}
              <span className="text-[#da8f51] dark:text-[#F3A15E]">
                Portfolio!
              </span>
            </span>
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-bold">
            <Link href="/" className="mr-5 hover:text-gray-900">
              HOME🏠
            </Link>
            <Link href="/projects" className="mr-5 hover:text-gray-900">
              PROJECTS💾
            </Link>
            <Link
              href="https://open.kakao.com/o/slJFWR2e"
              className="mr-5 hover:text-gray-900"
            >
              CONTACT📱
            </Link>
          </nav>
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
}
