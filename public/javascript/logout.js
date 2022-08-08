async function logout() {
   const response = await fetch('/api/user/logout', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json'}
   });

   if (response.ok) {
       document.location.replace('/');
   } else {
       alert(response.statusText);
   }
}

//MAKE SURE #logout MATCHES THE HTML
document.querySelector('#logout-btn').addEventListener('click', logout)