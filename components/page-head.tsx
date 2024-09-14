type PageHeadProps = {
  title: string;
  pageType?: string;
};

const PageHead = ({ title, pageType }: PageHeadProps) => {
  return (
    <>
      {pageType && (
        <div className="text-center font-bold uppercase tracking-wider">
          {pageType}
        </div>
      )}
      <h1 className="mb-8 text-center text-4xl font-semibold leading-relaxed md:mb-16 md:mt-8 md:text-6xl">
        {title}
      </h1>
    </>
  );
};

export default PageHead;
