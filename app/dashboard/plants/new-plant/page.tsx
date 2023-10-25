"use client"
import { plantSchema } from "@/app/validationSchemas"
import axios from "axios"
import "easymde/dist/easymde.min.css"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import z from "zod"

type Inputs = z.infer<typeof plantSchema>

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
