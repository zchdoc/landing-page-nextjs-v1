"use client";

import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

interface BookmarkCardProps {
  title: string;
  url: string;
  description: string;
  icon?: string;
  className?: string;
}

export function BookmarkCard({ title, url, description, icon, className }: BookmarkCardProps) {
  return (
    <Card 
      className={cn(
        "group relative overflow-hidden transition-all hover:shadow-lg",
        className
      )}
    >
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6 h-full"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          </div>
          <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </a>
    </Card>
  );
}