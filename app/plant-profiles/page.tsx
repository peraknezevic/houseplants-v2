import prisma from "@/prisma/client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const PlantProfiles = async () => {
  const plantProfiles = await prisma.plantProfile.findMany();

  return (
    <div>
      <h2 className="mb-8 border-y-2 py-4 text-center text-4xl font-bold">
        Plant profiles
      </h2>
      <ul className="grid grid-cols-3 gap-8">
        {plantProfiles.map((plantProfile) => (
          <li
            key={plantProfile.id}
            className="overflow-hidden rounded-xl bg-white"
          >
            <Link href={`/plant-profiles/${plantProfile.slug}/`}>
              <Image
                src={`/images/plants/${plantProfile.slug}/${plantProfile.slug}-01.jpg`}
                width={400}
                height={500}
                alt={plantProfile.title}
              />
              <h3 className="center px-4 py-2 text-xl font-bold underline">
                {plantProfile.title}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlantProfiles;
