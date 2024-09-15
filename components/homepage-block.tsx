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
  linkTitle,
}: {
  title: string;
  link: string;
  data: { id: string; title: string; slug: string }[];
  imgFolder: string;
  pageFolder: string;
  linkTitle: string;
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
      <div className="pb-16 pt-8 text-center underline">
        <Button link={link} title={linkTitle} />
      </div>
    </>
  );
};

export default HomePageBlock;
