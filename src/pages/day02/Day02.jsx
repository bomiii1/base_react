import Contents from "./components/Contents";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Intro from "./components/Intro";
import Section_1 from "./components/Section_1";
import Section_2 from "./components/Section_2";
// import Intro from "./components/Intro";

export default function Day02() {
  return (
    <div>
      {/* <Header />
      <hr />
      <Section_1 />
      <hr />
      <Section_2 />
      <hr />
      <Footer /> */}

      {/* <div>
        <h2>자기소개</h2>
        <p>이름 : </p>
        <p>나이 : </p>
      </div> */}

      {/* <Intro name="보미" age="26" hobby="영화" /> */}
      {/* =>컴포넌트에 넘겨주는 변수를 props라고 함
      =>props는 객체로 반환함. */}

      <Contents name="최보미" food="햄스페셜 토스트" side="포테이토팝" />
      <hr />
      <Contents name="보미" food="스크램블 베이컨 토스트" side="콜라" />
      <hr />
      <Contents name="미" food="그릴드 불갈비토스트" side="커피" />
    </div>
  );
}
