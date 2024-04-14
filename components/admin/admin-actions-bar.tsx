import { AdminButtonProps } from "@/lib/types";
import { ButtonDeleteItem } from "@/components/admin/button-delete-item";
import { ButtonEditItem } from "@/components/admin/button-edit-item";
import { ButtonViewItem } from "@/components/admin/button-view-item";

export function AdminActionsBar({ category, slug }: AdminButtonProps) {
  return (
    <td className="flex space-x-2 lg:w-1/4">
      <ButtonViewItem category={category} slug={slug} />
      <ButtonEditItem category={category} slug={slug} />
      <ButtonDeleteItem category={category} slug={slug} />
    </td>
  );
}
