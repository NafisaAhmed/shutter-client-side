export const setAuthToken = user => {
    const currentUser = {
        email: user.email
    }
    fetch('https://shutters-server-theta.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log('data', data);
            localStorage.setItem('shutter-token', data.token);
        })
}