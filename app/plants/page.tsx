import { Metadata } from "next"
import Image from "next/image"

const PlantsPage = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/plants", {
      cache: "no-store",
    })
    const plants = await res.json()

    return (
      <>
        <h1>Plants</h1>
        <ul>
          {plants.map((plant: { id: number; slug: string; title: string }) => (
            <li key={plant.id} className="relative">
              <Image
                src={`/images/plants/${plant.slug}/${plant.slug}-01.jpg`}
                alt={plant.title}
                width={400}
                height={300}
                className="w-auto h-auto"
                priority
              />
              <h2>{plant.title}</h2>
            </li>
          ))}
        </ul>
      </>
    )
  } catch (error) {
    console.log("There was an error", error)
  }
}

export default PlantsPage

export const metadata: Metadata = {
  title: "Plant Profiles",
}
