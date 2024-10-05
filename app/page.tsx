import Image from "next/image";
// import ImageGenerator from "../components/image_generator";
import ImageGrid from "../components/image_grid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Ghibli Style Image Generator</h1>
      </header>
      <main className="flex-grow">
        {/* We'll use a client-side component to manage state */}
        {/* Step 1: Create a new component for managing state */}
        {/* Step 2: This component will handle both image generation and display */}
        {/* Step 3: We'll implement data persistence in the next steps */}
        <ImageGrid /> 
      </main>
      <footer className="mt-8 text-center text-sm text-gray-500">
        Powered by Next.js and Replicate
      </footer>
    </div>
  );
}
