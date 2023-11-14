"use client";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { pagesSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Page } from "@prisma/client";
import SimpleMDE from "react-simplemde-editor";

type PageData = z.infer<typeof pagesSchema>;

const PageForm = ({ page }: { page?: Page }) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PageData>({
    resolver: zodResolver(pagesSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      if (page) await axios.patch("/api/pages/" + page.slug, data);
      else await axios.post("/api/pages", data);
      router.push("/dashboard/pages");
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
          defaultValue={page?.title}
          placeholder="Title"
          className="input input-bordered w-full"
          {...register("title")}
        />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <input
          type="text"
          defaultValue={page?.slug}
          placeholder="Slug"
          className="input input-bordered w-full"
          {...register("slug")}
        />
        <ErrorMessage>{errors.slug?.message}</ErrorMessage>

        <Controller
          name="content"
          defaultValue={page?.content}
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

        <button className="btn btn-black" disabled={isSubmitting}>
          {page ? "Update Page" : "Add New Page"} {isSubmitting && <Spinner />}
        </button>
      </form>
    </div>
  );
};

export default PageForm;
