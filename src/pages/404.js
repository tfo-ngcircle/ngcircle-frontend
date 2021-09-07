import { GlobalContext } from "./_app";
import { useContext } from "react";
import Container from "@/components/container";
import Seo from "@/components/seo";

function FourOhFour() {
  const { header, footer, defaultSeo } = useContext(GlobalContext);
  return (
    <>
      <Seo seo={defaultSeo} />
      <Container header={header} footer={footer}>
        <h1 className="text-center py-56 px-12 s:px-32 m:px-56">
          404 Page not found
        </h1>
      </Container>
    </>
  );
}

export default FourOhFour;
