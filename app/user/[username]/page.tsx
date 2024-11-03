const Page = async ({ params }: { params: Promise<{ username: string }> }) => {
  const { username } = await params;
  return <div>UserPage {username}</div>;
};

export default Page;
