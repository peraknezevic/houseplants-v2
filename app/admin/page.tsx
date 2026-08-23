import {
  getArticles,
  getGeneras,
  getPages,
  getPlantProfiles,
  getPlants,
} from "@/lib/data";

import Link from "next/link";

const AdminPage = async () => {
  const [articles, generas, plantProfiles, pages, plants] = await Promise.all(
    [getArticles(), getGeneras(), getPlantProfiles(), getPages(), getPlants()],
  );

  const stats = [
    { title: "Articles", count: articles.length, href: "/admin/articles" },
    { title: "Genus pages", count: generas.length, href: "/admin/genus" },
    {
      title: "Plant profiles",
      count: plantProfiles.length,
      href: "/admin/plant-profiles",
    },
    { title: "Plants", count: plants.length, href: "/admin/plants" },
    { title: "Pages", count: pages.length, href: "/admin/pages" },
  ];

  return (
    <div>
      <h1 className="mb-6 text-3xl font-semibold">Admin</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {stats.map((stat) => {
          const card = (
            <div className="rounded-lg border border-emerald-950/10 p-4 dark:border-zinc-300/10">
              <p className="text-3xl font-semibold">{stat.count}</p>
              <p className="text-sm opacity-70">{stat.title}</p>
            </div>
          );

          return stat.href ? (
            <Link
              key={stat.title}
              href={stat.href}
              className="transition-colors hover:bg-emerald-950/5 dark:hover:bg-zinc-300/5"
            >
              {card}
            </Link>
          ) : (
            <div key={stat.title}>{card}</div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminPage;
