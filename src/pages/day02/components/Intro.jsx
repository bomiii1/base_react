export default function Intro({ name, age, hobby }) {
  console.log(props);
  return (
    <div style={(backgroundColor = "lightgray")}>
      <h2>자기소개</h2>
      <p>이름 : {name}</p>
      <p>나이 : {age}</p>
      <p>취미 : {hobby}</p>
    </div>
  );
}
