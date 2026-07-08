import { useForm } from "react-hook-form";
import ErrorMessage from "../components/ErrorMessage";
import { Link, Links } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // 유저가 인풋에 입력한 내용을 객체로 반환 받음
  };

  console.log(isValid);
  console.log(errors.username?.message);
  console.log(errors.password?.message);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-3/5 p-12 bg-white rounded-xl shadow flex flex-col"
      >
        <h1 className="font-bold text-3xl mb-[15px]">LOGIN</h1>
        <input
          {...register("username", { required: "아이디는 필수 입니다." })}
          // required = 필수
          className="w-full p-2 rounded-md mt-4 border border-slate-300"
          type="text"
          placeholder="아이디를 입력하세요😊"
        />
        <ErrorMessage message={errors?.username?.message} />
        <input
          //   onSubmit={handleSubmit(onSubmit)}
          {...register("password", {
            required: "비밀번호는 필수입니다.",
            minLength: {
              value: 8,
              message: "8자 이상 작성해주세요",
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
              // --> 정규식
              message: "영문과 숫자를 포함해야 됩니다",
            },
          })}
          className="w-full p-2 rounded-md mt-4 border border-slate-300"
          type="password"
          placeholder="비밀번호를 입력하세요😊"
        />
        <ErrorMessage message={errors?.password?.message} />
        <button
          className={`active:scale-95 w-full rounded-md p-2 text-white font-bold mt-4 cursor-pointer transition ${isValid ? "bg-blue-400" : "bg-blue-200"}`}
        >
          로그인
        </button>
        <div className="flex gap-2.5 justify-end mt-[20px] text-[14px]">
          <p>계정이 없으신가요?</p>
          <Link to={"/signup"} className="text-blue-500">
            회원가입
          </Link>
        </div>
      </form>
    </div>
  );
}
