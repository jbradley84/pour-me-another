async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

//MAKE SURE #logout MATCHES THE HTML
document.querySelector('#logout').addEventListener('click', logout)