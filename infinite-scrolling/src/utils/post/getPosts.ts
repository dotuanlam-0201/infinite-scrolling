
export const getPosts = ({ query, limit }: { query: string, limit: number}) => {
    return fetch(`https://dummyjson.com/products/search?q=${query || ''}&limit=${limit}`)
        .then(res => res.json())
}