import "@/styles/global.css";
import Image from "next/image";
import { headers } from "next/headers";
import PostInfo from "@/components/posts/PostInfo";
import { getPostBySlug } from "@/lib/api";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const slug = headers().get("x-next-post-slug") as string;
  const post = await getPostBySlug(slug);

  const { metadata } = post;
  const image = metadata?.image;

  return (
    <article className="prose m-8 mx-auto lg:prose-xl">
      {image && (
        <div className="flex max-h-[60vh] justify-center">
          <Image
            src={image}
            alt={String(metadata.title)}
            width={1200}
            height={630}
            className="rounded-md object-scale-down"
          />
        </div>
      )}
      <PostInfo post={post} className="-mt-8 mb-4 px-1 text-sm" />
      {children}
    </article>
  );
}
