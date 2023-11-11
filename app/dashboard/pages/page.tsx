import prisma from "@/prisma/client";
import DeleteButton from "../_components/DeleteButton";
import EditButton from "../_components/EditButton";
import ViewButton from "../_components/ViewButton";
import AddNewButton from "../_components/AddNewButton";

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
              <td
                className={
                  (page.published === "PUBLISHED" && "isPublished") ||
                  (page.published === "DRAFT" && "isDraft") ||
                  (page.published === "REVIEW" && "isReview") ||
                  ""
                }
              >
                {page.title}
              </td>
              <td className="space-x-2">
                <ViewButton cat={cat} slug={page.slug} />
                <EditButton cat={cat} slug={page.slug} />
                <DeleteButton cat={cat} slug={page.slug} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Pages;
