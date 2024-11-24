import { BookmarkSection } from "@/components/bookmarks/BookmarkSection";
import { categories } from "@/lib/bookmarks";

export default function BookmarksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">My Bookmarks</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated collection of useful websites and resources, organized by category
          </p>
        </div>
        
        <div className="space-y-8">
          {categories.map((category) => (
            <BookmarkSection 
              key={category.name} 
              category={category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}