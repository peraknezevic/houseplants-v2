"use client";

import {
  articleSchema,
  generaSchema,
  pageSchema,
  plantProfileSchema,
  plantSchema,
} from "@/lib/validations";

import Button from "./ui/button";
import ErrorMessage from "./error-message";
import { Field } from "@/lib/types";
import Input from "./ui/input";
import Select from "./ui/select";
import Textarea from "./ui/textarea";
import { ZodIssue } from "zod";
import { findErrors } from "@/lib/utils";
import { twMerge } from "tailwind-merge";
import { useActionState } from "react";
import { z } from "zod";

const Form = ({
  content,
  fields,
  formAction,
}: {
  content?:
    | z.infer<typeof articleSchema>
    | z.infer<typeof pageSchema>
    | z.infer<typeof plantSchema>
    | z.infer<typeof generaSchema>
    | z.infer<typeof plantProfileSchema>;
  fields: Field[];
  formAction: (
    _prevState: any,
    params: FormData,
  ) => Promise<{ errors: ZodIssue[] } | undefined>;
}) => {
  const [state, action] = useActionState(formAction, {
    errors: [],
  });

  return (
    <form action={action} className="grid-col-6 grid gap-8">
      {content && <input name="id" type="hidden" defaultValue={content.id} />}
      {fields.map((field) => (
        <div
          key={field.name}
          className={twMerge(
            "col-span-6",
            field.type === "checkbox" && "col-span-2",
            field.element === "select" && "col-span-3",
          )}
        >
          {field.type === "checkbox" && (
            <Input
              name={field.name}
              label={field.label}
              type={field.type}
              placeholder={field.label}
              defaultValue={field.checked}
            />
          )}

          {(field.type === "text" ||
            field.type === "number" ||
            field.type === "password") && (
            <Input
              name={field.name}
              label={field.label}
              type={field.type}
              placeholder={field.label}
              defaultValue={
                (content && content[field.name as keyof typeof content]) || ""
              }
            />
          )}

          {field.element === "textarea" && (
            <Textarea
              name={field.name}
              label={field.label}
              placeholder={field.label}
              defaultValue={
                (content && content[field.name as keyof typeof content]) || ""
              }
            />
          )}

          {field.element === "select" && (
            <Select
              name={field.name}
              label={field.label}
              options={field.options || []}
              defaultValue={
                (content && content[field.name as keyof typeof content]) || ""
              }
            />
          )}
          {state && (
            <ErrorMessage errors={findErrors(field.name, state.errors)} />
          )}
        </div>
      ))}
      <div className="col-span-6">
        <Button type="submit" title="Submit" />
      </div>
    </form>
  );
};

export default Form;
