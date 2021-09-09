import MyImage from "@/components/image";
import Md from "@/components/md";
import { fetchApi } from "@/lib/api";
import Page from "../[slug]";

export default function Article({ article }) {
  const page = {
    cta: { description: article.title, title: "BLOG", action: "/blog" },
    landing: [],
  };

  return (
    <Page page={page}>
      <div className="min-h-[680px] w-full overflow-hidden items-center relative">
        <MyImage image={article.image} layout="fill" objectFit="cover" />
        <h4 className="text-white absolute px-16 md:px-20 xl:px-72 bottom-0 pb-20 font-semibold text-shadow-0">
          {article.description}
        </h4>
      </div>
      <Md content={article.content} className="container py-24" />
    </Page>
  );
}

export async function getServerSideProps({ params, locale }) {
  const articles = await fetchApi(
    `/articles/?slug=${params.slug}&_locale=${locale}`
  );

  if (articles.length < 1)
    return {
      notFound: true,
    };
  return {
    props: { article: articles[0] },
  };
}
