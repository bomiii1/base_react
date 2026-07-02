function BaseJsxEx() {
  const name = "react";
  const age = 10;
  return (
    <div>
      <h1>리액트 기초</h1>
      <p>리액트 기초 문법</p>
      <div>새로운 라이브러리 {name}을 배워보자.</div>
      <div>나이: {age * 2}</div>
    </div>
  );
}

export default BaseJsxEx;
