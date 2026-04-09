import TituloPagina from "@/components/TituloPagina";

export default async function FindPostId({ params }: any) {
    const param = await params;

    if (param.id > 100 || param.id < 1) {
        throw new Error('Post não encontrado');
    }

    const api = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${param.id}`
    );
    const post = await api.json();

    return (
        <div>
            <TituloPagina>Post ID: {param.id}</TituloPagina>

            <p>Título: {post.title}</p>
            <p>Conteúdo: {post.body}</p>
        </div>
    );
}