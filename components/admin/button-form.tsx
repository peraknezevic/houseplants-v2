import { Button } from "../ui/button";

type FormButtonProps = {
  actionType: "add" | "edit";
};

export default function FormButton({ actionType }: FormButtonProps) {
  return (
    <Button type="submit" className="mt-5 self-end">
      {actionType === "add" ? "Add new pet" : "Edit pet"}
    </Button>
  );
}
