import Head from "next/head";
import { fetchApi } from "@/lib/api";
import { GlobalContext } from "./_app";
import { useContext } from "react";
import CTA from "@/components/cta";
import Container from "@/components/container";

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
