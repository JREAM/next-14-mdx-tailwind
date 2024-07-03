import { Metadata } from "next";

export type Post = {
  slug: string;
  metadata: Metadata & {
    slug: string;
    date?: string;
    image?: string;
  };
  component: any;
  readingTime: string;
};
