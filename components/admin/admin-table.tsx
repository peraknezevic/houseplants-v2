import { Article, GenusPage, Page, Plant, PlantProfile } from "@prisma/client";

import { AdminActionsBar } from "./admin-actions-bar";
import { ButtonAddNew } from "@/components/admin/button-add-new";

type AdminTableProps = {
  category: string;
  items?: Article[] | GenusPage[] | Page[] | Plant[] | PlantProfile[];
};

export const AdminTable = ({ category, items }: AdminTableProps) => {
  if (!items)
    return <p>Error, failed to fetch data or the category does not exist</p>;
  return (
    <div className="space-y-2">
      <div className="my-4 flex justify-between gap-4">
        <ButtonAddNew category={category} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td className="lg:w-3/4">
                  <div>{item.title}</div>
                  <div>{item.slug}</div>
                </td>

                <AdminActionsBar category={category} slug={item.slug} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
