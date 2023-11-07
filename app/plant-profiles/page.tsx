import prisma from "@/prisma/client";
import Card from "../components/Card";

const PlantProfiles = async () => {
  const plantProfiles = await prisma.plantProfile.findMany();

  return (
    <div>
      <h2 className="mb-8 border-y-2 py-4 text-center text-4xl font-bold">
        Plant profiles
      </h2>
      <ul className="grid grid-cols-3 gap-8 ">
        {plantProfiles.map((plantProfile) => (
          <Card key={plantProfile.id} item={plantProfile} />
        ))}
      </ul>
    </div>
  );
};

export default PlantProfiles;
