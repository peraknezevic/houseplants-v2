"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

type DeleteButtonProps = {
  slug: string;
  cat: string;
};

export default function DeleteButton({ slug, cat }: DeleteButtonProps) {
  const apiUrl = `/api/${cat}/${slug}`;
  const redirectUrl = `/dashboard/${cat}/`;
  const router = useRouter();

  const handleClick = async () => {
    try {
      await axios.delete(apiUrl);
      router.push(redirectUrl);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button className="btn-red btn" onClick={handleClick}>
      Delete
    </button>
  );
}
