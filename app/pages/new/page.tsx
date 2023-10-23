"use client"
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import { useForm, Controller } from "react-hook-form"
import axios from "axios"
import { useRouter } from "next/navigation"

type Inputs = {
  title: string
  slug: string
  content: string
}

const CreateNewPage = () => {
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
        await axios.post("/api/page", data)
        router.push("/pages")
      })}
    >
      <input
        type="text"
        placeholder="Title"
        className="input input-bordered w-full"
        {...register("title")}
      />
      <input
        type="text"
        placeholder="Slug"
        className="input input-bordered w-full"
        {...register("slug")}
      />
      <Controller
        name="content"
        control={control}
        render={({ field }) => <SimpleMDE placeholder="Content" {...field} />}
      />

      <button className="btn">Add New Page</button>
    </form>
  )
}

export default CreateNewPage
