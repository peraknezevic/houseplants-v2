import { Metadata } from "next";
import HelloWorld from "./components/HelloWorld";

const Home = () => {
  return <HelloWorld />;
};

export default Home;

export const metadata: Metadata = {
  title: "Houseplants",
  description: "All about your indoor plants",
};
