export default function BaseEx03() {
  return (
    // <div>
    //   <h2>두개이상의 태그는 반드시 부모태그로 감싸줄것</h2>
    //   <div>태그 하나더 제작</div>
    // </div>
    //     <h2> 빈태그가 싫으면 fragment 를 사용할수있음.</h2>
    //     <h2> 빈태그가 싫으면 fragment 를 사용할수있음.</h2>
    //   );

    <React.Fragment>
      <h2>빈태그가 싫으면 fragmetn를 사용</h2>
      <h2>빈태그가 싫으면 fragmetn를 사용</h2>
    </React.Fragment>
  );
}
