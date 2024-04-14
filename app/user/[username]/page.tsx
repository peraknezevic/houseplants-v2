export default function UserPage({ params }: { params: { username: string } }) {
  return <div>UserPage {params.username}</div>;
}
