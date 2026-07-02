export default function Contents({ name, food, side }) {
  return (
    <div style={{ backgroundColor: "lightgray", padding: "15px 10px" }}>
      <p> 이름 : {name}</p>
      <p> 음식 : {food}</p>
      <p> 사이드 : {side}</p>
    </div>
  );
}
