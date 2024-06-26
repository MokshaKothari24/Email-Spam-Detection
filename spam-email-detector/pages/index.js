import Image from "next/image";
import { Inter } from "next/font/google";
import SpamDetectorForm from "@/components/SpamDetectorForm";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className} bg-blue-200`}
    >
      <Header/>
      <SpamDetectorForm/>
    </main>
  );
}


