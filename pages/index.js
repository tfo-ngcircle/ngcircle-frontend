import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { fetchApi } from "@/lib/api";
import Container from "@/components/container";
import { GlobalContext } from "./_app";
import { useContext } from "react";
import CTA from "@/components/cta";

export default function Home({ homepage }) {
  const { header } = useContext(GlobalContext);
  console.log(homepage);
  return (
    <Container header={header}>
      <CTA cta={homepage.CTA} />
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
