import { useRouter } from "next/router";

export default function Page() {
    const router = useRouter();
    const { q } = router.query;
    return <h1>검색 페이지 {q}</h1>;
}