import TituloPagina from "@/components/TituloPagina";
import { getPosts } from "@/services/postService";
import { cacheLife, revalidatePath } from "next/cache";
import Search from "@/components/Search";
import PostsList from "@/components/PostsList";
import Link from "next/link";

export default async function Posts(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    let posts = await getPosts();
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const ITEMS_PER_PAGE = 5;

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);

    const paginatedPosts = posts.slice(start, end);

    posts = query
        ? posts.filter((item: any) => 
            item.title.toLowerCase().includes(query.toLowerCase())
        )
        : posts;

    return (
        <div>
            <TituloPagina>Posts</TituloPagina>

            <Search placeholder="Busque pelo título do Post"/>

            <div>
                <h2 className="text-xl mb-3">Lista de Posts</h2>

                <div className="flex flex-col">
                    {paginatedPosts.map((item: any, i: number) => (
                        <PostsList
                            key={item.id}
                            post={item}
                        />
                    ))}
                </div>

                <div className="flex gap-4 mt-5">
                    {currentPage > 1 && (
                        <Link
                            className="hover:underline"
                            href={`/posts?page=${currentPage - 1}`}
                        >
                            Anterior
                        </Link>
                    )}
                    {currentPage < totalPages && (
                        <Link
                            className="hover:underline"
                            href={`/posts?page=${currentPage + 1}`}
                        >
                            Próximo
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}