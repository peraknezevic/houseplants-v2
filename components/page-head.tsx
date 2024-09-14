import H1 from "./ui/H1";

const PageHead = ({
  title,
  pageType,
}: {
  title: string;
  pageType?: string;
}) => {
  return (
    <>
      {pageType && (
        <div className="text-center font-bold uppercase tracking-wider">
          {pageType}
        </div>
      )}
      <H1 title={title} />
    </>
  );
};

export default PageHead;
