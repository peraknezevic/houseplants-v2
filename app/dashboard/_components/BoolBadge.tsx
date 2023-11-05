const BoolBadge = ({ bool }: { bool: Boolean }) => {
  return (
    <div
      className={`badge
    ${bool ? "badge-success" : "badge-warning"}
  `}
    ></div>
  )
}

export default BoolBadge
