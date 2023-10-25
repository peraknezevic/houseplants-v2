"use client"
import ErrorMessage from "@/app/components/ErrorMessage"
import Spinner from "@/app/components/Spinner"
import { pagesSchema } from "@/app/validationSchemas"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import "easymde/dist/easymde.min.css"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import SimpleMDE from "react-simplemde-editor"
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
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true)
      await axios.post("/api/pages", data)
      router.push("/dashboard/pages")
    } catch (error) {
      setIsSubmitting(false)
      console.log(error)
      setError("Unexpected error accured")
    }
  })

  return (
    <div className="space-y-4">
      {error && (
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      )}
      <form className="max-w-2xl space-y-4 flex flex-col" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered w-full"
          {...register("title")}
        />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <input
          type="text"
          placeholder="Slug"
          className="input input-bordered w-full"
          {...register("slug")}
        />
        <ErrorMessage>{errors.slug?.message}</ErrorMessage>

        <Controller
          name="content"
          control={control}
          render={({ field }) => <SimpleMDE placeholder="Content" {...field} />}
        />
        <ErrorMessage>{errors.content?.message}</ErrorMessage>

        <select className="select w-full max-w-xs" {...register("published")}>
          <option value="PUBLISHED">Published</option>
          <option value="DRAFT">Draft</option>
          <option value="REVIEW">Review</option>
        </select>
        <ErrorMessage>{errors.published?.message}</ErrorMessage>

        <button className="btn" disabled={isSubmitting}>
          Add New Page {isSubmitting && <Spinner />}
        </button>
      </form>
    </div>
  )
}

export default CreateNewPage
