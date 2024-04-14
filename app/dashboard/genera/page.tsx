import Actions from "../../../components/admin/admin-actions-bar";
import AddNewButton from "../../../components/button-add-new";
import prisma from "@/prisma/client";

const Pages = async () => {
  const cat = "genera";
  const genera = await prisma.genusPage.findMany();

  return (
    <div className="space-y-2">
      <div className="mb-4 mt-4 flex justify-between gap-4">
        <AddNewButton cat={cat} />
      </div>
      <div className="w-full overflow-x-auto">
        <table>
          <thead>
            <tr className="m-2">
              <th>Genus Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {genera.map((genus) => (
              <tr key={genus.id}>
                <td className="lg:w-3/4">
                  <div
                    className={
                      (genus.published === "PUBLISHED" &&
                        "font-bold text-emerald-800 dark:text-emerald-600") ||
                      (genus.published === "DRAFT" &&
                        "font-bold text-gray-800 dark:text-gray-600") ||
                      (genus.published === "REVIEW" &&
                        "font-bold text-rose-800 dark:text-rose-600") ||
                      ""
                    }
                  >
                    {genus.title}
                  </div>
                  <div>{genus.slug}</div>
                </td>
                <Actions cat={cat} slug={genus.slug} />
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
