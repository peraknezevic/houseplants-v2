"use client"
import ErrorMessage from "@/app/components/ErrorMessage"
import Spinner from "@/app/components/Spinner"
import { plantSchema } from "@/app/validationSchemas"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import "easymde/dist/easymde.min.css"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Plant } from "@prisma/client"

type PageData = z.infer<typeof plantSchema>

const PageForm = ({ plant }: { plant?: Plant }) => {
  const router = useRouter()
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PageData>({
    resolver: zodResolver(plantSchema),
  })
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data)
      setIsSubmitting(true)
      if (plant) await axios.patch("/api/plants/" + plant.slug, data)
      else await axios.post("/api/plants/", data)
      router.push("/dashboard/plants")
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
          defaultValue={plant?.botanicalName}
          placeholder="Botanical name"
          className="input input-bordered w-full"
          {...register("botanicalName")}
        />
        <ErrorMessage>{errors.botanicalName?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.slug}
          placeholder="Slug"
          className="input input-bordered w-full"
          {...register("slug")}
        />
        <ErrorMessage>{errors.slug?.message}</ErrorMessage>

        <label>
          Has a profile page?{" "}
          <input type="checkbox" {...register("hasProfile")} />
        </label>

        <label>
          Species: <input type="checkbox" {...register("isSpecies")} />
        </label>

        <label>
          Cultivar: <input type="checkbox" {...register("isCultivar")} />
        </label>

        <label>
          Hybrid: <input type="checkbox" {...register("isHybrid")} />
        </label>

        <input
          type="text"
          defaultValue={plant?.genusPageSlug}
          placeholder="Genus Page Slug"
          className="input input-bordered w-full"
          {...register("genusPageSlug")}
        />
        <ErrorMessage>{errors.genusPageSlug?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.synonyms || ""}
          placeholder="Synonyms"
          className="input input-bordered w-full"
          {...register("synonyms")}
        />
        <ErrorMessage>{errors.synonyms?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.tradeNames || ""}
          placeholder="Trade Names"
          className="input input-bordered w-full"
          {...register("tradeNames")}
        />
        <ErrorMessage>{errors.tradeNames?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.commonNames || ""}
          placeholder="Common Names"
          className="input input-bordered w-full"
          {...register("commonNames")}
        />
        <ErrorMessage>{errors.commonNames?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.namedBy || ""}
          placeholder="Named by"
          className="input input-bordered w-full"
          {...register("namedBy")}
        />
        <ErrorMessage>{errors.namedBy?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.inventor || ""}
          placeholder="Inventor"
          className="input input-bordered w-full"
          {...register("inventor")}
        />
        <ErrorMessage>{errors.inventor?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.patent || ""}
          placeholder="Patent"
          className="input input-bordered w-full"
          {...register("patent")}
        />
        <ErrorMessage>{errors.patent?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.nativeArea || ""}
          placeholder="Native Area"
          className="input input-bordered w-full"
          {...register("nativeArea")}
        />
        <ErrorMessage>{errors.nativeArea?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.imageCredits || ""}
          placeholder="Image Credits"
          className="input input-bordered w-full"
          {...register("imageCredits")}
        />
        <ErrorMessage>{errors.imageCredits?.message}</ErrorMessage>

        <button className="btn" disabled={isSubmitting}>
          {plant ? "Update Page" : "Add New Page"} {isSubmitting && <Spinner />}
        </button>
      </form>
    </div>
  )
}

export default PageForm
