"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageCount = Math.ceil(itemCount / pageSize);

  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <p>
        Page {currentPage} of {pageCount}
      </p>
      <button
        onClick={() => changePage(1)}
        className="btn btn-neutral"
        disabled={currentPage === 1}
      >
        &#x2C2;&#x2C2;
      </button>
      <button
        onClick={() => changePage(currentPage - 1)}
        className="btn btn-neutral"
        disabled={currentPage === 1}
      >
        &#x2C2;
      </button>
      <button
        onClick={() => changePage(currentPage + 1)}
        className="btn btn-neutral"
        disabled={currentPage === pageCount}
      >
        &#x2C3;
      </button>
      <button
        onClick={() => changePage(pageCount)}
        className="btn btn-neutral"
        disabled={currentPage === pageCount}
      >
        &#x2C3;&#x2C3;
      </button>
    </div>
  );
};

export default Pagination;
