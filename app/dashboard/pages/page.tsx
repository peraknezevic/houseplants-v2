import prisma from "@/prisma/client";
import PublishedBadge from "../_components/PublishedBadge";
import DeleteButton from "../_components/DeleteButton";
import EditButton from "../_components/EditButton";
import ViewPage from "../_components/ViewPage";
import AddNewButton from "../_components/AddNewButton";

const cat = "pages";

const Pages = async () => {
  const pages = await prisma.page.findMany();

  return (
    <div className="space-y-2">
      <div className="mb-4 mt-4 flex justify-between gap-4">
        <AddNewButton cat={cat} />
      </div>
      <div className="w-full overflow-x-auto">
        <table className="table border border-gray-200">
          <thead>
            <tr className="m-2">
              <th>Page Title</th>
              <th>Page Slug</th>
              <th>Published</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page) => (
              <tr key={page.id} className="hover:bg-gray-200">
                <td>{page.title}</td>
                <td>{page.slug}</td>
                <td>
                  <PublishedBadge published={page.published} />
                </td>
                <td className="space-x-2">
                  <ViewPage cat={cat} slug={page.slug} />

                  <EditButton cat={cat} slug={page.slug} />
                  <DeleteButton cat={cat} slug={page.slug} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Pages;
