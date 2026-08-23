import { Button } from "@/components/ui/button";
import ContentTable from "@/components/admin/content-table";
import Link from "next/link";
import { deleteArticle } from "@/lib/actions";
import { getArticles } from "@/lib/data";

const AdminArticlesPage = async () => {
  const articles = await getArticles();

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Articles</h1>
        <Button asChild>
          <Link href="/admin/articles/new">New article</Link>
        </Button>
      </div>
      <ContentTable
        items={articles}
        editHrefBase="/admin/articles"
        deleteAction={deleteArticle}
      />
    </div>
  );
};

export default AdminArticlesPage;
