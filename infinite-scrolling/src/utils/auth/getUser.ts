export const getUser = (props: { token: string }) => {
    return fetch('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${props.token}`,
        },
    })
        .then(res => res.json())
}