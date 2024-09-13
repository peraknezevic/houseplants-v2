"use client";

import "easymde/dist/easymde.min.css";

import { Controller, useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { TArticleForm, articleFormSchema } from "@/lib/validations";
import { addArticle, editArticle } from "@/actions/actions";
import { useState, useTransition } from "react";

import { Article } from "@prisma/client";
import ErrorMessage from "@/components/error-message";
import FormButton from "./button-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SimpleMDE from "react-simplemde-editor";
import { makeSlug } from "@/lib/utils";
import { register } from "module";
import { zodResolver } from "@hookform/resolvers/zod";

type ArticleFormProps = {
  actionType: "add" | "edit";
  article?: Article;
};
export default function ArticleForm({ actionType, article }: ArticleFormProps) {
  const [slugSuggestion, setSlugSuggestion] = useState("");
  const [isPending, startTransition] = useTransition();
  const {
    control,
    register,
    trigger,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<TArticleForm>({
    resolver: zodResolver(articleFormSchema),
    defaultValues:
      actionType === "edit"
        ? {
            title: article?.title,
            slug: article?.slug,
            intro: article?.intro || "",
            content: article?.content,
            imageCredits: article?.imageCredits || "",
            published: article?.published,
            language: article?.language,
          }
        : undefined,
  });

  const onSubmit = handleSubmit((data) => {
    startTransition(() => {
      if (actionType === "add") {
        addArticle(data);
      } else if ((actionType = "edit")) {
        editArticle(article?.id, data);
      }
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-1">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          {...(register("title"),
          {
            onChange: (e) => setSlugSuggestion(makeSlug(e.target.value)),
          })}
        />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
      </div>
      <div className="space-y-1">
        <Label htmlFor="slug">Slug</Label>
        <Input
          id="slug"
          {...register("slug")}
          defaultValue={article?.slug || slugSuggestion}
        />
        <ErrorMessage>{errors.slug?.message}</ErrorMessage>
      </div>
      <div className="space-y-1">
        <Controller
          name="content"
          defaultValue={article?.content}
          control={control}
          render={({ field }) => <SimpleMDE placeholder="Content" {...field} />}
        />
        <ErrorMessage>{errors.content?.message}</ErrorMessage>
      </div>
      <div className="space-y-1">
        <Controller
          name="content"
          defaultValue={article?.content}
          control={control}
          render={({ field }) => <SimpleMDE placeholder="Content" {...field} />}
        />
        <ErrorMessage>{errors.content?.message}</ErrorMessage>
      </div>

      <div className="space-y-1">
        <Label htmlFor="imageCredits">Slug</Label>
        <Input id="imageCredits" {...register("imageCredits")} />
        <ErrorMessage>{errors.imageCredits?.message}</ErrorMessage>
      </div>

      <Select {...register("published")}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="PUBLISHED">Published</SelectItem>
          <SelectItem value="DRAFT">Draft</SelectItem>
          <SelectItem value="REVIEW">Review</SelectItem>
        </SelectContent>
      </Select>

      <FormButton actionType={actionType} />
    </form>
  );
}
