"use client"
import ErrorMessage from "@/app/components/ErrorMessage"
import Spinner from "@/app/components/Spinner"
import { generaSchema } from "@/app/validationSchemas"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import "easymde/dist/easymde.min.css"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { GenusPage } from "@prisma/client"
import SimpleMDE from "react-simplemde-editor"

type PageData = z.infer<typeof generaSchema>

const GenusForm = ({ genus }: { genus?: GenusPage }) => {
  const router = useRouter()
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PageData>({
    resolver: zodResolver(generaSchema),
  })
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true)
      if (genus) await axios.patch("/api/genera/" + genus.slug, data)
      else await axios.post("/api/genera", data)
      router.push("/dashboard/genera")
      router.refresh()
    } catch (error) {
      setIsSubmitting(false)
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
          defaultValue={genus?.title}
          placeholder="Title"
          className="input input-bordered w-full"
          {...register("title")}
        />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={genus?.slug}
          placeholder="Slug"
          className="input input-bordered w-full"
          {...register("slug")}
        />
        <ErrorMessage>{errors.slug?.message}</ErrorMessage>

        <Controller
          name="intro"
          defaultValue={genus?.intro}
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Introduction" {...field} />
          )}
        />
        <ErrorMessage>{errors.intro?.message}</ErrorMessage>

        <Controller
          name="changeLog"
          defaultValue={genus?.changeLog}
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="changeLog" {...field} />
          )}
        />
        <ErrorMessage>{errors.changeLog?.message}</ErrorMessage>

        <select className="select w-full max-w-xs" {...register("published")}>
          <option value="PUBLISHED">Published</option>
          <option value="DRAFT">Draft</option>
          <option value="REVIEW">Review</option>
        </select>
        <ErrorMessage>{errors.published?.message}</ErrorMessage>

        <button className="btn" disabled={isSubmitting}>
          {genus ? "Update Genus" : "Add New Genus"}{" "}
          {isSubmitting && <Spinner />}
        </button>
      </form>
    </div>
  )
}

export default GenusForm
