import { fetchApi } from "@/lib/api";
import Page from "./[slug]";

export default function Home({ homepage }) {
  return <Page page={homepage} />;
}

export async function getServerSideProps({ locale }) {
  const [homepage] = await Promise.all([
    fetchApi(`/homepage?_locale=${locale}`),
  ]);

  return {
    props: { homepage },
    // revalidate: 30,
  };
}
