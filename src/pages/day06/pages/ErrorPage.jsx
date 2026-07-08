import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="font-bold text-6xl h-screen flex flex-col justify-center items-center">
      <h1>Error Page</h1>
      <div className="font-medium text-xl flex flex-col my-5 items-center gap-3">
        <p>잘못된 경로입니다 홈으로 이동해주세요</p>
        <Link
          to={"/"}
          className="text-blue-300 bg-black w-full flex justify-center p-[15px] rounded-[5px]"
        >
          홈으로 이동하기 &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
