import { fetchApi } from "@/lib/api";
import Page from "./[slug]";

export default function Home({ homepage }) {
  return <Page page={homepage} />;
}

export async function getServerSideProps(context) {
  const [homepage] = await Promise.all([fetchApi("/homepage")]);

  return {
    props: { homepage },
    // revalidate: 30,
  };
}
