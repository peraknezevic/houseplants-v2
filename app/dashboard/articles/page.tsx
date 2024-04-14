import Actions from "../../../components/admin/admin-actions-bar";
import ButtonAddNew from "@/components/button-add-new";
import { getArticles } from "@/lib/server-utils";

const cat = "articles";

const Pages = async () => {
  const articles = await getArticles();

  return (
    <div className="space-y-2">
      <div className="my-4 flex justify-between gap-4">
        <ButtonAddNew cat={cat} />
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
            <tr key={article.id}>
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
