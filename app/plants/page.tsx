import Image from "next/image"
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  PromiseLikeOfReactNode,
} from "react"

interface Props {
  id: Number
  title: String
  slug: String
}

const PlantsPage = async () => {
  const res = await fetch("http://localhost:3000/api/plants", {
    cache: "no-store",
  })
  const plants = await res.json()

  return (
    <>
      <h1>Plants</h1>
      <ul>
        {plants.map((plant: { id: Key; slug: string; title: string }) => (
          <li key={plant.id}>
            <Image
              src={`/images/plants/${plant.slug}/${plant.slug}-01.jpg`}
              alt={plant.title}
              width="300"
              height="400"
            />
            <h2>{plant.title}</h2>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PlantsPage
