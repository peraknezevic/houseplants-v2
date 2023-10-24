import { notFound } from "next/navigation"
import { remark } from "remark"
import html from "remark-html"

const Page = async ({ params }: { params: { slug: string } }) => {
  const res = await fetch(`http://localhost:3000/api/pages/${params.slug}`)
  const data = await res.json()
  const markdown = await remark().use(html).process(data.content)
  const content = { __html: markdown.value }

  console.log(markdown.value)

  if (!data) return notFound()

  return (
    <div className="p-5">
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={content} />
    </div>
  )
}

export default Page
