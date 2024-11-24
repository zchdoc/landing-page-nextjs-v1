import { Code2, Newspaper, Palette, BookOpen, Laptop, Coffee } from "lucide-react";

export interface Bookmark {
  title: string;
  url: string;
  description: string;
}

export interface Category {
  name: string;
  icon: any;
  bookmarks: Bookmark[];
}

export const categories: Category[] = [
  {
    name: "Development",
    icon: Code2,
    bookmarks: [
      {
        title: "GitHub",
        url: "https://github.com",
        description: "World's leading software development platform"
      },
      {
        title: "Stack Overflow",
        url: "https://stackoverflow.com",
        description: "Developer community for solving coding problems"
      },
      {
        title: "MDN Web Docs",
        url: "https://developer.mozilla.org",
        description: "Resources for developers, by developers"
      }
    ]
  },
  {
    name: "Design Resources",
    icon: Palette,
    bookmarks: [
      {
        title: "Dribbble",
        url: "https://dribbble.com",
        description: "Design inspiration and creative community"
      },
      {
        title: "Figma",
        url: "https://figma.com",
        description: "Collaborative interface design tool"
      },
      {
        title: "Unsplash",
        url: "https://unsplash.com",
        description: "Beautiful free images and photos"
      }
    ]
  },
  {
    name: "Learning",
    icon: BookOpen,
    bookmarks: [
      {
        title: "freeCodeCamp",
        url: "https://www.freecodecamp.org",
        description: "Learn to code for free"
      },
      {
        title: "Coursera",
        url: "https://www.coursera.org",
        description: "Online courses from top universities"
      },
      {
        title: "Dev.to",
        url: "https://dev.to",
        description: "Inclusive community for software developers"
      }
    ]
  },
  {
    name: "Tech News",
    icon: Newspaper,
    bookmarks: [
      {
        title: "TechCrunch",
        url: "https://techcrunch.com",
        description: "Latest technology news and startups"
      },
      {
        title: "The Verge",
        url: "https://www.theverge.com",
        description: "Technology, science, art, and culture"
      },
      {
        title: "Hacker News",
        url: "https://news.ycombinator.com",
        description: "Tech and startup news aggregator"
      }
    ]
  },
  {
    name: "Tools",
    icon: Laptop,
    bookmarks: [
      {
        title: "VS Code",
        url: "https://code.visualstudio.com",
        description: "Popular code editor by Microsoft"
      },
      {
        title: "Notion",
        url: "https://www.notion.so",
        description: "All-in-one workspace for notes and collaboration"
      },
      {
        title: "Vercel",
        url: "https://vercel.com",
        description: "Platform for frontend frameworks and static sites"
      }
    ]
  },
  {
    name: "Community",
    icon: Coffee,
    bookmarks: [
      {
        title: "Discord",
        url: "https://discord.com",
        description: "Chat and community platform"
      },
      {
        title: "Reddit",
        url: "https://www.reddit.com",
        description: "Network of communities"
      },
      {
        title: "Product Hunt",
        url: "https://www.producthunt.com",
        description: "Place to discover new products"
      }
    ]
  }
];