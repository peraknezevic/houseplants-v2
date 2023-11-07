import Pagination from "./dashboard/_components/Pagination";

const Home = ({ searchParams }: { searchParams: { page: string } }) => {
  return (
    <Pagination
      itemCount={500}
      pageSize={15}
      currentPage={parseInt(searchParams.page)}
    />
  );
};

export default Home;
