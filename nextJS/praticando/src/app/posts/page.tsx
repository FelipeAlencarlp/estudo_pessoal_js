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

    async function createPost(formData: FormData) {
        'use server';
        const title= formData.get('title');
        console.log(title);
    }

    return (
        <div>
            <TituloPagina>Posts</TituloPagina>

            <div className="flex items-center mb-10">
                <form action={createPost}>
                    <h2>Adicionar Novo Post:</h2>

                    <input
                        type="text"
                        name="title"
                        placeholder="Digite o título"
                        className="border rounded text-white py-1 px-2 mr-2"
                    />
                    <button
                        type="submit"
                        className="
                            rounded px-2 py-1
                            bg-blue-500 hover:bg-blue-400 cursor-pointer
                        "
                    >
                        Adicionar
                    </button>
                </form>
            </div>

            <div>
                <h2 className="text-xl mb-3">Lista de Posts</h2>

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
        </div>
    );
}