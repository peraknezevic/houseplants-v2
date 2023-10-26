"use client"
import axios from "axios"
import { useRouter } from "next/navigation"

const DeleteButton = ({ pageSlug }: { pageSlug: string }) => {
  const router = useRouter()

  const handleClick = async () => {
    try {
      await axios.delete("/api/pages/" + pageSlug)
      router.push("/dashboard/pages")
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button className="btn-sm btn-error" onClick={handleClick}>
      Delete
    </button>
  )
}

export default DeleteButton
