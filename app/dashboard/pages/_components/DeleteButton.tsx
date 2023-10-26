"use client"
import axios from "axios"
import { useRouter } from "next/navigation"

const DeleteButton = ({ pageSlug }: { pageSlug: string }) => {
  const router = useRouter()
  return (
    <button
      className="btn-sm btn-error"
      onClick={async () => {
        await axios.delete("/api/pages/" + pageSlug)
        router.push("/dashboard/pages")
        router.refresh()
      }}
    >
      Delete
    </button>
  )
}

export default DeleteButton
