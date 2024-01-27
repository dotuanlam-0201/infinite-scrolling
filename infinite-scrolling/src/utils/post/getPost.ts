
export const getPost = ({ id }: { id?: string }) => {
    return fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
}