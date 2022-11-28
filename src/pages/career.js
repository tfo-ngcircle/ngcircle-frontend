import Container from "@/components/container";
import Content from "@/components/content";
import CTA from "@/components/cta";
import Jobs from "@/components/jobs";
import PrimaryImage from "@/components/primaryImage";
import Seo from "@/components/seo";
import { fetchApi } from "@/lib/api";
import { useContext } from "react";
import { GlobalContext } from "./_app";

function Career({ career }) {
  const { header, footer } = useContext(GlobalContext);
  return (
    <>
      <Seo seo={career.seo} />
      <Container header={header} footer={footer}>
        <CTA cta={career.cta} style={{ backgroundColor: "#000" }} />
        <PrimaryImage primaryImage={career.landing[0]} />
        {career.content && <Content items={career.content} />}
        {career.jobs && <Jobs jobs={career.jobs} />}
        {career.contentAfter && <Content items={career.contentAfter} />}
      </Container>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const [career] = await Promise.all([fetchApi(`/career?_locale=${locale}`)]);

  return {
    props: { career },
    // revalidate: 30,
  };
}

export default Career;
