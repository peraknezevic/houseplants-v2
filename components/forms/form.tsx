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
import { useFormState } from "react-dom";
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
  const [state, action] = useFormState(formAction, {
    errors: [],
  });

  return (
    <form action={action} className="flex flex-col gap-8">
      {content && <Input name="id" type="hidden" defaultValue={content.id} />}
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col gap-2">
          <Label htmlFor={field.name} content={field.label} />
          {field.element === "input" && (
            <Input
              name={field.name}
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
              placeholder={field.label}
              defaultValue={
                (content && content[field.name as keyof typeof content]) || ""
              }
            />
          )}

          {field.element === "select" && (
            <Select
              name={field.name}
              options={field.options || []}
              defaultValue={
                (content && content[field.name as keyof typeof content]) || ""
              }
            />
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
