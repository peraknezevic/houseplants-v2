import { Button } from "@/components/ui/button";
import Link from "next/link";

const AdminPagination = ({
  basePath,
  page,
  totalPages,
}: {
  basePath: string;
  page: number;
  totalPages: number;
}) => {
  if (totalPages <= 1) return null;

  const hasPrevious = page > 1;
  const hasNext = page < totalPages;

  return (
    <div className="mt-6 flex items-center justify-between">
      <p className="text-sm opacity-70">
        Page {page} of {totalPages}
      </p>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" disabled={!hasPrevious} asChild={hasPrevious}>
          {hasPrevious ? (
            <Link href={`${basePath}?page=${page - 1}`}>Previous</Link>
          ) : (
            <span>Previous</span>
          )}
        </Button>
        <Button variant="outline" size="sm" disabled={!hasNext} asChild={hasNext}>
          {hasNext ? (
            <Link href={`${basePath}?page=${page + 1}`}>Next</Link>
          ) : (
            <span>Next</span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default AdminPagination;
