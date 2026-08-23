import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import DeleteButton from "@/components/admin/delete-button";
import Link from "next/link";
import { enumToString } from "@/lib/utils";

type ContentRow = {
  id: string;
  title: string;
  slug: string;
  published: string;
  updatedAt: Date | null;
};

type DeleteActionResult = { message?: string; success?: boolean } | undefined;

const publishedVariant = (published: string) => {
  if (published === "PUBLISHED") return "default" as const;
  if (published === "DRAFT") return "secondary" as const;
  return "outline" as const;
};

const ContentTable = ({
  items,
  editHrefBase,
  deleteAction,
}: {
  items: ContentRow[];
  editHrefBase: string;
  deleteAction: (id: unknown) => Promise<DeleteActionResult>;
}) => {
  if (items.length === 0) {
    return <p className="text-sm opacity-70">Nothing here yet.</p>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Updated</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <Link
                href={`${editHrefBase}/${item.slug}/edit`}
                className="underline-offset-4 hover:underline"
              >
                {item.title}
              </Link>
            </TableCell>
            <TableCell>
              <Badge variant={publishedVariant(item.published)}>
                {enumToString(item.published)}
              </Badge>
            </TableCell>
            <TableCell>
              {item.updatedAt
                ? new Date(item.updatedAt).toLocaleDateString()
                : "—"}
            </TableCell>
            <TableCell className="text-right">
              <DeleteButton
                id={item.id}
                itemLabel={item.title}
                action={deleteAction}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ContentTable;
