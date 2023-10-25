const Badge = ({ published }: { published: String }) => {
  return (
    <div
      className={`badge 
      ${published === "PUBLISHED" && "badge-success"}
      ${published === "DRAFT" && "badge-warning"}
      ${published === "REVIEW" && "badge-error"}
    `}
    >
      {published === "PUBLISHED" && "Published"}
      {published === "DRAFT" && "Draft"}
      {published === "REVIEW" && "Review"}
    </div>
  )
}

export default Badge
