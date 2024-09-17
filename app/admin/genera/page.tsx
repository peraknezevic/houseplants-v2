import Button from "@/components/ui/button";
import ItemAdmin from "@/components/ui/item-admin";
import { getGenera } from "@/lib/data";

const Page = async () => {
    const genera = await getGenera()
    if(!genera) return <div>Failed to load genera</div>
    return <>
        <Button link="/admin/genera/create" title="Create New Genera" />
        {genera.map((genus) => (
            <ItemAdmin key={genus.id} title={genus.title} href={`/admin/genera/${genus.id}`} status={genus.published} />
        ))}
    </>;
}

export default Page