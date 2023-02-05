import { useEffect, useState } from "react";

export default function PageNotFound() {
  const [number, setNumber] = useState(5);

  useEffect(() => {
    const countDown = setInterval(() => {
      setNumber(number - 1);
    }, 1000);
    return () => {
      clearInterval(countDown);
    };
  }, [number]);

  useEffect(() => {
    setTimeout(() => {
      window.location.replace("/");
    }, 5000);
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 w-full h-screen">
        <h1 className="text-2xl font-bold">⚠️페이지를 찾을 수 없습니다⚠️</h1>
        <p>
          <spna className="text-red-600 font-bold">{number}초</spna> 뒤에
          메인페이지로 이동됩니다
        </p>
      </div>
    </>
  );
}
