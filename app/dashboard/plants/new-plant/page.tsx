"use client"
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import { useForm, Controller } from "react-hook-form"
import axios from "axios"
import { useRouter } from "next/navigation"

type Inputs = {
  botanicalName: string
  slug: string
  hasProfile: boolean

  species: boolean
  cultivar: boolean
  hybrid: boolean

  children: string[]
  parents: string[]

  genusPageSlug: string

  synonyms: string
  tradeNames: string
  commonNames: string
  namedBy: string
  inventor: string
  patent: string
  nativeArea: string

  imageCredits: string
}

const CreateNewPlant = () => {
  const router = useRouter()
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  return (
    <form
      className="max-w-2xl space-y-4 flex flex-col"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/plants", data)
        router.push("/plants")
      })}
    >
      <input
        type="text"
        placeholder="Botanical name"
        className="input input-bordered w-full"
        {...register("botanicalName")}
      />
      <input
        type="text"
        placeholder="Slug"
        className="input input-bordered w-full"
        {...register("slug")}
      />

      <input type="checkbox" className="checkbox" />

      <select className="select select-bordered w-full max-w-xs">
        <option disabled>Who shot first?</option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
      <textarea
        className="textarea textarea-bordered"
        placeholder="Bio"
      ></textarea>
      <input type="checkbox" className="checkbox" />
      <button className="btn">Add New Plant</button>
    </form>
  )
}

export default CreateNewPlant
