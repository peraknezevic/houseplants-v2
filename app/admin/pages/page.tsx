import Button from "@/components/ui/button";
import ItemAdmin from "@/components/ui/item-admin";
import { getPages } from "@/lib/data";

const Page = async () => {
    const pages = await getPages()
    if(!pages) return <div>Failed to load pages</div>
    return <>
        <Button link="/admin/pages/create" title="Create New Page" />
        {pages.map((page) => (
            <ItemAdmin key={page.id} title={page.title} href={`/admin/pages/${page.id}`} status={page.published} />
        ))}
    </>;
}

export default Page