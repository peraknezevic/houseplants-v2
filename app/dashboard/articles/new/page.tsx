import dynamic from "next/dynamic";

const ArticleForm = dynamic(
  () => import("@/app/dashboard/articles/_components/ArticleForm"),
  {
    ssr: false,
  },
);

const NewPage = () => {
  return <ArticleForm />;
};

export default NewPage;
