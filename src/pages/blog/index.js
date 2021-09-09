import { fetchApi } from "@/lib/api";
import Page from "../[slug]";

function Blog({ blog }) {
  return (
    <Page page={blog}>
      <div>Hello</div>
    </Page>
  );
}

export default Blog;

export async function getServerSideProps({ locale }) {
  const [blog] = await Promise.all([fetchApi(`/blog?_locale=${locale}`)]);

  return {
    props: { blog },
  };
}
