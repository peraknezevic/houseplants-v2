"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { TPlantProfileForm, plantProfileFormSchema } from "@/lib/validations";
import {
  addPlantProfile,
  deletePlantProfile,
  editPlantProfile,
} from "@/lib/actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import DeleteButton from "@/components/admin/delete-button";
import { Input } from "@/components/ui/input";
import { PlantProfile } from "@prisma/client";
import { Textarea } from "@/components/ui/textarea";
import { removeChars } from "@/lib/utils";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

const textFields = [
  { name: "genus", label: "Genus" },
  { name: "synonyms", label: "Synonyms" },
  { name: "namedBy", label: "Named by" },
  { name: "inventor", label: "Inventor" },
  { name: "patent", label: "Patent" },
  { name: "tradeNames", label: "Trade names" },
  { name: "family", label: "Family" },
  { name: "subFamily", label: "Sub-family" },
  { name: "soilPH", label: "Soil pH" },
  { name: "imageCredits", label: "Image credits" },
] as const;

// English fields that have a Serbian-language counterpart on the same row
// (see CLAUDE.md: EN/SR content lives side by side on PlantProfile, no
// `language` enum), rendered together so both are edited in one place.
const pairedFields = [
  { en: "commonNames", sr: "narodniNaziv", label: "Common names" },
  { en: "nativeArea", sr: "podrucjePorekla", label: "Native area" },
  { en: "watering", sr: "zalivanje", label: "Watering" },
  { en: "soil", sr: "supstrat", label: "Soil" },
  { en: "feeding", sr: "prihrana", label: "Feeding" },
  { en: "matureSize", sr: "velicina", label: "Mature size" },
  { en: "repotting", sr: "presadjivanje", label: "Repotting" },
  { en: "flower", sr: "cvet", label: "Flower" },
  { en: "propagation", sr: "razmnozavanje", label: "Propagation" },
  { en: "pests", sr: "stetocine", label: "Pests" },
  { en: "diseases", sr: "bolesti", label: "Diseases" },
] as const;

const PlantProfileForm = ({ plantProfile }: { plantProfile?: PlantProfile }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<TPlantProfileForm>({
    resolver: zodResolver(plantProfileFormSchema),
    defaultValues: {
      slug: plantProfile?.slug ?? "",
      title: plantProfile?.title ?? "",
      botanicalName: plantProfile?.botanicalName ?? "",
      genus: plantProfile?.genus ?? "",
      synonyms: plantProfile?.synonyms ?? "",
      namedBy: plantProfile?.namedBy ?? "",
      inventor: plantProfile?.inventor ?? "",
      patent: plantProfile?.patent ?? "",
      tradeNames: plantProfile?.tradeNames ?? "",
      commonNames: plantProfile?.commonNames ?? "",
      narodniNaziv: plantProfile?.narodniNaziv ?? "",
      family: plantProfile?.family ?? "",
      subFamily: plantProfile?.subFamily ?? "",
      nativeArea: plantProfile?.nativeArea ?? "",
      podrucjePorekla: plantProfile?.podrucjePorekla ?? "",
      care: plantProfile?.care ?? "EASY",
      light: plantProfile?.light ?? "BRIGHT_LIGHT",
      watering: plantProfile?.watering ?? "",
      zalivanje: plantProfile?.zalivanje ?? "",
      soil: plantProfile?.soil ?? "",
      supstrat: plantProfile?.supstrat ?? "",
      soilPH: plantProfile?.soilPH ?? "",
      humidity: plantProfile?.humidity ?? "MEDIUM",
      feeding: plantProfile?.feeding ?? "",
      prihrana: plantProfile?.prihrana ?? "",
      minimalT: plantProfile?.minimalT ?? 15,
      optimalT: plantProfile?.optimalT ?? 21,
      speedOfGrowth: plantProfile?.speedOfGrowth ?? "MODERATE",
      matureSize: plantProfile?.matureSize ?? "",
      velicina: plantProfile?.velicina ?? "",
      repotting: plantProfile?.repotting ?? "",
      presadjivanje: plantProfile?.presadjivanje ?? "",
      flower: plantProfile?.flower ?? "",
      cvet: plantProfile?.cvet ?? "",
      propagation: plantProfile?.propagation ?? "",
      razmnozavanje: plantProfile?.razmnozavanje ?? "",
      toxicity: plantProfile?.toxicity ?? "TOXIC",
      pests: plantProfile?.pests ?? "",
      stetocine: plantProfile?.stetocine ?? "",
      diseases: plantProfile?.diseases ?? "",
      bolesti: plantProfile?.bolesti ?? "",
      imageCredits: plantProfile?.imageCredits ?? "",
      notes: plantProfile?.notes ?? "",
      beleske: plantProfile?.beleske ?? "",
      published: plantProfile?.published ?? "DRAFT",
    },
  });

  const onSubmit = (data: TPlantProfileForm) => {
    startTransition(async () => {
      const result = plantProfile
        ? await editPlantProfile(plantProfile.id, data)
        : await addPlantProfile(data);

      if (result?.success) {
        toast.success(
          plantProfile ? "Plant profile updated" : "Plant profile created",
        );
        router.push("/admin/plant-profiles");
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
                    if (!plantProfile) {
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
          name="botanicalName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Botanical name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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

        {pairedFields.map((f) => (
          <div key={f.en} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name={f.en}
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
            <FormField
              control={form.control}
              name={f.sr}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{f.label} (Serbian)</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value ?? ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="minimalT"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Minimal temperature (°C)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="optimalT"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Optimal temperature (°C)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="care"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Care</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="EASY">Easy</SelectItem>
                  <SelectItem value="AVARAGE">Average</SelectItem>
                  <SelectItem value="DIFFICULT">Difficult</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="light"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Light</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="LOW_LIGHT">Low light</SelectItem>
                  <SelectItem value="PARTIAL_SHADE">Partial shade</SelectItem>
                  <SelectItem value="MEDIUM_LIGHT">Medium light</SelectItem>
                  <SelectItem value="BRIGHT_LIGHT">Bright light</SelectItem>
                  <SelectItem value="FULL_SUN">Full sun</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="humidity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Humidity</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="LOW">Low</SelectItem>
                  <SelectItem value="MEDIUM">Medium</SelectItem>
                  <SelectItem value="HIGH">High</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="speedOfGrowth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Speed of growth</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="SLOW">Slow</SelectItem>
                  <SelectItem value="MODERATE">Moderate</SelectItem>
                  <SelectItem value="FAST">Fast</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="toxicity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Toxicity</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="TOXIC">Toxic</SelectItem>
                  <SelectItem value="NOT_TOXIC">Not toxic</SelectItem>
                  <SelectItem value="NO_INFO">No info</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes</FormLabel>
                <FormControl>
                  <Textarea {...field} value={field.value ?? ""} rows={4} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="beleske"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes (Serbian)</FormLabel>
                <FormControl>
                  <Textarea {...field} value={field.value ?? ""} rows={4} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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
          {plantProfile && (
            <DeleteButton
              id={plantProfile.id}
              itemLabel={plantProfile.title}
              action={deletePlantProfile}
              onDeleted={() => {
                router.push("/admin/plant-profiles");
                router.refresh();
              }}
            />
          )}
        </div>
      </form>
    </Form>
  );
};

export default PlantProfileForm;
