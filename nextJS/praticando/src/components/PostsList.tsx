import { Post } from "@/types/Post";
import Link from "next/link";

export default function PostsList({ post }: any) {
    return (
        <Link
            className="inline-block w-fit"
            href={`/posts/${post.id}`}
        >
            Título {post.id}: {post.title}
        </Link>
    );
}