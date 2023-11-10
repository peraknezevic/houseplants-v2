import React from "react";

interface Props {
  title: string;
  pageType?: string;
}

const PageHead = ({ title, pageType }: Props) => {
  return (
    <div>
      {pageType && (
        <span className="block text-center font-bold uppercase tracking-wider">
          {pageType}
        </span>
      )}
      <h1 className="leading mb-16 mt-8 text-center text-6xl font-bold">
        {title}
      </h1>
    </div>
  );
};

export default PageHead;
