"use client";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { plantProfileSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlantProfile } from "@prisma/client";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";

type PlantProfileData = z.infer<typeof plantProfileSchema>;

const PlantProfileForm = ({ plant }: { plant?: PlantProfile }) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PlantProfileData>({
    resolver: zodResolver(plantProfileSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      if (plant) await axios.patch("/api/plant-profiles/" + plant.slug, data);
      else await axios.post("/api/plant-profiles/", data);
      router.push("/dashboard/plant-profiles");
      router.refresh();
    } catch (error) {
      setIsSubmitting(false);
      setError("Unexpected error accured");
    }
  });

  return (
    <div className="space-y-4">
      {error && (
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      )}
      <form className="flex max-w-2xl flex-col space-y-4" onSubmit={onSubmit}>
        <input
          type="text"
          defaultValue={plant?.title}
          placeholder="Title"
          className="input input-bordered w-full"
          {...register("title")}
        />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>

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
          defaultValue={plant?.synonyms || ""}
          placeholder="Synonyms"
          className="input input-bordered w-full"
          {...register("synonyms")}
        />
        <ErrorMessage>{errors.synonyms?.message}</ErrorMessage>

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
          defaultValue={plant?.family || ""}
          placeholder="Family"
          className="input input-bordered w-full"
          {...register("family")}
        />
        <ErrorMessage>{errors.family?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.subFamily || ""}
          placeholder="Sub Family"
          className="input input-bordered w-full"
          {...register("subFamily")}
        />
        <ErrorMessage>{errors.subFamily?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.genus || ""}
          placeholder="Genus"
          className="input input-bordered w-full"
          {...register("genus")}
        />
        <ErrorMessage>{errors.genus?.message}</ErrorMessage>

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
          defaultValue={plant?.tradeNames || ""}
          placeholder="Trade Names"
          className="input input-bordered w-full"
          {...register("tradeNames")}
        />
        <ErrorMessage>{errors.tradeNames?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.inventor || ""}
          placeholder="Cultivar Inventor"
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
          defaultValue={plant?.commonNames || ""}
          placeholder="Common Names"
          className="input input-bordered w-full"
          {...register("commonNames")}
        />
        <ErrorMessage>{errors.commonNames?.message}</ErrorMessage>

        <select
          className="select w-full max-w-xs"
          {...register("care")}
          defaultValue={plant?.care || ""}
        >
          <option value="">CARE DIFFICULTY</option>
          <option value="EASY">Easy</option>
          <option value="AVARAGE">Avarage</option>
          <option value="DIFFICULT">Difficult</option>
        </select>
        <ErrorMessage>{errors.care?.message}</ErrorMessage>

        <select
          className="select w-full max-w-xs"
          {...register("light")}
          defaultValue={plant?.light || ""}
        >
          <option value="">LIGHT PREFERENCE</option>
          <option value="LOW_LIGHT">Low Light</option>
          <option value="PARTIAL_SHADE">Partial Shade</option>
          <option value="MEDIUM_LIGHT">Medium Light</option>
          <option value="BRIGHT_LIGHT">Bright Light</option>
          <option value="FULL_SUN">Full Sun</option>
        </select>
        <ErrorMessage>{errors.light?.message}</ErrorMessage>

        <input
          type="number"
          defaultValue={plant?.minimalT}
          placeholder="Minimal Temperature"
          className="input input-bordered w-full"
          {...register("minimalT", {
            valueAsNumber: true,
          })}
        />
        <ErrorMessage>{errors.minimalT?.message}</ErrorMessage>

        <input
          type="number"
          defaultValue={plant?.optimalT}
          placeholder="Optimal Temperature"
          className="input input-bordered w-full"
          {...register("optimalT", {
            valueAsNumber: true,
          })}
        />
        <ErrorMessage>{errors.optimalT?.message}</ErrorMessage>

        <select
          className="select w-full max-w-xs"
          {...register("humidity")}
          defaultValue={plant?.humidity || ""}
        >
          <option value="">HUMIDITY</option>
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
        <ErrorMessage>{errors.humidity?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.watering || ""}
          placeholder="Watering"
          className="input input-bordered w-full"
          {...register("watering")}
        />
        <ErrorMessage>{errors.watering?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.feeding || ""}
          placeholder="Feeding"
          className="input input-bordered w-full"
          {...register("feeding")}
        />
        <ErrorMessage>{errors.feeding?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.soil || ""}
          placeholder="Soil"
          className="input input-bordered w-full"
          {...register("soil")}
        />
        <ErrorMessage>{errors.soil?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.soilPH || ""}
          placeholder="Soil PH"
          className="input input-bordered w-full"
          {...register("soilPH")}
        />
        <ErrorMessage>{errors.soilPH?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.repotting || ""}
          placeholder="Repotting"
          className="input input-bordered w-full"
          {...register("repotting")}
        />
        <ErrorMessage>{errors.repotting?.message}</ErrorMessage>

        <select
          className="select w-full max-w-xs"
          {...register("speedOfGrowth")}
          defaultValue={plant?.speedOfGrowth || ""}
        >
          <option value="">SPEED OF GROWTH</option>
          <option value="SLOW">Slow</option>
          <option value="MODERATE">Moderate</option>
          <option value="FAST">Fast</option>
        </select>
        <ErrorMessage>{errors.speedOfGrowth?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.matureSize || ""}
          placeholder="Mature Size"
          className="input input-bordered w-full"
          {...register("matureSize")}
        />
        <ErrorMessage>{errors.matureSize?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.flower || ""}
          placeholder="Flower"
          className="input input-bordered w-full"
          {...register("flower")}
        />
        <ErrorMessage>{errors.flower?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.propagation || ""}
          placeholder="Propagation"
          className="input input-bordered w-full"
          {...register("propagation")}
        />
        <ErrorMessage>{errors.propagation?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.pests || ""}
          placeholder="Pests"
          className="input input-bordered w-full"
          {...register("pests")}
        />
        <ErrorMessage>{errors.pests?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.diseases || ""}
          placeholder="Diseases"
          className="input input-bordered w-full"
          {...register("diseases")}
        />
        <ErrorMessage>{errors.diseases?.message}</ErrorMessage>

        <select
          className="select w-full max-w-xs"
          {...register("toxicity")}
          defaultValue={plant?.toxicity || ""}
        >
          <option value="">TOXICITY</option>
          <option value="TOXIC">Toxic</option>
          <option value="NOT_TOXIC">Not Toxic</option>
          <option value="NO_INFO">No Info</option>
        </select>
        <ErrorMessage>{errors.toxicity?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.imageCredits || ""}
          placeholder="Image Credits"
          className="input input-bordered w-full"
          {...register("imageCredits")}
        />
        <ErrorMessage>{errors.imageCredits?.message}</ErrorMessage>

        <select
          className="select w-full max-w-xs"
          {...register("published")}
          defaultValue={plant?.published}
        >
          <option value="PUBLISHED">Published</option>
          <option value="DRAFT">Draft</option>
          <option value="REVIEW">Review</option>
        </select>
        <ErrorMessage>{errors.published?.message}</ErrorMessage>

        <Controller
          name="notes"
          defaultValue={plant?.notes || ""}
          control={control}
          render={({ field }) => <SimpleMDE placeholder="Notes" {...field} />}
        />
        <ErrorMessage>{errors.notes?.message}</ErrorMessage>

        <button className="btn btn-black" disabled={isSubmitting}>
          {plant ? "Update Plant Profile" : "Add New Plant Profile"}{" "}
          {isSubmitting && <Spinner />}
        </button>
      </form>
    </div>
  );
};

export default PlantProfileForm;
