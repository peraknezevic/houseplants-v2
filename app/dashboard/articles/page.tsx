import prisma from "@/prisma/client";
import DeleteButton from "../_components/DeleteButton";
import EditButton from "../_components/EditButton";
import ViewButton from "../_components/ViewButton";
import AddNewButton from "../_components/AddNewButton";
import Actions from "../_components/Actions";
import { profile } from "console";

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
              <td className="lg:w-3/4">
                <div
                  className={
                    (article.published === "PUBLISHED" &&
                      "font-bold text-emerald-800") ||
                    (article.published === "DRAFT" &&
                      "font-bold text-gray-800") ||
                    (article.published === "REVIEW" &&
                      "font-bold text-rose-800") ||
                    ""
                  }
                >
                  {article.title}
                </div>
                <div>{article.slug}</div>
              </td>

              <Actions cat={cat} slug={article.slug} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Pages;
