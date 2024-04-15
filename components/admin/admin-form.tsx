"use client";

import "easymde/dist/easymde.min.css";

import { Controller, useForm } from "react-hook-form";

import SimpleMDE from "react-simplemde-editor";
import { getSchema } from "@/actions/actions";
import { makeSlug } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "../error-message";
import Spinner from "../spinner";

// type ArticleData = z.infer<typeof articlesSchema>;

type AdminFormProps = {
  category: "articles" | "plants" | "genera" | "plant-profiles" | "pages";
  actionType: "new" | "edit";
  slug?: string;
  onFormSubmission: () => void;
};

export const AdminForm = async ({
  category,
  actionType,
  slug,
  //   onFormSubmission,
}: AdminFormProps) => {
  const schema = await getSchema(category);
  type TItem = z.infer<typeof schema>;

  const router = useRouter();
  const {
    register,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<TItem>({
    resolver: zodResolver(schema),
  });

  return (
    <div className=" space-y-4 ">
      <form
        action={async () => {
          const result = await trigger();
          if (!result) return;

          //   onFormSubmission();

          const petData = getValues();
          if (actionType === "new") {
            await handleAddItem(category, formContent);
          } else if (actionType === "edit") {
            await handleEditItem(category, slug, formContent);
          }
        }}
        className="mx-auto flex max-w-2xl flex-col space-y-4"
      >
        <input
          type="text"
          defaultValue={article?.title}
          placeholder="Title"
          className="input input-bordered w-full"
          {...register("title", {
            onChange: (e) => setSlugSuggestion(makeSlug(e.target.value)),
          })}
        />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={article?.slug || slugSuggestion}
          placeholder="Slug"
          className="input input-bordered w-full"
          {...register("slug")}
        />
        <ErrorMessage>{errors.slug?.message}</ErrorMessage>

        <Controller
          name="intro"
          defaultValue={article?.intro || ""}
          control={control}
          render={({ field }) => <SimpleMDE placeholder="Intro" {...field} />}
        />
        <ErrorMessage>{errors.intro?.message}</ErrorMessage>

        <Controller
          name="content"
          defaultValue={article?.content}
          control={control}
          render={({ field }) => <SimpleMDE placeholder="Content" {...field} />}
        />
        <ErrorMessage>{errors.content?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={article?.imageCredits || ""}
          placeholder="Image Credits"
          className="input input-bordered w-full"
          {...register("imageCredits")}
        />
        <ErrorMessage>{errors.imageCredits?.message}</ErrorMessage>

        <select className="select w-full max-w-xs" {...register("published")}>
          <option value="PUBLISHED">Published</option>
          <option value="DRAFT">Draft</option>
          <option value="REVIEW">Review</option>
        </select>
        <ErrorMessage>{errors.published?.message}</ErrorMessage>

        <button className="btn btn-black" disabled={isSubmitting}>
          {article ? "Update Article" : "Add New Article"}{" "}
          {isSubmitting && <Spinner />}
        </button>
      </form>
    </div>
  );
};
