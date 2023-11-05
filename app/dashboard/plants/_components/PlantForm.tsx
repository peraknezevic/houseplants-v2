"use client"
import SimpleMDE from "react-simplemde-editor"
import { Controller, useForm } from "react-hook-form"
import ErrorMessage from "@/app/components/ErrorMessage"
import Spinner from "@/app/components/Spinner"
import { plantSchema } from "@/app/validationSchemas"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import "easymde/dist/easymde.min.css"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { z } from "zod"
import { Plant } from "@prisma/client"

type PlantData = z.infer<typeof plantSchema>

const PlantForm = ({ plant }: { plant?: Plant }) => {
  const router = useRouter()
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PlantData>({
    resolver: zodResolver(plantSchema),
  })
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = handleSubmit(async (data) => {
    try {
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

        <input
          type="text"
          defaultValue={plant?.genusPageSlug}
          placeholder="Genus Page Slug"
          className="input input-bordered w-full"
          {...register("genusPageSlug")}
        />
        <ErrorMessage>{errors.genusPageSlug?.message}</ErrorMessage>

        <label>
          <input
            defaultChecked={plant?.isSpecies}
            type="checkbox"
            {...register("isSpecies")}
          />{" "}
          Species
        </label>

        <label>
          <input
            defaultChecked={plant?.isCultivar}
            type="checkbox"
            {...register("isCultivar")}
          />{" "}
          Cultivar
        </label>

        <label>
          <input
            defaultChecked={plant?.isHybrid}
            type="checkbox"
            {...register("isHybrid")}
          />{" "}
          Hybrid
        </label>

        <input
          type="text"
          defaultValue={plant?.children || ""}
          placeholder="Children"
          className="input input-bordered w-full"
          {...register("children")}
        />
        <ErrorMessage>{errors.children?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.parents || ""}
          placeholder="Parents"
          className="input input-bordered w-full"
          {...register("parents")}
        />
        <ErrorMessage>{errors.parents?.message}</ErrorMessage>

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
          placeholder="Described by"
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

        <label>
          <input
            defaultChecked={plant?.hasProfile}
            type="checkbox"
            {...register("hasProfile")}
          />{" "}
          Has a profile page
        </label>

        <label>
          Has Image:{" "}
          <input
            defaultChecked={true}
            type="checkbox"
            {...register("hasImage")}
          />
        </label>
        <ErrorMessage>{errors.hasImage?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.imageCredits || ""}
          placeholder="image Credits"
          className="input input-bordered w-full"
          {...register("imageCredits")}
        />
        <ErrorMessage>{errors.imageCredits?.message}</ErrorMessage>

        <button className="btn" disabled={isSubmitting}>
          {plant ? "Update Plant" : "Add New Plant"}{" "}
          {isSubmitting && <Spinner />}
        </button>
      </form>
    </div>
  )
}

export default PlantForm
