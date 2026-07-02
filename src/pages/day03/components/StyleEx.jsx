// import "../../../style/style.css";

export default function StyleEx() {
  const w = 300;
  //   변수는 리턴 밖에 지정

  return (
    <div>
      <div
        style={{
          width: w,
          height: w,
          backgroundColor: "teal",
          fontSize: "30px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        인라인 스타일
      </div>

      <div className="box"> 외부 스타일 </div>
    </div>
  );
}
