import { Main } from "@/layout/Main";
import styles from "./page.module.css";
import { Header } from "@/layout/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Main>
        <h1>
          반갑습니다 <br /> 저는 백남헌입니다.
        </h1>
        <p>
          4년차 웹 프론트엔드 엔지니어로 일하고 있으며, 사용자에게 좋은 유저
          인터페이스와 경험을 느끼게 하는 것이 가장 큰 가치라고 생각하며,
          사람들의 불편함을 해결하는 것을 좋아합니다.
        </p>
        <h2>Work Experience.</h2>
        
      </Main>
    </main>
  );
}
