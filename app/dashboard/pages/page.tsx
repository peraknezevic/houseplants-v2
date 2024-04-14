import Actions from "../../../components/admin/admin-actions-bar";
import AddNewButton from "../../../components/button-add-new";
import DeleteButton from "../_components/DeleteButton";
import EditButton from "../../../components/admin/button-edit-item";
import ViewButton from "../../../components/admin/button-view-item";
import prisma from "@/prisma/client";

const cat = "pages";

const Pages = async () => {
  const pages = await prisma.page.findMany();

  return (
    <div className="space-y-2">
      <div className="mb-4 mt-4 flex justify-between gap-4">
        <AddNewButton cat={cat} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pages.map((page) => (
            <tr key={page.id}>
              <td>
                <div
                  className={
                    (page.published === "PUBLISHED" &&
                      "font-bold text-emerald-800 dark:text-emerald-600") ||
                    (page.published === "DRAFT" &&
                      "dark:text-grey-400 font-bold text-gray-600") ||
                    (page.published === "REVIEW" &&
                      "font-bold text-rose-800 dark:text-rose-600") ||
                    ""
                  }
                >
                  {page.title}
                </div>
                <div>{page.slug}</div>
              </td>

              <Actions cat={cat} slug={page.slug} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Pages;
