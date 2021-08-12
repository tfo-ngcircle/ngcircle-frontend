import { GlobalContext } from "./_app";
import { useContext } from "react";
import Container from "@/components/container";
import Seo from "@/components/seo";
import ReactMarkdown from "react-markdown";
import styles from "../styles/pages/Page.module.scss";

function FourOhFour() {
  const { header, footer, defaultSeo } = useContext(GlobalContext);
  return (
    <>
      <Seo seo={defaultSeo} />
      <Container header={header} footer={footer}>
        <ReactMarkdown className={styles.content404} escapeHtml={false}>
          {"# 404 Page not found"}
        </ReactMarkdown>
      </Container>
    </>
  );
}

export default FourOhFour;
