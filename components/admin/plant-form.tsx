"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { TPlantForm, plantFormSchema } from "@/lib/validations";
import { addPlant, deletePlant, editPlant } from "@/lib/actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import DeleteButton from "@/components/admin/delete-button";
import { Input } from "@/components/ui/input";
import { Plant } from "@prisma/client";
import { removeChars } from "@/lib/utils";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

type GenusOption = { id: string; title: string; slug: string };

const booleanFields = [
  { name: "isSpecies", label: "Species" },
  { name: "isCultivar", label: "Cultivar" },
  { name: "isHybrid", label: "Hybrid" },
  { name: "isUnsorted", label: "Unsorted" },
  { name: "hasProfile", label: "Has profile" },
  { name: "hasImage", label: "Has image" },
] as const;

const textFields = [
  { name: "synonyms", label: "Synonyms" },
  { name: "tradeNames", label: "Trade names" },
  { name: "commonNames", label: "Common names" },
  { name: "namedBy", label: "Named by" },
  { name: "inventor", label: "Inventor" },
  { name: "patent", label: "Patent" },
  { name: "nativeArea", label: "Native area" },
  { name: "note", label: "Note" },
  { name: "children", label: "Children" },
  { name: "parents", label: "Parents" },
  { name: "imageCredits", label: "Image credits" },
  { name: "imagesForApproval", label: "Images for approval" },
] as const;

const PlantForm = ({
  plant,
  generas,
}: {
  plant?: Plant;
  generas: GenusOption[];
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<TPlantForm>({
    resolver: zodResolver(plantFormSchema),
    defaultValues: {
      slug: plant?.slug ?? "",
      title: plant?.title ?? "",
      genusPageSlug: plant?.genusPageSlug ?? "",
      hasProfile: plant?.hasProfile ?? false,
      isSpecies: plant?.isSpecies ?? true,
      isCultivar: plant?.isCultivar ?? false,
      isHybrid: plant?.isHybrid ?? false,
      isUnsorted: plant?.isUnsorted ?? false,
      hasImage: plant?.hasImage ?? true,
      children: plant?.children ?? "",
      parents: plant?.parents ?? "",
      synonyms: plant?.synonyms ?? "",
      tradeNames: plant?.tradeNames ?? "",
      commonNames: plant?.commonNames ?? "",
      namedBy: plant?.namedBy ?? "",
      inventor: plant?.inventor ?? "",
      patent: plant?.patent ?? "",
      nativeArea: plant?.nativeArea ?? "",
      note: plant?.note ?? "",
      imageCredits: plant?.imageCredits ?? "",
      imagesForApproval: plant?.imagesForApproval ?? "",
      published: plant?.published ?? "DRAFT",
    },
  });

  const onSubmit = (data: TPlantForm) => {
    startTransition(async () => {
      const result = plant
        ? await editPlant(plant.id, data)
        : await addPlant(data);

      if (result?.success) {
        toast.success(plant ? "Plant updated" : "Plant created");
        router.push("/admin/plants");
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
                    if (!plant) {
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
          name="genusPageSlug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Genus</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a genus" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {generas.map((genus) => (
                    <SelectItem key={genus.id} value={genus.slug}>
                      {genus.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {booleanFields.map((f) => (
            <FormField
              key={f.name}
              control={form.control}
              name={f.name}
              render={({ field }) => (
                <FormItem className="flex flex-row items-center gap-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">{f.label}</FormLabel>
                </FormItem>
              )}
            />
          ))}
        </div>

        {textFields.map((f) => (
          <FormField
            key={f.name}
            control={form.control}
            name={f.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{f.label}</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value ?? ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

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
          {plant && (
            <DeleteButton
              id={plant.id}
              itemLabel={plant.title}
              action={deletePlant}
              onDeleted={() => {
                router.push("/admin/plants");
                router.refresh();
              }}
            />
          )}
        </div>
      </form>
    </Form>
  );
};

export default PlantForm;
