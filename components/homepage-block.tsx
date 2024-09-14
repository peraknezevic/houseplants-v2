import { Article, GenusPage, PlantProfile } from "@prisma/client";

import Button from "./ui/button";
import Card from "./card";
import CardsGrid from "./cards-grid";
import H2 from "./ui/H2";

const HomePageBlock = ({
  title,
  link,
  data,
  imgFolder,
  pageFolder,
  btnTitle,
}: {
  title: string;
  link: string;
  data: PlantProfile[] | GenusPage[] | Article[];
  imgFolder: string;
  pageFolder: string;
  btnTitle: string;
}) => {
  return (
    <>
      <H2 title={title} />
      <CardsGrid>
        {data.map((item) => (
          <Card
            key={item.id}
            item={item}
            imgFolder={imgFolder}
            pageFolder={pageFolder}
          />
        ))}
      </CardsGrid>
      <Button link={link} title={btnTitle} />
    </>
  );
};

export default HomePageBlock;
