import Card from "../components/Card";
import { articlesData } from "../hooks/useData";

const ArticlesPage = async () => {
  const data = await articlesData();

  return (
    <div>
      <h2 className="mb-8 border-y-2 py-4 text-center text-4xl font-bold">
        Articles
      </h2>
      <ul className="grid grid-cols-3 gap-8 ">
        {data.map((item) => (
          <Card
            key={item.id}
            item={item}
            imgFolder="articles"
            pageFolder="articles"
          />
        ))}
      </ul>
    </div>
  );
};

export default ArticlesPage;
