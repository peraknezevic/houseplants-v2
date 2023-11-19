"use client";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { plantSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plant } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type PlantData = z.infer<typeof plantSchema>;

const PlantForm = ({ plant }: { plant?: Plant }) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PlantData>({
    resolver: zodResolver(plantSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [slugSuggestion, setSlugSuggestion] = useState("");

  const makeSlug = (text: string) => {
    return text
      .replaceAll(" ", "-")
      .replaceAll("'", "")
      .replaceAll('"', "")
      .toLowerCase();
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      if (plant) await axios.patch("/api/plants/" + plant.slug, data);
      else await axios.post("/api/plants/", data);
      router.push("/dashboard/plants/");
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
      <form
        className="mx-auto my-8 flex max-w-2xl flex-col space-y-4"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          defaultValue={plant?.botanicalName}
          placeholder="Botanical name"
          className="input input-bordered w-full"
          {...register("botanicalName", {
            onChange: (e) => setSlugSuggestion(makeSlug(e.target.value)),
          })}
        />
        <ErrorMessage>{errors.botanicalName?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={plant?.slug || slugSuggestion}
          placeholder="Slug"
          className="input input-bordered w-full"
          {...register("slug")}
        />
        <ErrorMessage>{errors.slug?.message}</ErrorMessage>

        <select
          className="select w-full max-w-xs"
          defaultValue={plant?.genusPageSlug}
          {...register("genusPageSlug")}
        >
          <option value="alocasia">Alocasia</option>
          <option value="calathea-goeppertia">Calathea</option>
          <option value="ctenanthe">Ctenanthe</option>
          <option value="maranta">Maranta</option>
          <option value="peperomia">Peperomia</option>
          <option value="pilea">Pilea</option>
        </select>
        <ErrorMessage>{errors.genusPageSlug?.message}</ErrorMessage>

        <div className="flex justify-around">
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

          <label>
            <input
              defaultChecked={plant?.isUnsorted}
              type="checkbox"
              {...register("isUnsorted")}
            />{" "}
            Unsorted
          </label>
        </div>

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

        <input
          type="text"
          defaultValue={plant?.note || ""}
          placeholder="Note"
          className="input input-bordered w-full"
          {...register("note")}
        />
        <ErrorMessage>{errors.note?.message}</ErrorMessage>

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
            defaultChecked={plant?.hasImage}
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

        <input
          type="text"
          defaultValue={plant?.imagesForApproval || ""}
          placeholder="image for approval"
          className="input input-bordered w-full"
          {...register("imagesForApproval")}
        />
        <ErrorMessage>{errors.imagesForApproval?.message}</ErrorMessage>

        <button className="btn btn-black" disabled={isSubmitting}>
          {plant ? "Update Plant" : "Add New Plant"}{" "}
          {isSubmitting && <Spinner />}
        </button>
      </form>
    </div>
  );
};

export default PlantForm;
