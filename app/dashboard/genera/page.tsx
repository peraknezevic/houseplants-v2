import prisma from "@/prisma/client";
import PublishedBadge from "../_components/PublishedBadge";
import DeleteButton from "../_components/DeleteButton";
import EditButton from "../_components/EditButton";
import ViewPage from "../_components/ViewPage";
import AddNewButton from "../_components/AddNewButton";

const Pages = async () => {
  const cat = "genera";
  const genera = await prisma.genusPage.findMany();

  return (
    <div className="space-y-2">
      <div className="mb-4 mt-4 flex justify-between gap-4">
        <AddNewButton cat={cat} />
      </div>
      <div className="w-full overflow-x-auto">
        <table className="table border border-gray-200">
          <thead>
            <tr className="m-2">
              <th>Genus Title</th>
              <th>Genus Slug</th>
              <th>Published</th>
            </tr>
          </thead>
          <tbody>
            {genera.map((genus) => (
              <tr key={genus.id} className="hover:bg-gray-200">
                <td>{genus.title}</td>
                <td>{genus.slug}</td>
                <td>
                  <PublishedBadge published={genus.published} />
                </td>
                <td className="space-x-2">
                  <ViewPage cat={cat} slug={genus.slug} />
                  <EditButton cat={cat} slug={genus.slug} />
                  <DeleteButton cat={cat} slug={genus.slug} />
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
