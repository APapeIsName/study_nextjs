import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <div>글로벌 헤더</div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
