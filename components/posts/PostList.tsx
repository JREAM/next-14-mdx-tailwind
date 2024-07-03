import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/api";
import PostInfo from "@/components/posts/PostInfo";

export default async function PostList() {
  const posts = await getAllPosts();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        const { metadata } = post;
        const title = String(metadata.title);

        return (
          <Link
            key={title}
            href={`/posts/${post.slug}`}
            className="flex flex-col overflow-hidden rounded shadow-lg transition-shadow duration-200 hover:shadow-xl"
          >
            {metadata.image && <Image className="h-48 w-full object-cover" src={metadata.image} alt={title} />}
            <div className="px-6 py-4">
              <PostInfo post={post} className="-mt-2 mb-2 text-xs" />
              <div className="mb-2 text-xl font-bold">{title}</div>
              <p className="text-base text-gray-700">{metadata.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
