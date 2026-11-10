"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { TGeneraForm, generaFormSchema } from "@/lib/validations";
import { addGenusPage, deleteGenusPage, editGenusPage } from "@/lib/actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import DeleteButton from "@/components/admin/delete-button";
import { GenusPage } from "@prisma/client";
import { Input } from "@/components/ui/input";
import MarkdownEditor from "@/components/admin/markdown-editor";
import { Textarea } from "@/components/ui/textarea";
import { removeChars } from "@/lib/utils";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

const GenusForm = ({ genusPage }: { genusPage?: GenusPage }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<TGeneraForm>({
    resolver: zodResolver(generaFormSchema),
    defaultValues: {
      title: genusPage?.title ?? "",
      slug: genusPage?.slug ?? "",
      intro: genusPage?.intro ?? "",
      thanks: genusPage?.thanks ?? "",
      changeLog: genusPage?.changeLog ?? "",
      published: genusPage?.published ?? "DRAFT",
    },
  });

  const onSubmit = (data: TGeneraForm) => {
    startTransition(async () => {
      const result = genusPage
        ? await editGenusPage(genusPage.id, data)
        : await addGenusPage(data);

      if (result?.success) {
        toast.success(genusPage ? "Genus page updated" : "Genus page created");
        router.push("/admin/genus");
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
                    if (!genusPage) {
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
                <MarkdownEditor
                  value={field.value ?? ""}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="changeLog"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Change log</FormLabel>
              <FormControl>
                <MarkdownEditor
                  value={field.value ?? ""}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="thanks"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Thanks</FormLabel>
              <FormControl>
                <Textarea {...field} value={field.value ?? ""} rows={3} />
              </FormControl>
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
          {genusPage && (
            <DeleteButton
              id={genusPage.id}
              itemLabel={genusPage.title}
              action={deleteGenusPage}
              onDeleted={() => {
                router.push("/admin/genus");
                router.refresh();
              }}
            />
          )}
        </div>
      </form>
    </Form>
  );
};

export default GenusForm;
