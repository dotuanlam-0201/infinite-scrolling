export const login = ({ username, password }: { username?: string, password?: string }) => {
    return fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username,
            password: password,
            expiresInMins: 5,
        })
    })
    .then((res)=>res.json())
}