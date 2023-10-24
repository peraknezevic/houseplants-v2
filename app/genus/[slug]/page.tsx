import Image from "next/image"

interface Props {
  params: { id: string }
}

const Genus = async ({ params }: Props) => {
  const res = await fetch(
    `http://localhost:3000/api/plants/genus/${params.id}`,
    { cache: "no-store" }
  )
  const plantsList = await res.json()

  return (
    <>
      <ul>
        {plantsList.map(
          (plant: {
            title: string
            id: number
            genus: string
            imageFilename: string
          }) => (
            <li key={plant.id}>
              <h3>{plant.title}</h3>
              <Image
                src={`/images/genus/${plant.genus.toLowerCase()}/${
                  plant.imageFilename
                }.jpg`}
                alt={plant.title}
                width={400}
                height={300}
                className="w-auto h-auto"
                priority
              />
            </li>
          )
        )}
      </ul>
    </>
  )
}

export default Genus
