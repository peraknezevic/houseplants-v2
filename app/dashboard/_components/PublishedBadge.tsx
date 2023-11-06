const PublishedBadge = ({ published }: { published: String }) => {
  return (
    <div
      className={`mx-auto h-4 w-4 rounded-full
  ${published === "PUBLISHED" && "btn-success"}
  ${published === "DRAFT" && "btn-warning"}
  ${published === "REVIEW" && "btn-info"} 
`}
    ></div>
  );
};

export default PublishedBadge;
