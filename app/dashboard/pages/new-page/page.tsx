"use client"
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import { useForm, Controller } from "react-hook-form"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { pagesSchema } from "@/app/validationSchemas"
import { z } from "zod"

type Inputs = z.infer<typeof pagesSchema>

const CreateNewPage = () => {
  const router = useRouter()
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(pagesSchema),
  })
  const [error, setError] = useState("")

  return (
    <div className="space-y-4">
      {error && (
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      )}
      <form
        className="max-w-2xl space-y-4 flex flex-col"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/pages", data)
            router.push("/dashboard/pages")
          } catch (error) {
            console.log(error)
            setError("Unexpected error accured")
          }
        })}
      >
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered w-full"
          {...register("title")}
        />
        {errors.title && <p className="text-red-600">{errors.title.message}</p>}
        <input
          type="text"
          placeholder="Slug"
          className="input input-bordered w-full"
          {...register("slug")}
        />
        {errors.slug && <p className="text-red-600">{errors.slug.message}</p>}
        <Controller
          name="content"
          control={control}
          render={({ field }) => <SimpleMDE placeholder="Content" {...field} />}
        />
        {errors.content && (
          <p className="text-red-600">{errors.content.message}</p>
        )}

        <button className="btn">Add New Page</button>
      </form>
    </div>
  )
}

export default CreateNewPage
