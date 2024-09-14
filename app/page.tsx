import HomePageBlock from "@/components/homepage-block";
import { Metadata } from "next";
import { getHomePageData } from "@/lib/data";

const Home = async () => {
  const [plants, genera, articles] = await getHomePageData();

  return (
    <>
      <HomePageBlock
        title="Latest Plant Profiles"
        data={plants}
        imgFolder="plants"
        pageFolder="plant-profiles"
        btnTitle="See All Plant Profiles"
        link="/plant-profiles"
      />
      <HomePageBlock
        title="Recently Updated Genera Pages"
        data={genera}
        imgFolder="genus"
        pageFolder="genus"
        btnTitle="See All Genera Pages"
        link="/genus"
      />
      <HomePageBlock
        title="Latest Articles"
        data={articles}
        imgFolder="articles"
        pageFolder="articles"
        btnTitle="See All Articles"
        link="/articles"
      />
    </>
  );
};

export const metadata: Metadata = {
  title: "Houseplants",
  description: "All about your indoor plants",
};

export default Home;
