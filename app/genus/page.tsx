import Card from "../components/Card";
import CardGrid from "../components/CardGrid";
import CategoryHead from "../components/CategoryHead";
import { genusPagesData } from "../hooks/useData";

const GenerasPage = async () => {
  const data = await genusPagesData();
  return (
    <div>
      <h1>Genus Pages</h1>
      <CardGrid>
        {data.map((item) => (
          <Card
            key={item.id}
            item={item}
            imgFolder="genus"
            pageFolder="genus"
          />
        ))}
      </CardGrid>
    </div>
  );
};

export default GenerasPage;
