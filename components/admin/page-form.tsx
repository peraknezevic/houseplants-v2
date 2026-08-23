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
import { TPageForm, pageFormSchema } from "@/lib/validations";
import { addPage, deletePage, editPage } from "@/lib/actions";

import { Button } from "@/components/ui/button";
import DeleteButton from "@/components/admin/delete-button";
import { Input } from "@/components/ui/input";
import MarkdownEditor from "@/components/admin/markdown-editor";
import { Page } from "@prisma/client";
import { removeChars } from "@/lib/utils";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

const PageForm = ({ page }: { page?: Page }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<TPageForm>({
    resolver: zodResolver(pageFormSchema),
    defaultValues: {
      title: page?.title ?? "",
      slug: page?.slug ?? "",
      content: page?.content ?? "",
      published: page?.published ?? "DRAFT",
    },
  });

  const onSubmit = (data: TPageForm) => {
    startTransition(async () => {
      const result = page
        ? await editPage(page.id, data)
        : await addPage(data);

      if (result?.success) {
        toast.success(page ? "Page updated" : "Page created");
        router.push("/admin/pages");
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
                    if (!page) {
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
          {page && (
            <DeleteButton
              id={page.id}
              itemLabel={page.title}
              action={deletePage}
              onDeleted={() => {
                router.push("/admin/pages");
                router.refresh();
              }}
            />
          )}
        </div>
      </form>
    </Form>
  );
};

export default PageForm;
