function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        fetch ('api/user/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        }).then ((response) => {
            if(response.ok) {
                document.location.replace('/mybar')
            }
            console.log(response)})
    }
    
}

document.querySelector('#login-form').addEventListener('submit', loginFormHandler)