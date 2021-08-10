import Head from "next/head";
import { fetchApi } from "src/lib/api";
import Container from "src/components/container";
import { GlobalContext } from "./_app";
import { useContext } from "react";
import CTA from "src/components/cta";

export default function Home({ homepage }) {
  const { header } = useContext(GlobalContext);
  return (
    <Container header={header}>
      <CTA cta={homepage.CTA} style={{ backgroundColor: "#000" }} />
    </Container>
  );
}

export async function getStaticProps() {
  const [homepage] = await Promise.all([fetchApi("/homepage")]);

  return {
    props: { homepage },
    revalidate: 30,
  };
}
