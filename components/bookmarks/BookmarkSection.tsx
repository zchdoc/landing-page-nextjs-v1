import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookmarkCard } from "./BookmarkCard";
import { Category } from "@/lib/bookmarks";

interface BookmarkSectionProps {
  category: Category;
}

export function BookmarkSection({ category }: BookmarkSectionProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <category.icon className="h-5 w-5" />
          {category.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.bookmarks.map((bookmark) => (
            <BookmarkCard
              key={bookmark.url}
              {...bookmark}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}