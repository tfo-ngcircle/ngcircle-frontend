import MyImage from "@/components/image";
import MyLink from "@/components/link";
import { fetchApi } from "@/lib/api";
import Page from "../[slug]";

function Blogs({ blog }) {
  return (
    <Page page={blog}>
      <div className="container space-y-10 divide-y-2 divide-gray-700 pb-20">
        {blog.articles.map((article) => {
          return (
            <div key={article.id} className="space-y-5 flex flex-col">
              <h2 className="font-semibold pt-10">{article.title}</h2>
              <div className="rounded-md h-[500px] w-full overflow-hidden content-center items-center relative">
                <MyImage
                  image={article.image}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>{article.description}</div>
              <MyLink
                label="Read more"
                destination={"/blog/" + article.slug}
                className="text-right content-end hover:text-primary"
              />
            </div>
          );
        })}
      </div>
    </Page>
  );
}

export default Blogs;

export async function getServerSideProps({ locale }) {
  const [blog] = await Promise.all([fetchApi(`/blog?_locale=${locale}`)]);

  return {
    props: { blog },
  };
}
