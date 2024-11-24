import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to ModernNav
        </h1>
        <p className="text-lg text-muted-foreground">
          A beautiful, responsive navigation system built with Next.js and Tailwind CSS.
          Features a mobile-first design with smooth transitions and dark mode support.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg">
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </section>
    </div>
  );
}