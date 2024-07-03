import type { Metadata } from 'next'
import PostList from "@/components/posts/PostList";

export const metadata: Metadata = {
  title: 'Posts',
  description: '...',
}

export default async function Page() {
  return (
    <div className="m-4 sm:m-8">
      <h1 className="mb-20 text-center text-4xl font-bold">All Posts</h1>

      <PostList />

      <div className="join">
        <button className="join-item btn btn-md">1</button>
        <button className="join-item btn btn-md btn-active">2</button>
        <button className="join-item btn btn-md">3</button>
        <button className="join-item btn btn-md">4</button>
      </div>

    </div>
  );
}
