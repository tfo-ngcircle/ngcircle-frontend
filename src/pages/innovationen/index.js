import { fetchApi } from "@/lib/api";
import { GlobalContext } from "../_app";
import { useContext } from "react";
import CTA from "@/components/cta";
import Container from "@/components/container";
import Seo from "@/components/seo";
import PrimaryImage from "@/components/primaryImage";

export default function Innovationen({ innovationen }) {
  const { header, footer } = useContext(GlobalContext);
  return (
    <>
      <Seo seo={innovationen.seo} />
      <Container header={header} footer={footer}>
        <CTA cta={innovationen.CTA} style={{ backgroundColor: "#000" }} />
        <PrimaryImage primaryImage={innovationen.primaryImage} />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const [innovationen] = await Promise.all([fetchApi("/innovationen")]);
  return {
    props: { innovationen },
    revalidate: 30,
  };
}
