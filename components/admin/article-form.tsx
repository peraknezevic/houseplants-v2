"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TArticleForm, articleFormSchema } from "@/lib/validations";
import { addArticle, deleteArticle, editArticle } from "@/lib/actions";

import { Article } from "@prisma/client";
import { Button } from "@/components/ui/button";
import DeleteButton from "@/components/admin/delete-button";
import { Input } from "@/components/ui/input";
import MarkdownEditor from "@/components/admin/markdown-editor";
import { Textarea } from "@/components/ui/textarea";
import { removeChars } from "@/lib/utils";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

const ArticleForm = ({ article }: { article?: Article }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<TArticleForm>({
    resolver: zodResolver(articleFormSchema),
    defaultValues: {
      title: article?.title ?? "",
      slug: article?.slug ?? "",
      intro: article?.intro ?? "",
      content: article?.content ?? "",
      imageCredits: article?.imageCredits ?? "",
      published: article?.published ?? "DRAFT",
      language: article?.language ?? "ENGLISH",
    },
  });

  const onSubmit = (data: TArticleForm) => {
    startTransition(async () => {
      const result = article
        ? await editArticle(article.id, data)
        : await addArticle(data);

      if (result?.success) {
        toast.success(article ? "Article updated" : "Article created");
        router.push("/admin/articles");
        router.refresh();
      } else {
        toast.error(result?.message ?? "Something went wrong");
      }
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-2xl space-y-6"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    if (!article) {
                      form.setValue("slug", removeChars(e.target.value));
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="intro"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Intro</FormLabel>
              <FormControl>
                <Textarea {...field} value={field.value ?? ""} rows={3} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <MarkdownEditor
                value={field.value ?? ""}
                onChange={field.onChange}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imageCredits"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image credits</FormLabel>
              <FormControl>
                <Input {...field} value={field.value ?? ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Language</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="ENGLISH">English</SelectItem>
                  <SelectItem value="SRPSKI">Srpski</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="published"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="PUBLISHED">Published</SelectItem>
                  <SelectItem value="DRAFT">Draft</SelectItem>
                  <SelectItem value="REVIEW">Review</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-4">
          <Button type="submit" disabled={isPending}>
            {isPending ? "Saving…" : "Save"}
          </Button>
          {article && (
            <DeleteButton
              id={article.id}
              itemLabel={article.title}
              action={deleteArticle}
              onDeleted={() => {
                router.push("/admin/articles");
                router.refresh();
              }}
            />
          )}
        </div>
      </form>
    </Form>
  );
};

export default ArticleForm;
