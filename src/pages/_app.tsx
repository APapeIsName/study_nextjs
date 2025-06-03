import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/test");
  }, []);

  const onClickButton = () => {
    router.push("/test");
  }

  return (
    <>
      <header>
        <Link href={"/"}>홈</Link>
        &nbsp;
        <Link href={"/search"} prefetch={false}>search</Link>
        &nbsp;
        <Link href={"/book/1"}>book/1</Link>
        <div>
          <button onClick={onClickButton}>/test 페이지로 이동</button>
        </div>
        <div>글로벌 헤더</div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
