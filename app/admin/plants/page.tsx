import Button from "@/components/ui/button";
import ItemAdmin from "@/components/ui/item-admin";
import { getPlants } from "@/lib/data";

const Page = async () => {
    const plants = await getPlants()
    if(!plants) return <div>Failed to load articles</div>
    return <>
        <Button link="/admin/plants/create" title="Create New Plant" />
        {plants.map((plant) => (
            <ItemAdmin key={plant.id} title={plant.title} href={`/admin/plants/${plant.id}`} status={plant.published} />
        ))}
    </>;
}

export default Page