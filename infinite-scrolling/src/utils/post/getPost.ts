import { Post } from "../../modules/post/model"

export const URL_SVC = 'https://dummyjson.com/products/'

export const getPost = ({ id }: { id?: string }) => {
    return fetch(`${URL_SVC}${id}`)
        .then(res => res.json())
        .catch(() => new Post())
}