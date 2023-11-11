import prisma from "@/prisma/client";
import DeleteButton from "../_components/DeleteButton";
import EditButton from "../_components/EditButton";
import ViewButton from "../_components/ViewButton";
import AddNewButton from "../_components/AddNewButton";

const cat = "articles";

const Pages = async () => {
  const articles = await prisma.article.findMany();

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
          {articles.map((article) => (
            <tr key={article.id} className="hover:bg-gray-200">
              <td
                className={
                  (article.published === "PUBLISHED" && "isPublished") ||
                  (article.published === "DRAFT" && "isDraft") ||
                  (article.published === "REVIEW" && "isReview") ||
                  ""
                }
              >
                {article.title}
              </td>
              <td className="space-x-2">
                <ViewButton cat={cat} slug={article.slug} />
                <EditButton cat={cat} slug={article.slug} />
                <DeleteButton cat={cat} slug={article.slug} />
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
