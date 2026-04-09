import TituloPagina from "@/components/TituloPagina";
import Link from "next/link";
import { getPosts } from "@/services/postService";
import { cacheLife } from "next/cache";

export default async function Posts() {
    'use cache';
    cacheLife({
        stale: 10,
        revalidate: 10,
    });

    const posts = await getPosts();
    const postsLimitados = posts.slice(0, 5);

    return (
        <div>
            <TituloPagina>Posts vindo de uma API pública</TituloPagina>

            <div className="flex flex-col">
                {postsLimitados.map((item: any, i: number) => (
                    <Link
                        className="inline-block w-fit"
                        key={item.id}
                        href={`/posts/${item.id}`}
                    >
                        Título {i + 1}: {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}