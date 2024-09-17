import Button from "@/components/ui/button";
import ItemAdmin from "@/components/ui/item-admin";
import { getArticles } from "@/lib/data";

const Page = async () => {
    const articles = await getArticles()
    if(!articles) return <div>Failed to load articles</div>
    return <>
        <Button link="/admin/articles/create" title="Create New Article" />
        {articles.map((article) => (
            <ItemAdmin key={article.id} title={article.title} href={`/admin/articles/${article.id}`} status={article.published} />
        ))}
    </>;
}

export default Page