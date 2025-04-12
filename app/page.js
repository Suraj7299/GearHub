import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";


export default function Home() {
  return (
    
    <ClerkProvider>
      <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
      <Header />
    </ClerkProvider>
  );
}
