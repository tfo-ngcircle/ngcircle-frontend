import { fetchApi } from "@/lib/api";
import { GlobalContext } from "./_app";
import { useContext } from "react";
import CTA from "@/components/cta";
import Container from "@/components/container";
import Seo from "@/components/seo";
import PrimaryImage from "@/components/primaryImage";
import Content from "@/components/content";
import Jobs from "@/components/jobs";

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

export async function getStaticProps() {
  const [career] = await Promise.all([fetchApi("/career")]);

  return {
    props: { career },
    revalidate: 30,
  };
}

export default Career;
