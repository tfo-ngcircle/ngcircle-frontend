import { fetchApi } from "@/lib/api";
import { GlobalContext } from "./_app";
import { useContext } from "react";
import CTA from "@/components/cta";
import Container from "@/components/container";
import Seo from "@/components/seo";
import PrimaryImage from "@/components/primaryImage";

function Page({ page }) {
  const { header, footer } = useContext(GlobalContext);
  return (
    <>
      <Seo seo={page.seo} />
      <Container header={header} footer={footer}>
        <CTA cta={page.cta} style={{ backgroundColor: "#000" }} />
        <PrimaryImage primaryImage={page.landing[0]} />
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const pages = await fetchApi(`/pages`);
  return {
    paths: pages.map((page) => ({
      params: {
        slug: page.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pages = await fetchApi(`/pages/?slug=${params.slug}`);
  return {
    props: { page: pages[0] },
    revalidate: 30,
  };
}

export default Page;
