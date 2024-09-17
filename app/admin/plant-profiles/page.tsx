import Button from "@/components/ui/button";
import ItemAdmin from "@/components/ui/item-admin";
import { getPlantProfiles } from "@/lib/data";

const Page = async () => {
    const plants = await getPlantProfiles()
    if (!plants) return <div>Failed to load articles</div>
    
    return <>
        <Button link="/admin/plant-profiles/create" title="Create New Plant profile" />
        {plants.map((plant) => (
            <ItemAdmin key={plant.id} title={plant.title} href={`/admin/plant-profiles/${plant.id}`} status={plant.published} />
        ))}
    </>;
}

export default Page