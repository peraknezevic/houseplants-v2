"use client";

import {
  articleSchema,
  generaSchema,
  pageSchema,
  plantProfileSchema,
  plantSchema,
} from "@/lib/validations";

import { Field } from "@/lib/types";
import Input from "../ui/input";
import Label from "../ui/label";
import Select from "../ui/select";
import Textarea from "../ui/textarea";
import { ZodIssue } from "zod";
import { useActionState } from "react";
import {z} from "zod";

const Form = ({
  content,
  fields,
  formAction,
}: {
  content?: z.infer<typeof articleSchema> | z.infer<typeof pageSchema> | z.infer<typeof plantSchema> | z.infer<typeof generaSchema> | z.infer<typeof plantProfileSchema>;
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
    <form action={action} className="flex gap-8 flex-wrap">
      {content && <Input name="id" type="hidden" defaultValue={content.id} />}
      {fields.map((field) => (
        <div key={field.name} className="flex gap-2">
          
          {(field.type === "checkbox") && (
            <div className="flex items-baseline w-1/4">
            <Input
              name={field.name}
              type={field.type}
              placeholder={field.label}
              defaultValue={field.checked}
              />
            <Label htmlFor={field.name} content={field.label} />
            </div>
          )}

          {(field.type === "text" || field.type === "number" || field.type === "password") && (
            <div className="flex items-baseline ">
            <Label htmlFor={field.name} content={field.label} />
            <Input
              name={field.name}
              type={field.type}
              placeholder={field.label}
              defaultValue={
                (content && content[field.name as keyof typeof content]) || ""
              }
              />
              </div>
          )}

          {field.element === "textarea" && (
            <div className="flex items-baseline w-screen">
            <Label htmlFor={field.name} content={field.label} />
            <Textarea
              name={field.name}
              placeholder={field.label}
              defaultValue={
                (content && content[field.name as keyof typeof content]) || ""
              }
              />
            </div>
          )}

          {field.element === "select" && (
            <div className="flex items-baseline w-screen">
            <Label htmlFor={field.name} content={field.label} />
            <Select
              name={field.name}
              options={field.options || []}
              defaultValue={
                (content && content[field.name as keyof typeof content]) || ""
              }
              />
            </div>
          )}
          {state && (
            <ErrorMessages errors={findErrors(field.name, state.errors)} />
          )}
        </div>
      ))}
      <button type="submit">
        Submit
      </button>
    </form>
  );
};

const ErrorMessages = ({ errors }: { errors: string[] }) => {
  if (errors.length === 0) return null;

  const text = errors.join(", ");

  return <div className="peer text-red-600">{text}</div>;
};

const findErrors = (fieldName: string, errors: ZodIssue[]) => {
  return errors
    .filter((item) => item.path.includes(fieldName))
    .map((item) => item.message);
};

export default Form;
