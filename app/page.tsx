import HelloWorld from "@/components/hello-world";
import { Metadata } from "next";

export default function Home() {
  return <HelloWorld />;
}

export const metadata: Metadata = {
  title: "Houseplants",
  description: "All about your indoor plants",
};
