import { fetchApi } from "@/lib/api";
import { GlobalContext } from "./_app";
import { useContext } from "react";
import CTA from "@/components/cta";
import Container from "@/components/container";
import Seo from "@/components/seo";
import PrimaryImage from "@/components/primaryImage";
import Content from "@/components/content";

function Page({ page, children }) {
  const { header, footer } = useContext(GlobalContext);
  return (
    <>
      <Seo seo={page.seo} />
      <Container header={header} footer={footer}>
        <CTA cta={page.cta} style={{ backgroundColor: "#000" }} />
        {page.landing.length > 0 ? (
          <PrimaryImage primaryImage={page.landing[0]} />
        ) : undefined}
        {page.content && <Content items={page.content} />}
        {children}
      </Container>
    </>
  );
}

// export async function getStaticPaths() {
//   const pages = await fetchApi(`/pages`);
//   return {
//     paths: pages.map((page) => ({
//       params: {
//         slug: page.slug,
//       },
//     })),
//     fallback: false,
//   };
// }

export async function getServerSideProps({ params, locale }) {
  const pages = await fetchApi(`/pages/?slug=${params.slug}&_locale=${locale}`);

  if (pages.length < 1)
    return {
      notFound: true,
    };
  return {
    props: { page: pages[0] },
    // revalidate: 30,
  };
}

export default Page;
