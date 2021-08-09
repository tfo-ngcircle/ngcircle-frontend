import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { fetchApi } from "@/lib/api";
import Container from "@/components/container";
import { GlobalContext } from "./_app";
import { useContext } from "react";

export default function Home({}) {
  const { header } = useContext(GlobalContext);
  console.log(header);
  return <Container header={header}></Container>;
}

// export async function getStaticProps() {
//   const [articles, categories, homepage] = await Promise.all([
//     fetchApi("/aricles?status=published"),
//     fetchApi("/categories"),
//     fetchApi("/homepage"),
//   ]);

//   return {
//     props: { articles, categories, homepage },
//     revalidate: 30,
//   };
// }
