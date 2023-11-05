const PublishedBadge = ({ published }: { published: String }) => {
  return (
    <div
      className={`badge
  ${published === "PUBLISHED" && "badge-success"}
  ${published === "DRAFT" && "badge-warning"}
  ${published === "REVIEW" && "badge-info"}
`}
    >
      {published === "PUBLISHED" && "Published"}
      {published === "DRAFT" && "Draft"}
      {published === "REVIEW" && "Review"}
    </div>
  )
}

export default PublishedBadge
