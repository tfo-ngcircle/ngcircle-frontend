import React from "react";
import ReactMarkdown from "react-markdown";
import { Parallax } from "react-parallax";
import MyImage from "./image";
import styles from "../styles/pages/Page.module.scss";
import { getStrapiMedia } from "@/lib/media";
import { Grid, Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";

function Content({ items }) {
  return (
    <>
      {items.map((item, index) => {
        switch (item.__component) {
          case "shared.markdown":
            return (
              <Grid>
                <ReactMarkdown escapeHtml={false}>{item.md}</ReactMarkdown>
              </Grid>
            );
          case "shared.media":
            return (
              <Grid fluid={item.fillScreenWidth}>
                <MyImage image={item.media} />
              </Grid>
            );
          case "shared.media-desc":
            return (
              <Grid className={styles.grid}>
                <Row middle="xs" between="xs">
                  {getItem(index, item)}
                </Row>
              </Grid>
            );
          default:
            break;
        }
      })}
    </>
  );
}

function getItem(index, item) {
  if (index % 2 == 0) {
    return (
      <>
        <Col lg={6} xs={12} sm={12} md={6}>
          <Parallax
            bgImage={getStrapiMedia(item.media)}
            strength={500}
            contentClassName={styles.parallaxC}
          />
        </Col>
        <Col lg={5} xs={12} sm={12} md={6}>
          <ReactMarkdown escapeHtml={false}>{item.description}</ReactMarkdown>
        </Col>
      </>
    );
  } else
    return (
      <>
        <Col lg={5} xs={12} sm={12} md={6}>
          <ReactMarkdown escapeHtml={false}>{item.description}</ReactMarkdown>
        </Col>
        <Col lg={6} xs={12} sm={12} md={6}>
          <Parallax
            bgImage={getStrapiMedia(item.media)}
            strength={500}
            contentClassName={styles.parallaxC}
          />
        </Col>
      </>
    );
}

export default Content;
