const Page = ({ params }: { params: { username: string } }) => {
  return <div>UserPage {params.username}</div>;
};

export default Page;
