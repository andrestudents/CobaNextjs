import Hero from "./hero";
import { BackgroundLinesDemo } from "../components/BackgroundLinesDemo";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gray-100 text-black">
      {/* Hero Section */}
      <Hero />
      <BackgroundLinesDemo />


    </main>
  );
}
