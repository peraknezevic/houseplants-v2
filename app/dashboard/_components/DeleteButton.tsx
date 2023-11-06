"use client"
import axios from "axios"
import { useRouter } from "next/navigation"

const DeleteButton = ({ slug, cat }: { slug: string; cat: string }) => {
  const apiUrl = `/api/${cat}/${slug}`
  const redirectUrl = `/dashboard/${cat}/`
  const router = useRouter()

  const handleClick = async () => {
    try {
      await axios.delete(apiUrl)
      router.push(redirectUrl)
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button className="btn btn-sm btn-error" onClick={handleClick}>
      Delete
    </button>
  )
}

export default DeleteButton
