import { Posts } from "../../modules/post/model"
import { URL_SVC } from "./getPost"

export const getPosts = ({ query, limit }: { query: string, limit: number }) => {
    return fetch(`${URL_SVC}search?q=${query || ''}&limit=${limit}`)
        .then(res => res.json())
        .catch(() => new Posts())
}
