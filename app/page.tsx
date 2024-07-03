import type { Metadata } from 'next'
import PostList from "@/components/posts/PostList";

export const metadata: Metadata = {
  title: 'Home',
  description: '...',
}

export default function Page() {
  return (
    <div className="m-4 sm:m-8">
      <PostList />

      <div className="container text-center">
        <div className="join">
          <button className="join-item btn btn-md">1</button>
          <button className="join-item btn btn-md btn-active">2</button>
          <button className="join-item btn btn-md">3</button>
          <button className="join-item btn btn-md">4</button>
        </div>
      </div>

    </div>
  );
}
