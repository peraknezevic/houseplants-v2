import Card from "../components/Card";
import { plantProfilesData } from "../hooks/useData";

const PlantProfilesPage = async () => {
  const data = await plantProfilesData();

  return (
    <div>
      <h2 className="mb-8 border-y-2 py-4 text-center text-4xl font-bold">
        Plant profiles
      </h2>
      <ul className="grid grid-cols-3 gap-8 ">
        {data.map((item) => (
          <Card
            key={item.id}
            item={item}
            imgFolder="plants"
            pageFolder="plant-profiles"
          />
        ))}
      </ul>
    </div>
  );
};

export default PlantProfilesPage;
