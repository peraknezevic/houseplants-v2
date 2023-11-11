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
      <h1>{title}</h1>
    </div>
  );
};

export default PageHead;
