"use client";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { articlesSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Article } from "@prisma/client";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";

type ArticleData = z.infer<typeof articlesSchema>;

const ArticleForm = ({ article }: { article?: Article }) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ArticleData>({
    resolver: zodResolver(articlesSchema),
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
      if (article) await axios.patch("/api/articles/" + article.slug, data);
      else await axios.post("/api/articles/", data);
      router.push("/dashboard/articles");
      router.refresh();
    } catch (error) {
      setIsSubmitting(false);
      setError("Unexpected error accured");
    }
  });

  return (
    <div className=" space-y-4 ">
      {error && (
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      )}
      <form
        className="mx-auto flex max-w-2xl flex-col space-y-4"
        onSubmit={onSubmit}
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

export default ArticleForm;
