export async function getPosts(): Promise<any> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    return response.json();
}