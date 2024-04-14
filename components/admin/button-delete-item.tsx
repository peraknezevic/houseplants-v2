import { AdminButtonProps } from "@/lib/types";
import { deleteItem } from "@/actions/actions";

export const ButtonDeleteItem = ({ slug, category }: AdminButtonProps) => {
  return (
    <form
      action={async () => {
        "use server";
        await deleteItem(slug, category);
      }}
    >
      <button type="submit" className="btn btn-red">
        Delete
      </button>
    </form>
  );
};
