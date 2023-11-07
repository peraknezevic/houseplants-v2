import Card from "../components/Card";
import { genusPagesData } from "../hooks/useData";

const GenerasPage = async () => {
  const data = await genusPagesData();
  return (
    <div>
      <h2 className="mb-8 border-y-2 py-4 text-center text-4xl font-bold">
        Genera Pages
      </h2>
      <ul className="grid grid-cols-3 gap-8">
        {data.map((item) => (
          <Card
            key={item.id}
            item={item}
            imgFolder="genus"
            pageFolder="genus"
          />
        ))}
      </ul>
    </div>
  );
};

export default GenerasPage;
